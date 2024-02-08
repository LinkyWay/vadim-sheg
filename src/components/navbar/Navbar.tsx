import Links from "./links/Links"
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Links />
      </div>
    </nav>
  )
}

export default Navbar