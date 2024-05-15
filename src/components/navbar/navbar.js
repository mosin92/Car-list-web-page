import React from "react";
import style from "./navbar.css";
import logo from "../../../public/assets/images/logo.gif";
import menuImg from "../../../public/assets/icons/menu.svg";
import close from "../../../public/assets/icons/close.svg";
import favIcon from "../../../public/assets/icons/heart.svg";
import timeline from "../../../public/assets/icons/timeline.svg";
import person from "../../../public/assets/icons/person.svg";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="left v-center">
          <button>
            <Image
              src={menuImg}
              alt="menu btn"
              width={24}
              height={24}
              priority
            />
          </button>
          <span className="v-center">
            <Image src={logo} alt=" Logo" width={177} height={27} priority />
          </span>
        </div>
        <div className="center">
          <div className="search-box">
            <span>
              <input
                type="text"
                placeholder="Quelle voiture recherchez-vous ?"
              />
              <Image src={close} alt=" Logo" width={24} height={24} priority />
            </span>
            <button>Rechercher</button>
          </div>
        </div>
        <div className="right">
          <div>
            <span>
              <Image src={person} alt=" Logo" width={24} height={24} priority />
              Me connector
            </span>
          </div>
          <div>
            <span>
              <Image
                src={favIcon}
                alt=" Logo"
                width={24}
                height={24}
                priority
              />
              Mes favoris
            </span>
            <span>
              <Image
                src={timeline}
                alt=" Logo"
                width={24}
                height={24}
                priority
              />
              Espace Pro
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
