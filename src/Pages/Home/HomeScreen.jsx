import { IntroWindow } from "../../components/IntroWindow"
import img from '../../assets/down.svg'
import github from "../../assets/github.svg"
import linkdin from "../../assets/in.svg"
import twitter from "../../assets/twitter.svg"
import vector from "../../assets/Vector.svg"

import "../../styles/IntroWindow.css"

const icons = [{
    img: github
}, {img: twitter}, {img:linkdin}]


export const HomeScreen = () => {
    return (
      <div className=" mt-5  w-screen h-screen relative">
     <div className="">
     <div className="px-12">
        <IntroWindow />
      </div>
      <div className="absolute top-10 right-0" >
      <img src={vector} />
      </div>
            {/* <a className="rotate-x-90" >mubarak@codeswot.io</a> */}

      <div className="imageButton">
       <img src={img} width="40px" />
      </div>
      
      <div className="absolute w-full bottom-20 left-5  ">
      {
          icons.map((item, idx) => (
           <a href="#" key={idx}>
           <div className="rounded-3xl bg-white w-6 my-5" >
           <img src={item.img} className="inline-block h-5 w-5 rounded-full ring-8 ring-white" />
       </div>
           </a>
          ))
      }
      </div>
     </div>

      </div>
    )

}