import React from "react";
import style from "./style.module.css";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.contact}>
        <a href="#">
          <FaPhone
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />
        </a>

        <p>
          <a href="#">123 456 789</a>
        </p>
      </div>
      <div className={style.navList}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className={style.submenu}>
            <a href="#">What's on</a>
            <div className={style.dropdown}>
              <h2>
                <a href="#">All Movies</a>
              </h2>
            </div>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">ShortCodes</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
