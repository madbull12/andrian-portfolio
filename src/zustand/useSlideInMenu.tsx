import { create } from "zustand"

interface SlideIn {
    isOpen:boolean;
    setOpen:()=>void
}

const useSlideInMenu = create<SlideIn>((set)=>({
    isOpen:false,
    setOpen:()=>set((state)=>({ isOpen:!state.isOpen }))
}))

export default useSlideInMenu