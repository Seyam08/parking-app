import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearInfo, inpDetails } from "../../redux/bookReducer/action";
import styles from "./DetailedForm.module.css";

export default function DetailedForm() {
  const [details, setDetails] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });
  const book = useSelector((state) => state.book);
  const { vehicleType, selectedSpot } = book;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault;
    if (
      vehicleType &&
      selectedSpot &&
      details.userName &&
      details.userEmail &&
      details.userPhone
    ) {
      dispatch(inpDetails(details));
      setDetails({
        userName: "",
        userEmail: "",
        userPhone: "",
      });
      dispatch(clearInfo());
    } else {
      alert("Please select and fillup all of option!");
    }
  };
  return (
    <div className={styles.form_area}>
      <h2 className={styles.detaild_heading}>Detaild information</h2>
      <h3 className={styles.info_label}>
        Vehicle type: {vehicleType ? vehicleType : "Please select!"}
      </h3>
      <h3 className={styles.info_label}>
        Parking spot: {selectedSpot ? selectedSpot : "Please select!"}
      </h3>
      <label htmlFor="name">
        your name
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input_field}
          onChange={(e) => setDetails({ ...details, userName: e.target.value })}
          value={details.userName}
        />
      </label>
      <label htmlFor="phone">
        phone number
        <input
          type="number"
          id="phone"
          className={styles.input_field}
          onChange={(e) =>
            setDetails({ ...details, userPhone: e.target.value })
          }
          value={details.userPhone}
        />
      </label>

      <label htmlFor="email">
        email
        <input
          type="email"
          id="email"
          className={styles.input_field}
          onChange={(e) =>
            setDetails({ ...details, userEmail: e.target.value })
          }
          value={details.userEmail}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        get token
      </button>
    </div>
  );
}
