import React from 'react'
import '../scss/_home.scss'

const Modal = ({ handleClose }) => {    
    return (
        <div className="modal custom-modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{'Course Enrolment'}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {'Your course has been successfully registered.'}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal
