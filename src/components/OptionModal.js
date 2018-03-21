import React, {Component} from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
<Modal isOpen={!! props.selectedOption} 
contentLabel="Selected Options"
onRequestClose={props.handleClearModalPopup}
closeTimeoutMS={200}
className="modal"
>
<h3 className="modal__title">Selected Options</h3>
{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}

<button className="button" onClick={props.handleClearModalPopup}>Okay</button>
</Modal>

);

export default OptionModal;