import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className = 'f3'>
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div className= 'center pa4 br3 shadow form'>
                <input type = 'tex' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
}
export default ImageLinkForm;