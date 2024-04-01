// import {useState} from "react";
// import styles from "./header.module.scss"
import NavBar from "../NavBar/NavBar";
import headerImg from "../../assets/images/header.jpg"

const Header = () => {
    return (
        <header className="bg-cover relative" style={{ backgroundImage: `url(${headerImg})`, height: "100%", opacity: "80%", backgroundSize: "cover", backgroundPosition: "center" }}>
            <NavBar textColor="white"/>
            <div className="flex flex-col gap-4 absolute bottom-12 left-28">
                <h2 className="flex flex-col text-6xl text-white font-manrope leading-82">
                    <span>Graduate Careers</span>
                    <span className="mt-4">Expo 2024</span></h2>
                <h3 className=" text-xl text-white font-manrope font-light leading-36">The Graduate Careers Expo is back on Campus in 2024!</h3>
                <h3 className="text-xl text-white font-manrope font-light leading-36 underline">LEARN MORE</h3>
            </div>
        </header>
    );
}

export default Header;