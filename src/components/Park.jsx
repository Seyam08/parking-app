import DetailedForm from "./Form/DetailedForm";
import styles from "./Park.module.css";
import Spot from "./Spot/Spot";
import Tokens from "./tokens/Tokens";
export default function Park() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <Spot />
        <DetailedForm />
        <Tokens />
      </div>
    </div>
  );
}
