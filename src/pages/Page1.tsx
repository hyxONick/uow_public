import NavBar from "../components/NavBar/NavBar";
import headerImg from "../assets/images/header.jpg";
import new1 from "../assets/images/page1/new1.jpg";
import new2 from "../assets/images/page1/new2.jpg";
import new3 from "../assets/images/page1/new3.jpg";
import new4 from "../assets/images/page1/new4.jpg";
import new5 from "../assets/images/page1/new5.jpg";
import new6 from "../assets/images/page1/new6.jpg";
import new7 from "../assets/images/page1/new7.jpg";
import Footer from "../components/Footer/Footer";

const  Page1 = () => {
    return (
            <div className='home h-2/3'>
                <header className="bg-cover relative" style={{ backgroundImage: `url(${headerImg})`, height: "100%", opacity: "80%", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <NavBar />
                    <div className="flex flex-col gap-4 absolute top-36 left-28">
                            <ul className="text-white" style={{listStyle: "disc",fontSize:"36px"}}> 
                                <li> Live In Wollongong </li> 
                                <li> Wollogong’s Lifestyle </li>
                                <li> Views of Wollongong </li>
                                <li> History of Wollogong </li>
                            </ul>
                    </div>
                </header>
                <div className="second-nav-bar h-1/6 flex text-white" style={{background: "#FF385C" }}>
                    <div style={{flexGrow: 1, textAlign:"center", lineHeight: "80px"}}>
                        <a href=""> Resturant </a>
                    </div>
                    <div style={{flexGrow: 1, textAlign:"center", lineHeight: "80px"}}>
                        <a href=""> Transportation </a>
                    </div>
                    <div style={{flexGrow: 1, textAlign:"center", lineHeight: "80px"}}>
                        <a href=""> Scenery </a>
                    </div>
                    <div style={{flexGrow: 1, textAlign:"center", lineHeight: "80px"}}>
                        <a href=""> Shopping </a>
                    </div>
                </div>

                <div className="new_act h-1/2 flex m-20 flex justify-center gap-16">
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>

                        <img src={new1} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginBottom: "40px" }} alt="" />
                        <a style={{color: "#2C80EC", fontSize: "26px", textDecoration: "underline"}}> more information </a>
                        <p style={{color: "#666666", fontSize: "30px", lineHeight: "41px", marginTop:"10px"}}> New activities News </p>
                    </div>
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <p style={{color: "#666666", fontSize: "30px", lineHeight: "41px", marginBottom:"10px"}}> New activities News </p>
                        <a style={{color: "#2C80EC", fontSize: "26px", textDecoration: "underline"}}> more information </a>
                        <img src={new2} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginTop: "40px" }} alt="" />
                    </div>
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <img src={new3} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginBottom: "40px" }} alt="" />
                        <a style={{color: "#2C80EC", fontSize: "26px", textDecoration: "underline"}}> more information </a>
                        <p style={{color: "#666666", fontSize: "30px", lineHeight: "41px", marginTop:"10px"}}> New activities News </p>
                    </div>
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <p style={{color: "#666666", fontSize: "30px", lineHeight: "41px", marginBottom:"10px"}}> New activities News </p>
                        <a style={{color: "#2C80EC", fontSize: "26px", textDecoration: "underline"}}> more information </a>
                        <img src={new4} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginTop: "40px" }} alt="" />
                    </div>
                </div>

                <div className="read-bar gap-16" style={{background: "#FF385C", marginTop: "100px",height: "30px"}}>
                    
                </div>

                <div className="new_act2 h-1/2 flex m-20 flex justify-center gap-16">
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <a style={{color: "#666666", fontSize: "30px", lineHeight: "41px", padding:"10px 30px"}}> New activities </a>
                        <img src={new5} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginTop: "20px" }} alt="" />
                    </div>
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <a style={{color: "#666666", fontSize: "30px", lineHeight: "41px", padding:"10px 30px"}}> New activities </a>
                        <img src={new6} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginTop: "20px" }} alt="" />
                    </div>
                    <div style={{flexGrow: 1, display: 'block', justifyContent: 'center', alignItems: 'center',fontFamily: 'Manrope'}}>
                        <a style={{color: "#666666", fontSize: "30px", lineHeight: "41px", padding:"10px 30px"}}> New activities </a>
                        <img src={new7} style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: '15px',marginTop: "20px" }} alt="" />
                    </div>
                </div>
                <Footer/>
            </div>
        
    );
}

export default Page1;