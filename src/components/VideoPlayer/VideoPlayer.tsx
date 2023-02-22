import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ video }: { video: string }) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  console.log(playerState.speed)
  return (
    <div
      className={`${styles.videoWrapper} lg:w-2/3 h-52 w-full shadow-neumorphism dark:shadow-darkNeumorphism`}
    >
      <video src={video} ref={videoElement} onTimeUpdate={handleOnTimeUpdate} />
      <div
        className={`${styles.controls} p-1 lg:p-4 bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8`}
      >
        <div className={styles.actions}>
          <button onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <Icon
                icon="material-symbols:play-arrow-sharp"
                className="text-2xl bg-transparent"
              />
            ) : (
              <Icon
                icon="material-symbols:pause-outline"
                className="text-2xl bg-transparent"
              />
            )}
          </button>
        </div>
        {/* <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
          onChange={(e) => handleVideoProgress(e)}
        /> */}
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress.toString()}
          onChange={(e) => handleVideoProgress(e)}
        />
        <select
          className={styles.velocity}
          value={playerState.speed}
          onChange={(e) => handleVideoSpeed(e)}
        >
          <option
            value="0.50"
            className="dark:bg-gray-900 text-gray-500 bg-gray-200 p-2"
          >
            0.50x
          </option>
          <option
            value="1"
            className="dark:bg-gray-900 text-gray-500 bg-gray-200 p-2"
          >
            1x
          </option>
          <option
            value="1.25"
            className="dark:bg-gray-900 text-gray-500 bg-gray-200 p-2"
          >
            1.25x
          </option>
          <option
            value="2"
            className="dark:bg-gray-900 text-gray-500 bg-gray-200 p-2"
          >
            2x
          </option>
        </select>
        <button className={styles.muteBtn} onClick={toggleMute}>
          {!playerState.isMuted ? (
            <Icon icon="material-symbols:volume-up" />
          ) : (
            <Icon icon="material-symbols:volume-mute" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
