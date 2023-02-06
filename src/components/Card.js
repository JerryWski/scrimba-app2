import styles from "./Card.module.css"
import Header from "./Header";
import Offer from "./Offer";

const Card = () => {
    return (
        <div className={styles.card}>
             <Header />
             <Offer />
        </div>
    )
};

export default Card;