import Img1 from "../photos/register.jpg"
import Img2 from "../photos/marjane.jpg"
import Img3 from "../photos/activity3.jpg"
import Img4 from "../photos/activity4.jpg"

import { MdDirectionsBike, MdDirectionsCar, MdDirectionsWalk } from "react-icons/md"
import { BiMapPin } from "react-icons/bi"


export const dataActivity = [
    {
        id: 1,
        title: "Gardenage",
        imgUrl: Img1
    },
    {
        id: 2,
        title: "faire les courses",
        imgUrl: Img2
    },
    {
        id: 3,
        title: "déménagement",
        imgUrl: Img3
    },
    {
        id: 4,
        title: "divers",
        imgUrl: Img4
    },
]


export const dataMobility = [
    {
        id: 1,
        title: "a pied",
        Icon: <MdDirectionsWalk className="w-16 h-16" />
    },
    {
        id: 2,
        title: "velo",
        Icon: <MdDirectionsBike className="w-16 h-16" />

    },
    {
        id: 3,
        title: "motorise",
        Icon: <MdDirectionsCar className="w-16 h-16" />

    }

]