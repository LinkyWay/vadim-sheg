"use client"

import styles from "./links.module.scss"
import NavLink from "./navLink/navLink"
import Image from "next/image"

const linksArray = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "v_lnc",
    path: "/",
  },
  {
    title: "v-lnc",
    path: "/",
  },
  {
    title: "lnc",
    path: "/",
  },
]

const Links = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.links}>
        {linksArray.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </li>
    </ul>
  )
}

export default Links