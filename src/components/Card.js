import styles from "./Card.module.css";
// import Offer from "./Offer";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img
          className={styles.fuji_img}
          src={props.imageUrl}
          alt="mount-fuji"
        />
        <div className={styles.container__data}>
          <div className={styles.local__data}>
            <img
              className={styles.dot__img}
              src={require("../images/position_dot.png")}
              alt="red_dot"
            />{" "}
            <span className={styles.country__name}>{props.location}</span>{" "}
            <a
              className={styles.link}
              href={props.googleMapsUrl}
            >
              view on Google Maps
            </a>
          </div>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.period__time}>{props.startDate} - {props.endDate}</p>
          <p className={styles.description__offer}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
