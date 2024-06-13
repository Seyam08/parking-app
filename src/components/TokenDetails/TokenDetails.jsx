import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../redux/tokenReducer/action";
import styles from "./TokenDetails.module.css";

export default function TokenDetails({ open, setOpenModal, item }) {
  const dispatch = useDispatch();

  const { id, vehicleType, selectedSpot, userDetails } = item;
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpenModal}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={styles.transitionChild} />
        </TransitionChild>

        <div className={styles.modalScreen}>
          <div className={styles.modalContainer}>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className={styles.dialogPanel}>
                <div className={styles.modalContent}>
                  <div className={styles.modalHeading}>
                    <h2>Owner name :</h2>
                    <h2>{userDetails.userName}</h2>
                  </div>
                  <div className={styles.modalText}>
                    <h4>ID</h4>
                    <p>{id}</p>
                  </div>
                  <div className={styles.modalText}>
                    <h4>Vehicle Type</h4>
                    <p>{vehicleType}</p>
                  </div>
                  <div className={styles.modalText}>
                    <h4>Selected Spot</h4>
                    <p>{selectedSpot}</p>
                  </div>
                  <div className={styles.modalText}>
                    <h4>Email</h4>
                    <p>{userDetails.userEmail}</p>
                  </div>
                  <div className={styles.modalText}>
                    <h4>Phone Number</h4>
                    <p>{userDetails.userPhone}</p>
                  </div>
                </div>
                <div className={styles.modalBtnArea}>
                  <button
                    type="button"
                    className={styles.modalBtnFrist}
                    onClick={() => {
                      dispatch(removeToken(id));
                      setOpenModal(false);
                    }}
                    data-autofocus
                  >
                    Clear spot
                  </button>
                  <button
                    type="button"
                    className={styles.modalBtnLast}
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
