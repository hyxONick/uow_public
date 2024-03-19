// import Counter from '../components/Counter';
// import About from "./About";
import NavBar from "../../components/NavBar/NavBar";
import header from "../../assets/images/header.jpg"
import cardsList from "./CardsList";
import newsList from "./newsList";
import { Card } from 'antd';





const View = () => {

    return (
        <div className='home h-2/3'>
            {/* Header */}
            <header className="bg-cover relative" style={{ backgroundImage: `url(${header})`, height: "100%", opacity: "80%", backgroundSize: "cover", backgroundPosition: "center" }}>
                <NavBar />
                <div className="flex flex-col gap-4 absolute bottom-12 left-28">
                    <h2 className="flex flex-col text-6xl text-white font-manrope leading-82">
                        <span>Graduate Careers</span>
                        <span className="mt-4">Expo 2024</span></h2>
                    <h3 className=" text-xl text-white font-manrope font-light leading-36">The Graduate Careers Expo is back on Campus in 2024!</h3>
                    <h3 className="text-xl text-white font-manrope font-light leading-36 underline">LEARN MORE</h3>
                </div>
            </header>


            {/* Hot Posts */}
            <div className="h-2/3">

                <div className="flex items-center gap-8 mt-12 ml-28">
                    <div className="posts-title text-red_primary font-marcellus text-7xl font-normal leading-100">Forum hot posts</div>
                    <div className="posts-title text-red_primary font-marcellus text-3xl font-normal leading-100 border-b border-solid border-red_primary"> &gt;All posts</div>
                </div>

                <div className="m-20 flex justify-center gap-16" >
                    {cardsList.map((card: any, index) => {
                        return (
                            <Card
                                key={index}
                                hoverable
                                style={{ width: 240, borderRadius: 0 }}
                                cover={<img alt={card.alt} src={card.image} style={{ width: 240, height: 180 }} />}
                            >

                                <div className="text-secondary_text font-manrope text-xl font-normal">{card.description}</div>
                                <div className="text-secondary_text font-manrope text-l">{card.date}</div>
                                <a href="/" className="text-blue_text font-manrope font-bold text-l underline absolute right-1 bottom-2">READ MORE</a>
                            </Card>
                        )
                    })}

                </div>
            </div>


            {/* News List */}
            <div className="h-full mt-40">

                {newsList.map((card: any, index) => {
                    return (
                        <div key={index}>
                            <div className={`${index % 2 !== 0 ? "mr-28 flex-row-reverse" : 'ml-28 '} flex items-center gap-8 mt-12`}>
                                <div className="posts-title text-red_primary font-marcellus text-7xl font-normal leading-100">{card.title}</div>
                                <div className="posts-title text-red_primary font-marcellus text-3xl font-normal leading-100 border-b border-solid border-red_primary"> &gt;Explore now</div>
                            </div>
                            <div className={`${index % 2 !== 0 && "flex-row-reverse"} flex justify-center mt-10 mb-40 ml-28 mr-28 gap-16`}>
                                <div className="flex-1 text-secondary_text font-manrope text-2xl font-normal mt-10">{card.description}</div>
                                <div className="flex-1">
                                    <img src={card.image} alt={card.alt} className="w-34 h-auto mx-auto" />
                                </div>

                            </div>
                        </div>

                    )
                })}





            </div>



            {/* <Counter type="edit" /> */}
            {/* <About /> */}
        </div>
    );
}

export default View;

