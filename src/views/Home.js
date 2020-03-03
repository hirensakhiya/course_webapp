import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../scss/_home.scss';
import $ from 'jquery';
import moment from 'moment';
import { allOptions } from '../common/courseOptions';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [txtNotes, settxtNotes] = useState('');
    const [show, setShow] = useState(false);
    const [loadSelect, setLoadSelect] = useState('0');
    const [validationMsg, setValidationMsg] = useState('');
    var options = allOptions[loadSelect];

    //Set Loading on click of submit button
    const onSubmit = () => {
        setLoading(true)
        if (validationMsg !== "") {
            setLoading(false)
            alert(validationMsg)            
        }
        else {
            setTimeout(() => {
                setLoading(false)
                // setShow(true);
                $('#myModal').modal('show');
            }, 2000);
        }
    }

    // Method for handle date change
    const handleChange = (date) => {
        setStartDate(date)
        const selectedDate = moment(date).format("DD MMMM, YYYY")
        if (selectedDate !== '20 December, 2019' && selectedDate !== '15 January, 2020' && selectedDate !== '01 February, 2020') {
            alert("Your selected course and subject is not offered beginning from your selected date")
        }         
    }

    // Method for handle textArea Input
    const handleNotesChange = (event) => {
        settxtNotes(event.target.value)
        if (event.target.value.length < 20 || event.target.value.length > 500) {
            setValidationMsg("Enter Notes between 20 to 500 characters")
        }
        else { 
            setValidationMsg("")
        }
    }

    const hideModal = () => {
        $('#myModal').modal('hide');
    }

    const handleCourseChange = event => {
        if (event.target.value === "radio1") {
            setLoadSelect('1');
        }
        if (event.target.value === "radio2") {
            setLoadSelect('2');
        }
        if (event.target.value === "radio3") {
            setLoadSelect('3');
        }
    };

    return (
        <div className="container-fluid col-md-8">
            <form noValidate={true}>
                <h2 className="text-center"> Course Details</h2>
                <hr></hr>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-md-2 pt-0">Course: </legend>
                        <div className="col-md-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="course" value="radio1" onChange={handleCourseChange} />
                                <label className="form-check-label">Technical Report Writing</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="course" value="radio2" onChange={handleCourseChange} />
                                <label className="form-check-label">English Literature</label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="course" value="radio3" onChange={handleCourseChange} />
                                <label className="form-check-label">Computer Sciences</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label>Subject: </label>
                    <select className="form-control" name={'subject'}>
                        {options.map(op => <option key={op.key} value={op.value}>{op.value}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Course Start Date: </label>
                    <DatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Additional Notes: </label>
                    <textarea className="form-control" rows="5" value={txtNotes} onChange={handleNotesChange} />
                </div>

                <div className="form-group">
                    <Button
                        loading={loading} onClick={onSubmit}
                        className="button button--fill button--border button--fixed"
                        style={{ fontSize: '14px' }}
                    >{'Submit'}
                    </Button>
                </div>

                <Modal show={show} handleClose={hideModal}>
                </Modal>
            </form>
        </div>
    )
}
export default Home
