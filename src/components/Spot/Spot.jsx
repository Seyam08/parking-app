import { useDispatch, useSelector } from "react-redux";
import bike from "../../assets/images/bike.png";
import car from "../../assets/images/car.png";
import { spaceCreator } from "../../helpers/spaceCreator";
import { spotSelect, vhSelect } from "../../redux/book/action";
import styles from "./Spot.module.css";

export default function Spot() {
  const fullPark = spaceCreator(18);
  const book = useSelector((state) => state.book);
  const { vehicleType, selectedSpot } = book;
  const dispatch = useDispatch();

  const handleVehicleChange = (e) => {
    dispatch(vhSelect(e.target.value));
  };
  const handelSpot = (spot) => {
    dispatch(spotSelect(spot));
  };
  return (
    <div className={styles.spot_area}>
      <div className={styles.vehicle_select}>
        <h3 className={styles.heading_font}>Choose your vehicle type</h3>
        <div className={styles.vehicle_wrap}>
          <div
            className={`${styles.vehicle} ${
              vehicleType === "bike" ? "border-2 border-slate-500" : "border-2 "
            }`}
          >
            <input
              className="hidden"
              type="radio"
              id="bike"
              name="vehicle"
              value="bike"
              checked={vehicleType === "bike"}
              onChange={handleVehicleChange}
            />
            <label htmlFor="bike">
              <img src={bike} alt="bike" />
            </label>
          </div>
          <div
            className={`${styles.vehicle} ${
              vehicleType === "car" ? "border-2 border-slate-500" : "border-2 "
            }`}
          >
            <input
              className="hidden"
              type="radio"
              id="car"
              name="vehicle"
              value="car"
              checked={vehicleType === "car"}
              onChange={handleVehicleChange}
            />
            <label htmlFor="car">
              <img src={car} alt="car" />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.spot_select}>
        <h3 className={`${styles.heading_font} col-span-6`}>
          Choose parking spot:
        </h3>
        {fullPark.map((space, key) => (
          <div
            key={key}
            className={`${styles.prk_space} ${
              space.spot === selectedSpot ? styles.prk_space_select : ""
            }`}
            onClick={() => handelSpot(space.spot)}
          >
            {space.spot}
          </div>
        ))}
      </div>
    </div>
  );
}
