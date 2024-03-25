import new1 from "../../assets/images/activity/new1.jpg";
import new2 from "../../assets/images/activity/new2.jpg";
import new3 from "../../assets/images/activity/new3.jpg";
import new4 from "../../assets/images/activity/new4.jpg";
import new5 from "../../assets/images/activity/new5.jpg";
import new6 from "../../assets/images/activity/new6.jpg";
import new7 from "../../assets/images/activity/new7.jpg";
interface ActivityWithInfo {
    name: string;
    information: string;
    imageUrl: string;
}

interface ActivityWithoutInfo {
    name: string;
    imageUrl: string;
}

const ActivityData: {
    withInfo: ActivityWithInfo[];
    withoutInfo: ActivityWithoutInfo[];
} = {
    withInfo: [
        {
            name: "Hiking Adventure",
            information: "Join us for an exciting hiking adventure! Explore stunning scenery and immerse.",
            imageUrl: new1
        },
        {
            name: "Beach Cleanup",
            information: "Join our beach cleanup event and help preserve our beautiful coastline!",
            imageUrl: new2
        },
        {
            name: "Cooking Workshop",
            information: "Learn new cooking techniques and recipes at our hands-on cooking workshop.",
            imageUrl: new3
        },
        {
            name: "Yoga Retreat",
            information: "Escape the stresses of daily life and find inner peace at our serene yoga retreat.",
            imageUrl: new4
        },
    ],
    withoutInfo: [
        {
            name: "Art Exhibition",
            imageUrl: new5
        },
        {
            name: "Music Concert",
            imageUrl: new6
        },
        {
            name: "Charity Run",
            imageUrl: new7
        },
    ],
};

export default ActivityData;
