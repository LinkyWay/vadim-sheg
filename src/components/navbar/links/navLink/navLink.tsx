"use client"

import Link from "next/link"
import styles from "./navLink.module.scss"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  }
} 

const NavLink = ({ item }: NavLinkProps) => {
  
  const pathName = usePathname()

  return (
    <div className={styles.container}>
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link>
    </div>
  )
}

export default NavLink