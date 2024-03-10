import { useRef,useEffect,useState } from "react";
import Image from "next/image";
import { log } from "console";

const ProVideo = () => {
  const [innerWidth,setInnerWidth] = useState(0)
  const [innerHeiht,setInnerHeiht] = useState(0)
  const [show,setShow] = useState('block')
const event = useRef<HTMLVideoElement>(null)

useEffect(()=>{
  if(event.current) {
    setInnerWidth(event.current.offsetWidth || event.current.clientWidth)
    setInnerHeiht(event.current?.offsetHeight || event.current.clientHeight)

    // 播放开始触发
    event.current.onplay = (e) => {
      console.log(e,'e');
       setShow('hidden 开始')
    }

    // 播放结束触发
    event.current.onpause = (e) => {
      console.log(e,'e');
      setShow('block 结束')
    }

    console.log(event.current.volume ,'volume');
    
  }

  
},[event])


  return (
    <div className="h-[600px]">
      <video className="relative" id="video" controls={false} ref={event}>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />

      </video>
        <div className={`w-[${innerWidth}px] h-[${innerHeiht}px] bg-[#58585a] opacity-50 absolute top-0 left-0 ${show}`}>
          <button className="mt-[25%]" onClick={()=>{
                if(event.current) {
                  event.current.play()
                  setShow('hidden')
                }
               
            }}>
            <Image src="/image/Playback.png" alt="out" width={60} height={70}/>
          </button>
        </div>
      
    </div>
  )
}

export default ProVideo;