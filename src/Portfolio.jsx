import React, {useRef} from "react";
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
import FlipIn from './FlipIn'
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
    const workRef = useRef(null);

  const scrollToWorks = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const mathiasRef = useRef(null);

  const scrollTomathias = () => {
    mathiasRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


    return(
        <>  
        
        <ScrollIndicator/>
       
        <body className="bg-gray-100">
            <div className="overflow-y-hidden">
                <FadeInSection delay={0.1} >

                <nav className="flex flex-row  text-center justify-center gap-20 my-[20px] overflow-y-hidden">
                    <a  onClick={scrollToWorks}>

                    <div style={{fontWeight:"600"}} >Works</div>

                    </a>

                    

                    <div style={{fontWeight:"600"}}>Garden</div>
                    
                    <a onClick={scrollTomathias}>


                    <div style={{fontWeight:"600"}}>Mathias</div>
                    </a>
                </nav>

                </FadeInSection>

                
               <div className="text-center justify-center gap-20 py-[30px] flex overflow-y-hidden">
                {/* <FontAwesome /> */}
                
                <div className="" style={{marginBottom:"90px", 
                    paddingBottom:'20px'}} >
                    <BounceIn >
                     <div className="py-[20px] ">
                     <h3>Hi, I'm Mathias</h3>
                </div>
                </BounceIn>
                
                     <FadeInSection delay={0.5}>

                <div className="text-[60px] firstvhaimsn mb-[50px] overflow-y-hidden">
                    <h3> <span style={{fontFamily: 'Italiana, serif', fontSize:'85px' }}>Software</span>  and <br /> <span style={{fontFamily: 'Italiana, serif', fontSize:'60px'}}>Front-End </span>  developer <br />you can <span style={{fontFamily: 'Italiana, serif',fontSize:'85px' }}>Rely</span>  on</h3>
                </div>
                </FadeInSection>
                    
               

            <div className="h-[35vh] firppdonf11" >

                <FadeInSection delay={0.7}>

            <p className="text-center firppdonf overflow-y-hidden">Simplicity is my super power. I turn complex Ideas  into experiences <br />users love and investors  trust <span className="mingodrtheb ghididdd" style={{}}>. I help Upcomming Buisness's ,Founder, Saas  craft story-driven brands and products.</span> </p>

                </FadeInSection>
            </div>
                
                
            </div>
            </div>
               
           

             <div className="text-center flex justify-center gap-[50px]  relative top-[-190px] Activebtns h-[10vh]">
                 <FadeInSection delay={0.8}>

                <div className="text-white bg-black p-[5px] px-[120px] rounded-[10px] py-[15px] Hirebtn">
                    <h1>Hire Me</h1>
                </div>
                 </FadeInSection>
                     <FadeInSection delay={0.9}>

                <div>
                    <div className="bg-green-200 p-[10px] px-[50px] rounded-[30px] py-[15px] Availablebtn">  <h3 className="text-green-900 font-bold ">Available </h3></div>
                </div>
                     </FadeInSection>
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
            </div>

            </FadeInSection>

            </div>

                     

            <div className="my-[70px] text-center  relative top-[-120px]" >
                <div className="relative top-[-20px] my-[90px]" ref={workRef}>
                    <h3 className="font-bold text-[30px]">Some of My Works</h3>
                </div>
                
               <div className="my-[70px]">
                    <FadeInSection delay={0.5}>

                <div className="grid grid-cols-2 relative left-[20%] bankSet">
                    
                    <div className="flex gap-[20px] bg-gray-200 p-[20px] w-[80%] rounded-[30px] CheifeBA">
                        <img src={chrisban1} alt=""  className="max-w-[60%] h-[80%]  rounded-[50px] relative top-[105px] left-[40px] border-4 border-black"  />
                        <img src={chrisban2} alt=""  className="max-w-[60%] h-[80%] rounded-[50px] relative top-[10px] left-[40px] border-4 border-black"/>
                    </div>

                    <div className="relative left-[-20%] grid grid-cols-1 MinSet1">
                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px]"><img src={Csslogo} alt="" className="relative top-[20px] MinSet1-sub1 MinSet1-sub"/></div>

                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px]"><img src={HtmlLogo} alt=""  className="relative top-[20px] MinSet1-sub"/></div>
                    </div>

                </div>
                    </FadeInSection>
                <FadeInSection delay={0.7}>

                <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[23%] p-5 rounded-[50px] my-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%] text-start overflow-hidden">This is a Landing Page for a bank and Perks that they offer including the admin dashboard and the user dashbaord <span className="bg-gray-300 p-[5px] rounded-[5px]">HTML</span> <span className="bg-gray-300 p-[5px] rounded-[5px]">CSS</span></h3>
                        <a href="https://chrisbank.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[25px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                </div>
                    </FadeInSection>

               </div>
                
                 <div className="my-[70px]">
                    <SlideIn delay={0.6}>

                    <div className="grid grid-cols-2 relative left-[70px] DEvriftmain ">

                 <div className="relative left-[20%] grid grid-cols-1 DEvriftmain-1">
                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px] overflow-hidden py-[30px] DEvriftmain-1-sub22" ><img src={Csslogo} alt="" className="relative top-[-5px]"/></div>

                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px] overflow-hidden py-[30px] DEvriftmain-1-sub22"><img src={Beast} alt=""  className="relative top-[-5px]"/></div>
                    </div>
                <div className="grid grid-cols-2 relative left-[-40%] mainDEvriftmain-1-sub22">
                    <div className="flex gap-[20px] bg-gray-200 p-[20px] px-[50px] w-[170%] overflow-hidden rounded-[30px] mainDEvriftmain-1-sub2-1">
                        <img src={devrift1} alt=""  className="max-w-[120%] h-[80%]  rounded-[50px] relative top-[10px] left-[20px] border-4 border-black"  />
                        <img src={devrift2} alt=""  className="max-w-[120%] h-[80%] rounded-[50px] relative top-[105px] left-[40px] border-4 border-black"/>
                    </div>
                    </div>

                   

                </div>
                    </SlideIn>

                <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[23%] p-5 rounded-[50px] my-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%] text-start overflow-hidden">This is Devrift a Website/Wep app development interprise which I  am the  Co-Founder <span className="bg-gray-300 p-[5px] rounded-[5px]">ReactJs</span> <span className="bg-gray-300 p-[5px] rounded-[5px]">CSS</span> <span className="bg-gray-300 p-[5px] rounded-[5px]">Framer</span> </h3>
                        <a href="https://chrisbank.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[15px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                </div>

                </div>


                 <div>
                <SlideIn delay={0.8}>
                    
                <div className="grid grid-cols-2 relative left-[20%] bankSet">
                    <div className="flex gap-[20px] bg-gray-200 p-[10px] w-[80%] rounded-[50px] CheifeBA">
                        <img src={space1} alt=""  className="max-w-[80%] h-[80%]  rounded-[50px] relative top-[105px] left-[40px] border-4 border-black"  />
                        <img src={space2} alt=""  className="max-w-[80%] h-[80%] rounded-[50px] relative top-[10px] left-[40px] border-4 border-black"/>
                    </div>

                    <div className="relative left-[-20%] grid grid-cols-1 MinSet1">
                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px]"><img src={Csslogo} alt="" className="relative top-[20px] MinSet1-sub"/></div>

                        <div className="bg-gray-200 inline-grid max-w-[25%] rounded-[20px] m-[40px]"><img src={Beast} alt=""  className="relative top-[20px] MinSet1-sub"/></div>
                    </div>

                </div>
                </SlideIn>

                <div className="minofmeintg minofmeintg3332 flex gap-[160px] max-w-[45%] relative left-[23%] p-5 rounded-[50px] my-[50px]" >
                        <h3 className="relative top-[1px] left-[20px] w-[70%] text-start overflow-hidden">This is a Real-Estate  website where you can scout and check for the best homes Wealth-Space Properties have  <span className="bg-gray-300 p-[5px] rounded-[5px]">ReactJs</span> <span className="bg-gray-300 p-[5px] rounded-[5px]">CSS</span> </h3>
                        <a href="https://chrisbank.vercel.app" target="_blank" rel="noopener noreferrer"className="bg-black text-white p-[10px] rounded-4xl px-[60px] firstudbtn">
                              <button className="relative top-[25px] left-[-15px]" style={{overflow:'hidden', textWrap:'nowrap'}}>Check it Out</button>
                        </a>
                      
                </div>

               </div>


            </div>





                <div className="mx-[140px] mb-[150px] bg-gray-300 p-[50px] rounded-[30px] ogapics" >
                   

                    <div ref={mathiasRef}>
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
                        <a href="https://wa.me/2349061446848" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
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
                
               
              

        </body>
        </>
    )
}
export default Portfolio