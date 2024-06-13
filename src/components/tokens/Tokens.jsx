import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/tokenReducer/action";
import TokenDetails from "../TokenDetails/TokenDetails";
import styles from "./Tokens.module.css";

export default function Tokens() {
  const tokenState = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.token_area}>
      <h2 className={styles.token_area_heading}>All Tokens</h2>
      <ul className={styles.token_list}>
        {tokenState.map((item, index) => (
          <li className={styles.token_list_item} key={index}>
            <div className={styles.item_title}>
              <div>
                <p>Token :</p>
                <p>Selected Spot :</p>
                <p>{"Owner's name:"}</p>
                <p>Details :</p>
                <p>Clear Spot :</p>
              </div>
            </div>
            <div className={styles.item_desc}>
              <p>{item.id}</p>
              <p>{item.selectedSpot}</p>
              <p>{item.userDetails.userName}</p>
              <button
                className={styles.rm_token_btn}
                onClick={() => setOpenModal(item.id)}
              >
                {"=>"}
              </button>
              <button
                className={styles.rm_token_btn}
                onClick={() => dispatch(removeToken(item.id))}
              >
                x
              </button>
            </div>
            <TokenDetails
              open={openModal === item.id}
              setOpenModal={setOpenModal}
              item={item}
            ></TokenDetails>
          </li>
        ))}
      </ul>
    </div>
  );
}
