import styles from "./DetailedForm.module.css";

export function DetailedForm() {
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
        />
      </label>
      <label htmlFor="phone">
        phone number
        <input type="number" id="phone" className={styles.input_field} />
      </label>

      <label htmlFor="email">
        email
        <input type="email" id="email" className={styles.input_field} />
      </label>
      <button>get token</button>
    </div>
  );
}
