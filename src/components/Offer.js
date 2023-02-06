import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.fuji_img}
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt="mount-fuji"
      />
      <div className={styles.container__data}>
        <div className={styles.local__data}>
          <img
            className={styles.dot__img}
            src={require("../images/position_dot.png")}
            alt="red_dot"
          />{" "}
          <span className={styles.country__name}>JAPAN</span>{" "}
          <a
            className={styles.link}
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
          >
            view on Google Maps
          </a>
        </div>
        <h1 className={styles.title}>Mount Fuji</h1>
        <p className={styles.period__time}>12 Jan, 2021 - 24 Jan, 2021</p>
        <p className={styles.description__offer}>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Offer;
