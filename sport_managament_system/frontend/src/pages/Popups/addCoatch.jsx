import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';


import DialogTitle from '@mui/material/DialogTitle';
import { TextField, MenuItem, Select, } from '@mui/material';


import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





export default function FormDialog({ open, handleClose }) {

    const [selectedTime, setSelectedTime] = useState('12:00');

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Perform actions to store the file in local storage
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                localStorage.setItem('uploadedPhoto', base64String);
            };
            reader.readAsDataURL(selectedFile);
        }
    };



    // const [selectedGender, setSelectedGender] = useState('');

    // const handleGenderChange = (event) => {
    //     setSelectedGender(event.target.value);
    // };

    return (
        <React.Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                   <center>Create a new coatch</center>
                </DialogTitle>
                <div className=' mx-auto  pl-[100px] pr-[30px]'>
                    <form action="">
                        <label className=''>Game Type : </label>
                        <Select   >

                            <MenuItem value={10}>Cricket</MenuItem>
                            <MenuItem value={20}>ValyBall</MenuItem>
                            <MenuItem value={30}>Elle</MenuItem>
                            <MenuItem value={10}>Badminton</MenuItem>
                            <MenuItem value={20}>Carrom</MenuItem>
                            <MenuItem value={30}>Chess</MenuItem>
                        </Select>
                        <br /><br />
                        <label htmlFor="">Time </label>
                        <input className='border w-[120px] ml-[20px] '
                            type="time"
                            value={selectedTime}
                            onChange={handleTimeChange}
                        />
                        <br /><br />
                        <TextField id='name' placeholder='Enter Name' label="Name" />
                        <br /><br />
                        <label>Gender: </label>
                        <Select   >

                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>

                        </Select>
                        <br /><br />
                        <label>Dob : </label>
                        <DatePicker className='border w-[120px] ml-[20px] '
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"  // Customize the date format if needed
                        />
                        <br /><br />
                        <TextField id='email' placeholder='Enter Email' label="Email" />
                        <br /><br />
                        <TextField id='mobile' placeholder='Enter Mobile' label="Moble" />
                        <br /><br />
                        <input type="file" onChange={handleFileChange} />
                        <button className='border' onClick={handleUpload}>Upload Photo</button >
                    </form>
                </div>

                <DialogActions>
                    <Button onClick={handleClose} className='text-primaryColor'>Cancel</Button>
                    <Button autoFocus >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
