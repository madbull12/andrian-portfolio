import React, { useRef } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import styles from "./VideoPlayer.module.css";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsPlayBtnFill,
  BsPauseBtnFill,
  BsVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

const VideoPlayer = ({ video }: { video: string }) => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div
      className={`${styles.videoWrapper} w-2/3 shadow-neumorphism dark:shadow-darkNeumorphism`}
    >
      <video src={video} ref={videoElement} onTimeUpdate={handleOnTimeUpdate} />
      <div className={styles.controls}>
        <div className={styles.actions}>
          <button onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <BsPlayBtnFill className="text-2xl bg-transparent" />
            ) : (
              <BsPauseBtnFill className="text-2xl bg-transparent" />
            )}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
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
          {!playerState.isMuted ? <BsFillVolumeUpFill /> : <BsVolumeMuteFill />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;