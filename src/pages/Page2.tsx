import NavBar from "../components/NavBar/NavBar";
import winterWater from "../assets/images/hotposts/winterwater.jpg"
// import headerImg from "../assets/images/header.jpg";


const  Page2 = () => {
    return (
        <header className="h-full    relative overflow-hidden">
              <NavBar textColor="primary_text"/>
              {/* Circle element with absolute positioning */}
             
             <div style={{ width: '110%', height: '110%', background: 'linear-gradient(0.18deg, rgba(255, 56, 92, 0.2) 15.01%, rgba(255, 0, 46, 0.038) 99.84%)' }} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-full"></div>
            
            {/* Cards group */}
            <div className="cards-group flex justify-center items-center gap-8 mt-16">
                {/* First Carousel */}
            <div className="card flex flex-col gap-8 w-96">
                <div className="textHeader flex-col ">
                    <div className="text-primary_text text-base font-manrope font-medium leading-7 tracking-wider">ROOM RENTAL</div>
                    <div className="text-primary_text font-manrope text-3xl font-bold leading-16">Find a perfect home you love..!</div>
                    <div style={{fontSize: "10px"}} className="font-poppins font-normal leading-7 text-left">We offer the most authoritative rental information in Wollongong!</div>
                </div>
                <div className="h-48">
                    <img src={winterWater} alt="winter water" className="h-full w-full rounded-lg" />
                </div>
                
                </div>
                
                {/* OR separator */}
                <div className=" text-primary_text font-poppins text-4xl font-bold leading-16 text-left">or</div>

            {/* Second Carousel */}
            <div className="card flex flex-col gap-8 w-96   ">
                <div className="textHeader flex-col ">
                    <div className="text-primary_text text-base font-manrope font-medium leading-7 tracking-wider">ROOM RENTAL</div>
                    <div className="text-primary_text font-manrope text-3xl font-bold leading-16">Find a perfect home you love..!</div>
                    <div style={{fontSize: "10px"}} className="font-poppins font-normal leading-7 text-left">We offer the most authoritative rental information in Wollongong!</div>
                </div>
                <div className="h-48">
                    <img src={winterWater} alt="winter water" className="h-full w-full rounded-lg" />
                </div>
                
                </div>


            </div>



        </header>


        // <header className="bg-cover relative" style={{ backgroundImage: `url(${headerImg})`, height: "100%", opacity: "80%", backgroundSize: "cover", backgroundPosition: "center" }}>
        //     <NavBar textColor="primary_text"/>
        //     <div className="flex flex-col gap-4 absolute bottom-12 left-28">
        //         <h2 className="flex flex-col text-6xl text-white font-manrope leading-82">
        //             <span>Graduate Careers</span>
        //             <span className="mt-4">Expo 2024</span></h2>
        //         <h3 className=" text-xl text-white font-manrope font-light leading-36">The Graduate Careers Expo is back on Campus in 2024!</h3>
        //         <h3 className="text-xl text-white font-manrope font-light leading-36 underline">LEARN MORE</h3>
        //     </div>
        // </header>
    );
}

export default Page2;