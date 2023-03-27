import React from "react";
import styles from "./Header.module.scss"; // Подключение стилей
import logo from "./../../img/empire.png"; //подключение изображения
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      {/*Как применять стили */}
      <div className={styles.box}>
        <NavLink to="/" className={styles.box}>
          <img className={styles.img} src={logo} alt="logo" />
          <h1>Movies</h1>
        </NavLink>
        {/* <img src={logo} alt="logo" /> */}
        {/* <h1>Movies</h1> */}
      </div>
      <div className={styles.boxSelect}>
        <select required="required">
          <option value="">My Account</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </header>
  );
}
