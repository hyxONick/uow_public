import activityList from "./activityList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const  Activity: React.FC = () => {
    return (
        <div className='home h-2/3'>
            <Header />
            <div className="second-nav-bar h-16 flex text-white bg-red-500">
                <div className="flex-1 flex justify-center items-center">
                    <a href="/"> Restaurant </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <a href="/"> Transportation </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <a href="/"> Scenery </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <a href="/"> Shopping </a>
                </div>
            </div>

            <div className="new_act h-1/2 flex m-20 gap-16">
                {(activityList.withInfo|| []).map((act: {
                    name: string;
                    information: string;
                    imageUrl: string;
                }) => {
                    return(
                        <div className="flex-1 flex flex-col items-center">
                            <img src={act.imageUrl} className="shadow-lg rounded-lg mb-10" alt="" />
                            <a href="/" className="text-blue-500 text-xl underline"> {act.name} </a>
                            <p className="text-gray-600 text-xl text-center"> {act.information} </p>
                        </div>
                    )
                })}
            </div>

            <div className="read-bar gap-16 bg-red-500 mt-20 h-10"></div>

            <div className="new_act2 h-1/2 flex m-20 gap-16">
                {(activityList.withoutInfo|| []).map((act: {
                    name: string;
                    imageUrl: string;
                }) => {
                    return(
                        <div className="flex-1 flex flex-col items-center">
                            <a href="/" className="text-gray-600 text-xl py-2 px-6"> {act.name} </a>
                            <img src={act.imageUrl} className="shadow-lg rounded-lg mt-4" alt="" />
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>

    );
}

export default Activity;