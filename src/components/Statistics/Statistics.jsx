import React from "react";
import Style from "./Statistics.module.css";
import data from "../../data/data.json";
import getRandomColor from "../ColorRandom/ColorRandom";

export const Statistics = () => {
  return (
    <section className={Style.statistics}>
      <div className={Style.maxWidth}>
        <div className={Style.divTitle}>
          <h2 className={Style.title}>Upload stats</h2>
        </div>

        <ul className={Style.statList}>
          {data.map((item) => {
            const colorStyle = {
              background: getRandomColor(), // Llama a la función getRandomColor para obtener un color aleatorio
            };

            return (
              <li style={colorStyle} className={Style.item} key={item.id}>
                <span className={Style.label}>{item.label}</span>
                <span className={Style.percentage}>{item.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
