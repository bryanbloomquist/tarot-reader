import React from "react";

const ModalBackdrop = (props) =>
	props.show ? (
		<div className='modal__backdrop' onClick={props.clicked} />
	) : null;

export default ModalBackdrop;