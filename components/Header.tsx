import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/navBar.module.scss";
const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.right}>
        <Link href="/quran">
          <a>Quran</a>
        </Link>

        <Link href="/prayer">
          <a>Prayer Times</a>
        </Link>
        <Link href="/ramadan">
          <a>Ramadan</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
