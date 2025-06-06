import React from "react";
import './Portfolio.css';
// import './index.css'



const Portfolio =()=>{
    return(
        <>  
        <div>
            <div className="d-grid">
                <nav>
                    <div>Works</div>
                    <div>Mathias</div>
                    <div>Garden</div>
                </nav>
               <div>
                <FontAwesome />
                <div>
                    <h3>Hi, I'm Mathias</h3>
                </div>
                <div>
                    <h3>Software and Front-End develeper you count on</h3>
                </div>
                <div>
                    <p>Simplicity is my super power. I turn complex Ideas into experiences users love and investors trust i help. i help Upcomming Buisness's ,Founder, Saas craft story-driven brands and products. </p>
                </div>
               </div>
               <div>
                <button>Chat with me</button>
               </div>
            </div>  
                <div>
                    <div>
                        <h3>Tiny fraction of my work</h3>
                        <p>Teaming with founders and  buisness owner's to propel their next product through developing website's  that are  both functional and great looking</p>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Portfolio