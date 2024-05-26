import bike from "../../assets/images/bike.png";
import car from "../../assets/images/car.png";
import { spaceCreator } from "../../helpers/spaceCreator";
import styles from "./Spot.module.css";

export default function Spot() {
  const fullPark = spaceCreator(18);
  return (
    <div className={styles.spot_area}>
      <div className={styles.vehicle_select}>
        <h3 className={styles.heading_font}>Choose your vehicle type</h3>
        <div className={styles.vehicle_wrap}>
          <div className={styles.vehicle}>
            <img src={bike} alt="bike" />
          </div>
          <div className={styles.vehicle}>
            <img src={car} alt="car" />
          </div>
        </div>
      </div>

      <div className={styles.spot_select}>
        <h3 className={`${styles.heading_font} col-span-6`}>
          Choose parking spot:
        </h3>
        {fullPark.map((space, key) => (
          <div key={key} className={styles.prk_space}>
            {space.spot}
          </div>
        ))}
      </div>
    </div>
  );
}
