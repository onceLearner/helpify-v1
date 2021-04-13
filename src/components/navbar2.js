import "./navbar.css";
import { IconName } from "react-icons/fa";
import avatar from "../photos/avatar.svg";
import { Link, navigate } from "@reach/router";
import { IconNotif, IconSad } from "./svg/mainIcons";
import { useState } from "react";


const Navbar = ({ sidebarOpen, openSidebar, isHelper, userInfo }) => {

  const [openModal, setOpenModal] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)


  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" ></i>

      </div>
      <div className="navbar__left">

        <div className=" flex  items-center space-x-2">
          <Link to="/" className="flex space-x-2 ">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="45" height="35.997" viewBox="0 0 45 35.997">
              <path id="Icon_awesome-hands-helping" data-name="Icon awesome-hands-helping" d="M34.313,13.5H23.625v3.938a5.063,5.063,0,0,1-10.125,0V8.887L8.937,11.63A4.49,4.49,0,0,0,6.75,15.483v3.326L1.125,22.057A2.245,2.245,0,0,0,.3,25.13l5.625,9.745A2.251,2.251,0,0,0,9,35.7l7.27-4.2h9.6a4.5,4.5,0,0,0,4.5-4.5H31.5a2.248,2.248,0,0,0,2.25-2.25v-4.5h.563A1.683,1.683,0,0,0,36,18.563V15.188A1.683,1.683,0,0,0,34.313,13.5ZM44.7,10.87,39.073,1.125A2.251,2.251,0,0,0,36,.3L28.73,4.5H21.544a4.534,4.534,0,0,0-2.384.682L16.8,6.652A2.235,2.235,0,0,0,15.75,8.557v8.88a2.812,2.812,0,0,0,2.813,2.813c1.554,0,2.813-2.812,2.813-2.812V11.25H34.313a3.94,3.94,0,0,1,3.938,3.938v2l5.625-3.248A2.252,2.252,0,0,0,44.7,10.87Z" transform="translate(0.002 -0.002)" fill="#31e7ee" />
            </svg>
            <span className="text-lg  text-gray-600  capitalize " style={{ fontWeight: "600" }}>helpify</span>
          </Link>
        </div>

      </div>
      <div className="navbar__right flex space-x-5 text-gray-500 text-sm" style={{ fontFamily: "Montserrat", fontWeight: "600" }}>

        <a href="#" className="cursor-pointer hover:text-indigo-600 opacity-90  whitespace-nowrap" >
          Dashboard</a>
        <a href="#" className="cursor-pointer hover:text-indigo-600 opacity-90  whitespace-nowrap" >
          Community</a>


        {
          isHelper ?
            <div className="cursor-pointer hover:text-indigo-600 opacity-90  w-40 whitespace-nowrap" onClick={() => navigate("/Dashboard")} >
              <span> Switch To demandeur </span>
            </div>
            :

            <div className="cursor-pointer  w-40 hover:text-indigo-600 opacity-90 whitespace-nowrap" onClick={() => navigate("/DashboardHelper")} >
              <span> Switch To helper </span>
            </div>





        }





        <button className="focus:outline-none" onClick={() => { setOpenModal(false); setOpenNotif(!openNotif) }}>
          <IconNotif />
        </button>

        {openNotif &&
          <div className="absolute top-14 border p-4 items-center  border-gray-100 right-6 bg-white z-10  shadow-xl rounded-lg flex flex-col     " style={{ fontFamily: "Montserrat", fontWeight: "600" }}>
            <p className="py-2"> Vous n'avez pas de notifications!</p>
            <IconSad />
          </div>

        }



        <a href="#!" onClick={() => { setOpenNotif(false); setOpenModal(!openModal) }}>
          <img width="30" src={avatar} alt="avatar" />
        </a>

        {openModal &&
          <div className="absolute top-14 border border-gray-100 right-3 bg-white z-10  p-2 shadow-xl rounded-lg flex flex-col items-baseline    " style={{ fontFamily: "Montserrat", fontWeight: "600" }}>
            <div className="text-indigo-600  py-4 ml-2 pr-4 pt-2">
              Hi, {userInfo.nom}  {userInfo.prenom}
            </div>
            <span className=" hover:text-indigo-600  p-2  hover:bg-gray-100 w-full cursor-pointer" onClick={() => navigate("/edit")}  >Profile</span>

            <span className=" hover:text-indigo-600 p-2 hover:bg-gray-100 cursor-pointer " onClick={() => navigate("/")}  >Deconnexion</span>


          </div>

        }




      </div>
    </nav >
  );
};

export default Navbar;