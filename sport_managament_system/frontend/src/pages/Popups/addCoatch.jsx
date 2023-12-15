import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';

import DialogTitle from '@mui/material/DialogTitle';
import { TextField, MenuItem, Select, } from '@mui/material';



// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



export default function FormDialog({ open, handleClose }) {



    const [formData, setFormData] = useState({
        gametype: '',
        name: '',
        gender: '',
        dob: '',
        email: '',
        mobile: '',
        photo: ''

    });
    const { gametype, name, gender, dob, email, mobile, photo } = formData;


    const handleChnage = (e) => {
        const { value, name } = e.target;
        //console.log(value, name);
        setFormData({ ...formData, [name]: value });

    }

    const handleaddCoatch = () => {

        axios.post('http://localhost:5000/api/coatch/add', JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                // Handle the response from the server
                console.log('Response from server:', response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

            handleClose();

    }


    return (
        <React.Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <center className='font-[700] '>New Coatch</center>
                </DialogTitle>
                <div className=' mx-auto pl-[150px] pr-[150px]'>
                    <form action="">
                        <div className='mb-[20px]'>
                            <label className=''>Game Type : </label>
                            <Select name='gametype' value={gametype} className='w-[130px]' onChange={handleChnage} >

                                <MenuItem value="Cricket">Cricket</MenuItem>
                                <MenuItem value="ValyBall">ValyBall</MenuItem>
                                <MenuItem value="Elle">Elle</MenuItem>
                                <MenuItem value="Badminton">Badminton</MenuItem>
                                <MenuItem value="Carrom">Carrom</MenuItem>
                                <MenuItem value="Chess">Chess</MenuItem>
                            </Select>
                        </div>

                        <div className='mb-[20px]'>
                            <TextField name='name' value={name} placeholder='Enter Name' label="Name" onChange={handleChnage} />
                        </div>

                        <div className='mb-[15px]'>
                            <label>Gender: </label>
                            <Select name="gender" value={gender} className='w-[165px]' onChange={handleChnage} >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>

                            </Select></div>
                        <div className='mb-[20px]'>
                            <input type="date" name="dob" value={dob} onChange={handleChnage} ></input>
                        </div>
                        <div className='mb-[20px]'>
                            <TextField name='email' value={email} placeholder='Enter Email' label="Email" onChange={handleChnage} />
                        </div>
                        <div className='mb-[20px]'>
                            <TextField name='mobile' value={mobile} placeholder='Enter Mobile' label="Moble" onChange={handleChnage} />
                        </div>
                        <div className='mb-[20px]'>
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                Upload Photo
                                <VisuallyHiddenInput type="file" value={photo} onChange={handleChnage} name='photo' />
                            </Button>
                        </div>


                    </form>
                </div>

                <DialogActions>
                    <Button onClick={handleClose} variant='outlined' color='secondary'>Cancel</Button>
                    <Button autoFocus className='text-primaryColor' variant='contained' onClick={handleaddCoatch}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
