import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const menus = ["About Me", "Portfolio", "Blog", "Contact"];
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuVisibility(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuVisibility((prevState) => !prevState);
  };

  const displayMenus = () => {
    if (menuVisibility)
      return menus.map((menu, index) => <li key={index}>{menu}</li>);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.fullName}>
        <span className={styles.firstName}>Alvin</span>
        <span className={styles.lastName}> Almodal</span>
      </div>
      <ul
        className={
          menuVisibility
            ? `${styles.menu}`
            : `${styles.menu} ${styles.menuHidden}`
        }
      >
        {menuVisibility && displayMenus()}
      </ul>
      <img
        className={styles.menuIcon}
        src="/menu-icon.svg"
        onClick={toggleMenu}
      ></img>
    </nav>
  );
};

export default Header;
