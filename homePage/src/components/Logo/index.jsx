import React from 'react';
import {logo} from "../../assets/images/index";
import style from "./style.module.css"

const Logo = () => {
  return (
    <div className={style.logo}>
      <a href="https://preview.themeforest.net/item/movie-star-cinema-html-template/full_screen_preview/20347672?_ga=2.41404130.1708021344.1700477034-928552473.1692163094&amp;_gac=1.229505390.1699004492.Cj0KCQjwtJKqBhCaARIsAN_yS_lzYcPPou4lgejZnZwtj31Kd8Gus9WvYoaJ5623pGvcp29_2rvj970aAkKWEALw_wcB">
      <img src={logo} alt="" />
      </a>
    </div>
  )
}

export default Logo
