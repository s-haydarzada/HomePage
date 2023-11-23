import React from "react";
import style from "./style.module.css";
import { FaPlay } from "react-icons/fa";

const PosterContent = () => {
  return (
    <div className={style.posterContent}>
      <div className={style.content}>
        <p>ACTION, ADVENTURE, SCI-FI</p>
        <h2>Fight club: Round 2</h2>
        <article>
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum. Mirum est notare quam littera gothica, quam
          nunc putamus parum claram, anteposuerit litterarum formas humanitatis
          per seacula quarta decima et quinta decima.
        </article>
      </div>
      <div className={style.button}>
         <span>12A</span>
         <button><FaPlay />Play Trailer</button>
      </div>
    </div>
  );
};

export default PosterContent;
