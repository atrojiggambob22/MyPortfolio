import React from "react";
import './Portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import devrift1 from "../public/Images/devrift1.PNG"
import devrift2 from "../public/Images/devrift2.PNG"
import chrisban1 from "../public/Images/chrisban1.PNG"
import chrisban2 from "../public/Images/chrisban2.PNG"
import space2 from "../public/Images/space2.PNG"
import space1 from "../public/Images/space1.PNG"
import enugu from "../public/Images/enugu.jpeg"
import bayelsa from "../public/Images/bayelsa.jpeg"
import me from "../public/Images/me.jpeg"
// import LoadingCircleSpinner from "./LoadingCircleSpinner"
import ScrollIndicator from "./ScrollIndicator"
import FadeInSection from "./FadeInSection";
import BounceIn from "./BounceIn";
import SlideIn from "./SlideIn"
import flower from "../public/Images/flower.png"
import flower2 from "../public/Images/flower2.png"
// import FlipIn from "./FlipIn"
const Portfolio =()=>{
    return(
        <>  
        <ScrollIndicator/>
        <div className="bg-gray-100">
            <div >
                <nav className="flex flex-row  text-center justify-center gap-20 my-[20px]">
                    <div>Works</div>
                    <div>Mathias</div>
                    <div>Garden</div>
                </nav>
                
               <div className="text-center justify-center gap-20 py-[30px] flex">
                {/* <FontAwesome /> */}
                

                <div className="relative  " >
                {/* <img src={flower} alt=""  className="themigwei" /> */}

                </div>
                <div className="" style={{overflow:'hidden'}}>
                    <BounceIn >
                     <div className="py-[20px] ">
                     <h3>Hi, I'm Mathias</h3>
                </div>
                </BounceIn>
                     <FadeInSection delay={0.5}>

                <div className="text-[60px]">
                    <h3> A <span style={{fontFamily: 'Italiana, serif', fontSize:'85px' }}>Software</span>  and <br /> <span style={{fontFamily: 'Italiana, serif', fontSize:'85px'}}>Front-End </span>  develeper <br />you can <span style={{fontFamily: 'Italiana, serif',fontSize:'85px' }}>Rely</span>  on</h3>
                </div>
                </FadeInSection>
                <FadeInSection delay={0.9}>
                    <div className="text-[20px] py-[13px]">
                    <p>Simplicity is my super power. I turn complex Ideas into experiences users love  <br /> and investors  trust i help. i help Upcomming Buisness's , <br />Founder, Saas  craft story-driven brands and products.</p>
                </div>
                </FadeInSection>
                </div>
               

                 <div>
                {/* <img src={flower2} alt="" className="themigwei" /> */}

                </div>
               </div>
               

               <div  className="text-center justify-center gap-20 text-white  mb-[140px]">
                
                <button className="navbtns  p-2 px-[20px]">Chat with me</button>
               </div>
               
            </div>  
                <div className="middleman mb-[90px]">
                    <FadeInSection>

                    <div>
                        <h3 className="py-5 text-[30px]">Tiny fraction of my work</h3>
                        <p className="flex justify-start w-[40%]">Teaming with founders and  buisness owner's to propel their next product through developing website's  that are  both functional and great looking.</p>
                    </div>
                    </FadeInSection>
                    
                    <div className="Projects">

                   
                     <SlideIn from="left" delay={0.4}>
                            <div className="flex babeofthemeall">
                        <div className="babafirspac" style={{width:"40%"}}>
                            <div className="firstspac">
                            <img src={space1} alt="" className="firimfmfnspa2"   />
                             <img src={space2} alt="" className="firimfmfnspa" />
                            </div>
                            
                           
                        </div>

                        <div className="">
                            <div className="w-[35%] flowerighs" >
                                <img src={flower} alt="" style={{border:"none"}} className="themigweimgds"/>
                        </div>

                        <div className="minsidespace1">
                        <p> Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.</p>
                        </div>
                        </div>
                        
                    </div>
                     <div className="minofmeintg flex gap-[160px] w-[45%] relative left-[80px] p-5 rounded-[50px]" >
                        <h3 className="relative top-[5px] left-[20px]">You can click on this button to check the site out</h3>
                        <div className="bg-black text-white p-[10px] rounded-4xl "><button>Check it Out</button></div>
                    </div>
                     </SlideIn>
                    
                    
                    <SlideIn from="right" delay={0.6}>

                     <div className="flex babeofthemeall">
                         <div className="">
                           <div className="w-[35%] flowerighs3 " >
                                <img src={flower2} alt="" style={{border:"none"}} className="themigweimgds"/>
                        </div>

                        <div className="minsidespace1">
                        <p>
                            Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.
                        </p>
                        </div>
                        </div>
                        <div  className="babafirspac relative left-[-35%]">
                            <div className="firstspac relative left-[190px] w-[65%]">
                            <img src={chrisban1} alt="" className="firimfmfnspa2" style={{width:"40%"}}  />
                             <img src={chrisban2} alt="" className="firimfmfnspa" style={{width:"40%"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="minofmeintg flex gap-[160px] w-[45%] relative left-[80px] p-5 rounded-[50px]" >
                        <h3 className="relative top-[5px] left-[20px]">You can click on this button to check the site out</h3>
                        <div className="bg-black text-white p-[10px] rounded-4xl "><button>Check it Out</button></div>
                    </div>

                    </SlideIn>

                    <SlideIn from="left" delay={0.7}>

                     <div className="flex babeofthemeall">
                        <div  className="babafirspac firimfmfnspa4" style={{width:"40%"}}>
                           <div className="firstspac ">
                            <img src={devrift1} alt="" className="firimfmfnspa2"  />
                             <img src={devrift2} alt="" className="firimfmfnspa firstspac2" />
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[35%] flowerighs2" >
                                <img src={flower} alt="" style={{border:"none"}} className="themigweimgds"/>
                        </div>

                        <div className="minsidespace1">
                        <p> Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.</p>
                        </div>
                        </div>
                    </div>
                     <div className="minofmeintg flex gap-[160px] w-[45%] relative left-[80px] p-5 rounded-[50px]" >
                        <h3 className="relative top-[5px] left-[20px]">You can click on this button to check the site out</h3>
                        <div className="bg-black text-white p-[10px] rounded-4xl "><button>Check it Out</button></div>
                    </div>
                    </SlideIn>

                    </div>
                </div>

                <div className="mx-[140px] mb-[150px] bg-gray-300 p-[50px] rounded-[30px] ogapics">
                    <div>
                        <h2 className="text-[40px]">
                        Behind the Pixels
                        </h2>
                        <p>Finally,meet the young man behind the pixels a quick peek into my world</p>
                    </div>

                    <div className="flex gap-20 my-[40px] overflow-hidden  ">
                        <div className="kings-ofmin gap-20  overflow-hidden relative top-2.5 ">
                           <div className="flex gap-5 relative  left-[13px] top-1">
                             <img src={me} alt="" className="miningforme  mx-[20px] relative left-2" />
                            <img src={enugu} alt="" className="miningforme2  mx-[20px] relative left-[-12px]" />
                           </div>
                            <img src={bayelsa} alt="" className="miningforme4" />
                        </div>
                        <div className="w-[50%]"> 
                            <p className="my-[20px]">I'm a passionate Web Developer from Enugu State, Nigeria. I was Born in Bayelsa State, from an early stage i knew how phones worked and operated them really well many were facinted by my skill.
                           </p>

                           <p className="my-[20px]"> Speaking of Skills i had a huge obsession with device spec's but little did i know what i was missing out on. 'Progrmming' this is a gateway to express how you feel and bringing you dreams and Ideas to reality 

                           </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex  gap-[40px]">
                             <p className="w-[60%]">Creativity has always been my escape -first through drawing, now through designe and developement. I find joy through discovering hidden food ,spots and mobile gaming
                           </p>

                           <p className="w-[30%]">I Love new places,Peaople,new conversation and the stories they bring

                           </p>
                        </div>
                       
                        
                    </div>

                </div>
                <div className="minviebe w-[60%] relative left-[20%] rounded-[40px] bg-gray-200 text-red-500" >
                    <div>
                    {/* <FontAwesomeIcon icon={}/> */}
                    <div>

                    <p className="text-center my-[50px]">Think We Vibe?</p>
                    </div>
                    <div>

                    <p className="text-[70px] text-center  my-[50px]">Get In Touch</p>
                    </div>

                    </div>
                    <div className="flex justify-center gap-[10px]" style={{textWrap:"nowrap"}}>
                        <p className="p-[20px]">Linked In</p>
                        <p className="p-[20px]">X (twiter)</p>
                        <p className="p-[20px]">Instgram</p>
                        <p className="p-[20px]">Whatsapp</p>
                    </div>
                </div>

                <div className="text-[30px] thisimhs">
                    Your Limit Is Your Imagination
                </div>

        </div>
        </>
    )
}
export default Portfolio