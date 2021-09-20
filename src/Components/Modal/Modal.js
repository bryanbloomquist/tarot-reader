import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Aux from "../../HOC/Aux";
import ModalBackdrop from "./ModalBackdrop";

const TarotModal = React.memo((props) => {
    const { modalCard, modalShow, handleClose } = useContext(Context);

    return (
        <Aux>
            <ModalBackdrop show={modalShow} clicked={handleClose} />
            <div
                className='modal'
                style={{
                    transform: modalShow ? "translateY(0)" : "translateY(-100vh)",
                    opacity: modalShow ? "1" : "0",
                }}
            >
                <img src={modalCard.image} alt={modalCard.name} className="tarot-card" />
                <div className="modal__body">
                    <h2>{modalCard.name}</h2>
                    <hr />
                    <p><span>{modalCard.keywords}</span></p>
                    <hr />
                    <p>{modalCard.general}</p>
                </div>
                <button className="modal__close-button" onClick={handleClose}>&nbsp;</button>
            </div>
        </Aux>
    );
});

export default TarotModal;
