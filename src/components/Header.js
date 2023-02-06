import styles from "./Header.module.css"

const Header = () => {
    return (
        <nav className={styles.header}>
            <img src={require("../images/world-icon.png")} alt="globe-icon"/>
        </nav>
    )
};

export default Header;