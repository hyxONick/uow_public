import uni from "../../assets/images/news/uni.jpg";
import campus from "../../assets/images/news/campus.jpg";

interface News {
    title: string;
    image: string;
    alt: string;
    description: string;
}

const newsList: News[] = [
    {
        title: "Study at UOW",
        image: uni,
        alt: "uni",
        description: "Being the third-largest city in New South Wales and only an hour from Sydney, Wollongong is a vibrant city that offers the perfect Australian lifestyle.",
    },
    {
        title: "Accommodation",
        image: campus,
        alt: "campus",
        description: "UOW’s main Wollongong campus is set in native Australian bush and is one of the most picturesque university campuses in Australia."
    },
    {
        title: "Live In Wollongong",
        image: uni,
        alt: "uni",
        description: "Being the third-largest city in New South Wales and only an hour from Sydney, Wollongong is a vibrant city that offers the perfect Australian lifestyle."
    }
];

export default newsList;
