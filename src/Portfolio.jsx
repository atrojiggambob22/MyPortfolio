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
import pinkflower from "../public/Images/pinkflower.png"
import flower2 from "../public/Images/flower2.png"
import Beast from "../public/Images/react.png"
import Csslogo from "../public/Images/cssp.png"
import HtmlLogo from "../public/Images/htmlp.png"
import TwindLogo from "../public/Images/twind.png"
import BStrap from "../public/Images/bstrap.png"


import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Portfolio =()=>{
    return(
        <>  
        
        <ScrollIndicator/>
       
        <div className="bg-gray-100">
            <div>
                <nav className="flex flex-row  text-center justify-center gap-20 my-[20px]">
                    <div style={{fontWeight:"600"}}>Works</div>
                    <div style={{fontWeight:"600"}}>Mathias</div>
                    <div style={{fontWeight:"600"}}>Garden</div>
                </nav>
                
               <div className="text-center justify-center gap-20 py-[30px] flex">
                {/* <FontAwesome /> */}
                

                <div className="relative  " >
                {/* <img src={flower} alt=""  className="themigwei" /> */}

                </div>
                <div className="" style={{marginBottom:"90px", 
                    paddingBottom:'20px'}} >
                    <BounceIn >
                     <div className="py-[20px] ">
                     <h3>Hi, I'm Mathias</h3>
                </div>
                </BounceIn>
                     <FadeInSection delay={0.5}>

                <div className="text-[60px] firstvhaimsn">
                    <h3> <span style={{fontFamily: 'Italiana, serif', fontSize:'85px' }}>Software</span>  and <br /> <span style={{fontFamily: 'Italiana, serif', fontSize:'60px'}}>Front-End </span>  developer <br />you can <span style={{fontFamily: 'Italiana, serif',fontSize:'85px' }}>Rely</span>  on</h3>
                </div>
                </FadeInSection>
                <FadeInSection delay={0.4}>
                    <div className="w-[70%] relative left-[180px] firppdonf">
                    <p>Simplicity is my super power. I turn complex Ideas into experiences users love  and investors  trust <span className="mingodrtheb ghididdd" style={{}}>I help. I help Upcomming Buisness's ,Founder, Saas  craft story-driven brands and products.</span> </p>
                </div>
                </FadeInSection>
                </div>
               

                 <div>
                {/* <img src={flower2} alt="" className="themigwei" /> */}

                </div>
               </div>
               

               <div  className="text-center justify-center gap-20 text-white  mb-[140px]">
                
                <a href="https://wa.me/2349049661994" target="_blank" rel="noopener noreferrer">
                <button className="navbtns  p-2 px-[20px]">Chat with me</button>
                </a>
                

               </div>
               
            </div>  

            <div className=" babascroll" >
            
            <FadeInSection delay={0.4} >
            <div className="flex my-[50px] mb-[20%] imgscrol"  >
                
                <img src={Beast} alt="" className="w-[40%]" />
                <img src={HtmlLogo} alt="" className="w-[40%]" />

                <img src={Csslogo} alt="" className="w-[40%]" />
                <img src={TwindLogo} alt="" className="w-[40%]" />
                <img src={BStrap} alt="" className="w-[40%]" />
                {/* We are duplicating for endles loops */}
                 {/* <img src={Beast} alt="" className="w-[40%]" />
                <img src={Csslogo} alt="" className="w-[40%]" />
                <img src={HtmlLogo} alt="" className="w-[40%]" />
                <img src={TwindLogo} alt="" className="w-[40%]" />
                <img src={BStrap} alt="" className="w-[40%]" /> */}

                
            </div>

            </FadeInSection>

            </div>

                    <div>

                    <div>
                     <FadeInSection>

                    <div className="relative left-[20%]">
                        <h3 className="py-5 text-[30px]">Tiny fraction of my work</h3>
                        <p className="flex justify-start w-[40%]    firsdpdppp">Teaming with founders and  buisness owner's to propel their next product through developing website's  that are  both functional and great looking.</p>
                    </div>

                    </FadeInSection>

                     <SlideIn from="left" delay={0.6}>

                    <div className="flex relative left-[20%] overflow-hidden gap-[20px]">

                     <div className=" babeofthemeall">
                        <div className="babafirspac" style={{}}>
                            <div className="firstspac">
                            <img src={space1} alt="" className="firimfmfnspa2 rounded-[40px] border-4 border-black"   />

                             <img src={space2} alt="" className="firimfmfnspa rounded-[40px] border-4 border-black" />
                            </div>
                            
                           
                        </div>

                       
                    </div>
                     <div className="Whythem ">
                        <div className=" flowerighs  my-[50px]" >
                              
                                <img src={flower} alt="" style={{border:"none", width:'20%'}} className=" inline-block bg-gray-200 p-[30px] rounded-[30px] "/>
                        </div>

                        <div className=" flowerighs my-[50px]  ">

                         <img src={Beast} alt=""className=" bg-gray-200 p-[30px] rounded-[30px]" style={{border:"none", width:'20%'}} />
                        </div>
                        </div>
                        
                    </div>
                     <div className="minofmeintg minofmeintg3332 flex gap-[160px] w-[45%] relative left-[23%] p-5 rounded-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%]">This is a Real-Estate and Property website where you can scout and check for the best homes Wealth-Space Properties have </h3>
                        <a href="https://wealthspace-properties.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[25px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                    </div>

                    </SlideIn>

                    </div>

                    <div>
                     <FadeInSection>

                   

                    </FadeInSection>

                     <SlideIn from="right" delay={0.6}>

                    <div className="flex relative left-[20%] overflow-hidden gap-[20px]">

                     <div className=" babeofthemeall">
                        <div className="babafirspac" style={{}}>
                            <div className="firstspac">
                            <img src={chrisban1} alt="" className="firimfmfnspa2 rounded-[40px] border-4 border-black"   />

                             <img src={chrisban2} alt="" className="firimfmfnspa rounded-[40px] border-4 border-black" />
                            </div>
                            
                           
                        </div>

                       
                    </div>
                     <div className="Whythem ">
                        <div className=" flowerighs  my-[50px]" >
                              
                                <img src={flower} alt="" style={{border:"none", width:'20%'}} className=" inline-block bg-gray-200 p-[30px] rounded-[30px] "/>
                        </div>

                        <div className=" flowerighs my-[50px]  ">

                         <img src={Beast} alt=""className=" bg-gray-200 p-[30px] rounded-[30px]" style={{border:"none", width:'20%'}} />
                        </div>
                        </div>
                        
                    </div>
                     <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[23%] p-5 rounded-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%]">This is a Landing Page for a bank and Perks that they offer including the admin dashboard and the user dashbaord </h3>
                        <a href="https://chrisbank.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[25px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                    </div>

                    </SlideIn>

                    </div>

                    <div>
                     <FadeInSection>

                   

                    </FadeInSection>

                     <SlideIn from="left" delay={0.6}>

                    <div className="flex relative left-[20%] overflow-hidden gap-[20px]">

                     <div className=" babeofthemeall">
                        <div className="babafirspac" style={{}}>
                            <div className="firstspac">
                            <img src={devrift1} alt="" className="firimfmfnspa2 rounded-[40px] border-4 border-black"   />

                             <img src={devrift2} alt="" className="firimfmfnspa rounded-[40px] border-4 border-black" />
                            </div>
                            
                           
                        </div>

                       
                    </div>
                     <div className="Whythem ">
                        <div className=" flowerighs  my-[50px]" >
                              
                                <img src={flower} alt="" style={{border:"none", width:'20%'}} className=" inline-block bg-gray-200 p-[30px] rounded-[30px] "/>
                        </div>

                        <div className=" flowerighs my-[50px]  ">

                         <img src={Beast} alt=""className=" bg-gray-200 p-[30px] rounded-[30px]" style={{border:"none", width:'20%'}} />
                        </div>
                        </div>
                        
                    </div>
                     <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[23%] p-5 rounded-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%]">This is Devrift a Website/Wep app development interprise which I  am the  Co-Founder</h3>
                        <a href="https://wealthspace-properties.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[15px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                    </div>

                    </SlideIn>

                    </div>
                    </div>

                <div className="middleman mb-[90px]  ">
                   
                    
                    <div className="Projects ">

                   
                    
                           

                    
                     
                    
                    
                    <SlideIn from="left" delay={0.8}>
                            {/* <div className="flex babeofthemeall">
                        <div className="babafirspac" style={{width:"220%"}}>
                            <div className="firstspac w-[90%]">
                            <img src={chrisban1} alt="" className="firimfmfnspa2 "   />
                             <img src={chrisban2} alt="" className="firimfmfnspa" />
                            </div>
                            
                           
                        </div>

                        <div className="relative left-[-60px] Whythem Whythem22">
                            <div className=" w-[25%] flowerighs" >
                              
                                <img src={pinkflower} alt="" style={{border:"none"}} className="themigweimgds w-[10%]"/>
                        </div>

                        <div className=" w-[25%] flowerighs">
                <img src={HtmlLogo} alt="" className=" themigweimgds w-[10%]" />

                        
                        </div>
                        </div>
                        
                    </div> */}
                     {/* <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[40px] p-5 rounded-[50px]" >
                         <h3 className="relative top-[1px] left-[20px] w-[70%]">This is a Landing Page for a bank and Perks that they offer including the admin dashboard and the user dashbaord </h3>
                        <a href="https://chrisbank.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[25px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                    </div> */}
                     </SlideIn>

                    <SlideIn from="right" delay={0.10}>

                        
                    {/* <div className="flex babeofthemeall">

                        <div className="Whythem">
                            <div className="w-[25%] flowerighs" >
                              
                                <img src={flower2} alt="" style={{border:"none"}} className="themigweimgds"/>
                        </div>

                        <div className="w-[25%] flowerighs ">
                         <img src={Beast} alt=""className="themigweimgds" style={{border:"none", width:''}} />
                        </div>

                        </div>
                        <div className="babafirspac babafirspac433 relative left-[-45%]" style={{width:"155%"}}>
                            <div className="firstspac">
                            <img src={devrift1} alt="" className="firimfmfnspa2"   />
                             <img src={devrift2} alt="" className="firimfmfnspa" />
                            </div>
                            
                           
                        </div>

                        
                        
                    </div> */}

                     {/* <div className="minofmeintg flex gap-[160px] w-[45%] relative left-[80px] p-5 rounded-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%]">This is Devrift a Website/Wep app development interprise which I  am the  Co-Founder  </h3>
                        <a href="https://devrift-interprise.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                        <button className="relative top-[15px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                     
                    </div> */}

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

                    <div className="flex gap-20 my-[40px] overflow-hidden underthecanopy ">
                        <div className="kings-ofmin gap-20  overflow-hidden relative top-2.5 ">
                           <div className="flex gap-5 relative  left-[13px] top-1 bossofiggdfed">
                             <img src={me} alt="" className="miningforme  mx-[20px] relative left-2" />
                            <img src={enugu} alt="" className="miningforme2  mx-[20px] relative left-[-12px]" />
                           </div>
                            <img src={bayelsa} alt="" className="miningforme4" />
                        </div>
                        <div className="w-[50%] parentofthemp"> 
                            <p className="my-[20px]">I'm a passionate Web Developer from Enugu State, Nigeria. I was Born in Bayelsa State, from an early stage I knew how phones worked and operated them really well many were facinted by my skill.
                           </p>

                           <p className="my-[20px]"> Speaking of Skills I had a huge obsession with device spec's but little did I know what I was missing out on. 'Programming' this is a gateway to express how you feel and bringing you dreams and Ideas to reality 

                           </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex  gap-[40px] subparentofthemp ">
                             <p className="w-[60%] sobunder">Creativity has always been my escape -first through drawing, now through designe and developement. I find joy through discovering hidden food ,spots and mobile gaming
                           </p>

                           <p className="w-[30%] sobunder ">I Love new Places,People,New conversation and the stories they bring

                           </p>
                        </div>
                       
                        
                    </div>

                </div>


                <div className="minviebe w-[60%] relative left-[20%] rounded-[40px] bg-gray-200 text-red-500 my-[40px]" >
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
                        <a href="https://www.linkedin.com/in/mathias-onyebuchi-3556802a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
                     <FontAwesomeIcon icon={faLinkedin}  className="thenfiigicon"/>
                        <p className="p-[20px] mifhhrtnot" >Linked In</p>

                        </a>
                        <a href="https://x.com/mathiasonyebuc1?s=21&t=ZT2pp35h-vscuEFwYeHSsw" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faTwitter} className="thenfiigicon"/>
                             <p className="p-[20px] mifhhrtnot" >X (twiter)</p>
                        </a>
                       
                        <a href="https://www.instagram.com/chriscodesdaily?igsh=anVrMnp3emp4NXQ2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="" style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faInstagram} className="thenfiigicon"/>
                        <p className="p-[20px]">Instagram</p>

                        </a>
                        <a href="https://wa.me/2349049661994" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faWhatsapp} className="thenfiigicon"/>
                        <p className="p-[20px]" style={{display:"flex"}}>
                            Whatsapp</p>

                        </a>
                    </div>
                  
                </div>
                <div className="flex justify-center my-[50px] gap-[20px]">
                    <a href="https://x.com/mathiasonyebuc1?s=21&t=ZT2pp35h-vscuEFwYeHSsw" target="_blank" rel="noopener noreferrer"  className="p-[20px] mifhhrtno rounded-2xl bg-gray-200" >
                    <FontAwesomeIcon icon={faTwitter} className="thnfminiffi" />
                         <p>X (twitter)</p>
                    </a>

                   <a href="https://www.linkedin.com/in/mathias-onyebuchi-3556802a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"  className="p-[20px] mifhhrtno p[10px] rounded-2xl bg-gray-200"  >
                    <FontAwesomeIcon icon={faLinkedin} className="thnfminiffi" />
                         <p>Linked In</p>
                    </a>
                     

                       
                </div>
                
               
              

        </div>
        </>
    )
}
export default Portfolio