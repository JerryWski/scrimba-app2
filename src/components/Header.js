import styles from "./Header.module.css"

const Header = () => {
    return (
        <nav className={styles.header}>
            <img src={require("../images/world-icon.png")} alt="globe-icon"/>
            <p className={styles.header__text}>my travel journal</p>
        </nav>
    )
};

export default Header;