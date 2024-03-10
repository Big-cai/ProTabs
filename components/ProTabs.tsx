import { log } from "console"
import { useState,ReactNode } from "react"

interface Icategory {
  title: string,
  id: number
}

interface Props {
  tabs?: Icategory[], // 传进来的tabs数据
  className: string, // 传进来的样式
  children?: ReactNode, //传进来的子组件内容
  page: number, // 当前显示的是哪一个pages
  onTabClick: (tabs:any,index: number) => void, // 点击tabs 的方法
  height?: number, // 外面穿进来的高度
}


const ProTabs = (props: Props) => {
  const [flag, setFlag] = useState<boolean>(true);// 截流标记

console.log(props.children,'props.children')  
  return (
    <div className="h-full">
      <div className={props.className}>
        {props.tabs?.map((item: any, index: number) => {      
  
          return (
            <div
              className={`mr-11  font-medium  whitespace-nowrap pt-7  align-top cursor-pointer ${props.page === index ? 'border-b-2 border-[#022344]' : ''}`}
              key={index}
              onClick={(e) => {
                  props.onTabClick(item, index);
              }}
            >
              {item?.title || ""}
            </div>
          );
        })}
      </div>
      
      <div>    
        {props.children}
      </div>
    </div>
  );
}

export default ProTabs