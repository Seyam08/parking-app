import styles from "./Park.module.css";
import Spot from "./Spot/Spot";

function Park() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <Spot />
        <div className={styles.form_area}>2</div>
        <div className={styles.token_area}>3</div>
      </div>
    </div>
  );
}

export default Park;
