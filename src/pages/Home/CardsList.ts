import huladance from "../../assets/images/hotposts/huladance.jpg";
import partytime from "../../assets/images/hotposts/partytime.jpg";
import winterwater from "../../assets/images/hotposts/winterwater.jpg";
import swimmer from "../../assets/images/hotposts/swimmer.jpg";

interface Card {
    image: string;
    alt: string;
    description: string;
    date: string;
}

const cardsList: Card[] = [
    {
        image: huladance,
        alt: "huladance",
        description: "New events in next month at UOW",
        date: "3 March"
    },
    {
        image: partytime,
        alt: "partytime",
        description: "Recent events photo released",
        date: "4 March"
    },
    {
        image: winterwater,
        alt: "winterwater",
        description: "Competition detail information released",
        date: "5 March"
    },
    {
        image: swimmer,
        alt: "swimmer",
        description: "Recent events photo released",
        date: "6 March"
    },
];

export default cardsList;
