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


const Portfolio =()=>{
    return(
        <>  
        <ScrollIndicator/>
        <div>
            <div >
                <nav className="flex flex-row  text-center justify-center gap-20 my-[20px]">
                    <div>Works</div>
                    <div>Mathias</div>
                    <div>Garden</div>
                </nav>
                
               <div className="text-center justify-center gap-20 py-[30px]">
                {/* <FontAwesome /> */}
                <div className="py-[20px]">
                     <h3>Hi, I'm Mathias</h3>
                </div>
                <div className="text-[60px]">
                    <h3>Software and <br /> Front-End develeper <br />you can count on</h3>
                </div>
                <div className="text-[20px] py-[13px]">
                    <p>Simplicity is my super power. I turn complex Ideas into experiences users love  <br /> and investors  trust i help. i help Upcomming Buisness's , <br />Founder, Saas  craft story-driven brands and products.</p>
                </div>
               </div>
               <div  className="text-center justify-center gap-20 text-white  ">
                <button className="navbtns  p-2 px-[20px]">Chat with me</button>
               </div>
            </div>  
                <div className="middleman mb-[90px]">
                    <div>
                        <h3 className="py-5 text-[30px]">Tiny fraction of my work</h3>
                        <p className="flex justify-start w-[40%]">Teaming with founders and  buisness owner's to propel their next product through developing website's  that are  both functional and great looking.</p>
                    </div>
                    
                    <div className="Projects">

                    <div className="flex babeofthemeall">
                        <div className="babafirspac" style={{width:"50%"}}>
                            <div className="firstspac">
                            <img src={space1} alt="" className="firimfmfnspa2"  />
                             <img src={space2} alt="" className="firimfmfnspa" />
                            </div>
                            
                           
                        </div>

                        <div className="">
                            <div className="minsidespace1">
                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tempora consectetur?</p>
                        </div>

                        <div className="minsidespace1">
                        <p> Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.</p>
                        </div>
                        </div>
                        
                    </div>

                     <div className="flex babeofthemeall">
                         <div>
                            <div className="minsidespace1">
                                 <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tempora consectetur? </p>
                        </div>

                        <div className="minsidespace1">
                        <p>
                            Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.
                        </p>
                        </div>
                        </div>
                        <div  className="babafirspac relative left-[-40%]">
                            <div className="firstspac relative left-[120px] w-[80%]">
                            <img src={chrisban1} alt="" className="firimfmfnspa2" style={{width:"50%"}}  />
                             <img src={chrisban2} alt="" className="firimfmfnspa" style={{width:"50%"}}/>
                            </div>
                        </div>
                    </div>

                     <div className="flex babeofthemeall">
                        <div  className="babafirspac firimfmfnspa4" style={{width:"50%"}}>
                           <div className="firstspac ">
                            <img src={devrift1} alt="" className="firimfmfnspa2"  />
                             <img src={devrift2} alt="" className="firimfmfnspa firstspac2" />
                            </div>
                        </div>
                        <div className="">
                            <div className="minsidespace1">
                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tempora consectetur? </p>
                        </div>

                        <div className="minsidespace1">
                        <p> Quasi corrupti non odit sequi itaque? Necessitatibus, praesentium. Facilis.</p>
                        </div>
                        </div>
                    </div>

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
                        <div className="flex justify-center">
                             <p className="w-[40%]">Creativity has always been my escape -first through drawing, now through designe and developement. I find joy through discovering hidden food ,spots and mobile gaming
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