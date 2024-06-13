import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/tokenReducer/action";
import TokenDetails from "../TokenDetails/TokenDetails";
import styles from "./Tokens.module.css";

export default function Tokens() {
  const tokenState = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState("");

  const showDetails = (id) => {
    setOpenModal(id);
  };

  return (
    <div className={styles.token_area}>
      <h2 className={styles.token_area_heading}>All Tokens</h2>
      <ul className={styles.token_list}>
        {tokenState.map((item, index) => (
          <li className={styles.token_list_item} key={index}>
            <div className={styles.item_info}>
              <div className={styles.item_title}>
                <p>Token :</p>
              </div>
              <div className={styles.item_desc}>
                <p>{item.id}</p>
              </div>
            </div>
            <div className={styles.item_info}>
              <div className={styles.item_title}>
                <p>Selected Spot :</p>
              </div>
              <div className={styles.item_desc}>
                <p>{item.selectedSpot}</p>
              </div>
            </div>
            <div className={styles.item_info}>
              <div className={styles.item_title}>
                <p>{"Owner's name:"}</p>
              </div>
              <div className={styles.item_desc}>
                <p>{item.userDetails.userName}</p>
              </div>
            </div>
            <div className={styles.item_info}>
              <div className={styles.item_title}>
                <p>Details :</p>
              </div>
              <div className={styles.item_desc}>
                <button
                  className={styles.token_btn}
                  onClick={() => showDetails(item.id)}
                >
                  {"=>"}
                </button>
              </div>
            </div>
            <div className={styles.item_info}>
              <div className={styles.item_title}>
                <p>Clear Spot :</p>
              </div>
              <div className={styles.item_desc}>
                <button
                  className={styles.token_btn}
                  onClick={() => dispatch(removeToken(item.id))}
                >
                  x
                </button>
              </div>
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
