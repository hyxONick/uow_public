// import Counter from '../components/Counter';
// import About from "./About";
import NavBar from "../components/NavBar/NavBar";
import header from "../assets/images/header.jpg"


const View = () => {



    return (
        <div className='home bg-white h-2/3'>

            <header className="bg-cover relative" style={{ backgroundImage: `url(${header})`, height: "100%", opacity: "80%" }}>
                <NavBar />
                <div className="flex flex-col gap-4 absolute bottom-12 left-28">
                    <h2 className="flex flex-col text-6xl text-white font-manrope leading-82">
                        <span>Graduate Careers</span>
                        <span className="mt-4">Expo 2024</span></h2>
                    <h3 className=" text-xl text-white font-manrope font-light leading-36">The Graduate Careers Expo is back on Campus in 2024!</h3>
                    <h3 className="text-xl text-white font-manrope font-light leading-36 underline">LEARN MORE</h3>
                </div>
            </header>

            <div className="h-1/3 flex items-center gap-8 absolute left-28">
                <div className="posts-title text-red_primary font-marcellus text-7xl font-normal leading-100">Forum hot posts</div>
                <div className="posts-title text-red_primary font-marcellus text-3xl font-normal leading-100 border-b border-solid border-red_primary"> &gt;All posts</div>

            </div>

            {/* <Counter type="edit" /> */}
            {/* <About /> */}
        </div>
    );
}

export default View;

