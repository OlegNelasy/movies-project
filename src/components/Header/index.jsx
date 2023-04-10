import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/empire.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.сontainer}>
        <NavLink to="/" className={styles.box}>
          <img className={styles.img} src={logo} alt="logo" />
          <h1 className={styles.movies}>Movies</h1>
        </NavLink>
        {/* <div className={styles.boxButton}>
          <button className={styles.button} name="myAccount">
            My Account
          </button>
        </div> */}
        <NavLink to="/Favorites" className={styles.boxButton}>
          <p className={styles.button}>Favorites</p>
        </NavLink>
      </div>
    </header>
  );
}
