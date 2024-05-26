import { useDispatch, useSelector } from "react-redux";
import { mailInp, nameInp, phoneInp } from "../../redux/book/action";
import styles from "./DetailedForm.module.css";

export default function DetailedForm() {
  const book = useSelector((state) => state.book);
  const { userName, userEmail, userPhone } = book;
  const dispatch = useDispatch();
  console.log(book);

  return (
    <div className={styles.form_area}>
      <h2 className={styles.detaild_heading}>Detaild information</h2>
      <h3 className={styles.info_label}>Vehicle type: Please select!</h3>
      <h3 className={styles.info_label}>Parking spot: Please select!</h3>
      <label htmlFor="name">
        your name
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input_field}
          onChange={(e) => dispatch(nameInp(e.target.value))}
          value={userName}
        />
      </label>
      <label htmlFor="phone">
        phone number
        <input
          type="number"
          id="phone"
          className={styles.input_field}
          onChange={(e) => dispatch(phoneInp(e.target.value))}
          value={userPhone}
        />
      </label>

      <label htmlFor="email">
        email
        <input
          type="email"
          id="email"
          className={styles.input_field}
          onChange={(e) => dispatch(mailInp(e.target.value))}
          value={userEmail}
        />
      </label>
      <button>get token</button>
    </div>
  );
}
