import React from "react";
import { hero2, hero1, hero3 } from "../../assets/images";
import style from "./style.module.css";
import { Carousel } from "antd";
import { FaPlay } from "react-icons/fa";


const Poster = () => {
  return (
    <div className={style.poster}>
      <Carousel effect="fade">
        <div>
          <img src={hero1} alt="" />
          <div className={style.content}>
            <div>
              <p>ACTION, ADVENTURE, SCI-FI</p>
              <h2>Fight club: Round 2</h2>
              <article>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </article>
            </div>
            <div className={style.btn}>
              <span>12A</span>
              <button>
                <FaPlay />
                Play Trailer
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={hero3} alt="" />
        </div>
        <div>
          <img src={hero2} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Poster;
