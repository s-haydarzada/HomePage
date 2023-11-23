import React from "react";
import { Row, Col } from "antd";
import Logo from "../Logo";
import style from "./style.module.css";
import Navbar from "../Navbar";

const MyHeader = () => {
  return (
    <div className={style.myheader}>
     <Logo/>
     <Navbar/>
    </div>
  );
};

export default MyHeader;
