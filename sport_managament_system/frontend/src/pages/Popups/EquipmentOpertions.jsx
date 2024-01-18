import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';

import DialogTitle from '@mui/material/DialogTitle';
import { TextField, MenuItem, Select } from '@mui/material';

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


export default function FormDialog({ open, handleClose, operation, data, edit }) {

    // useEffect(() => {
    //     //console.log(data.object);
    //     setFormData(data.object ? data.object : "");
    // }, [edit]);

    const [sports, setSports] = useState([]);
    const [formData, setFormData] = useState({
        gametype: '',
        name: '',
        qty: '',
        available: '',
        photo: ''

    });

    const { gametype, name, qty, available } = formData;


    const handleAddEquipment = async () => {

        await axios.post('http://localhost:5000/api/equipment/add', JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {

                operation(); //fetch data for realtime update

                setFormData({});

            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

        handleClose();
        //window.location.reload();

    }

    const handleUpdateEquipment = async () => {

        ;


        await axios.put(`http://localhost:5000/api/equipment/update/${data.object._id}`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {

                operation();//fetch data
                setFormData({});

            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

        handleClose();
        //window.location.reload();


    }

    let tempfunction;

    if (data.val === "add") {

        tempfunction = handleAddEquipment;

    } if (data.val === "update") {
        // setFormData(data.object);
        tempfunction = handleUpdateEquipment;


    }



    const handleChnage = (e) => {
        const { value, name } = e.target;
        //console.log(value, name);
        setFormData({ ...formData, [name]: value });

    }

    const getSports = async () => {

        await fetch('http://localhost:5000/api/sport/show')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(data => {
                setSports(data);
            })
            .catch(error => {
                // Handle errors here
                console.error('Fetch error:', error);
                // Notify the user
                // alert('An error occurred while fetching data. Please try again.');


            });
    }

    useEffect(() => {
        getSports();


    }, []);


    return (
        <React.Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <center className='font-[700] '>{data.title}</center>
                </DialogTitle>
                <div className=' mx-auto pl-[150px] pr-[150px]'>
                    <form action="">
                        <div className='mb-[20px]'>

                            <div className='mb-[20px]'>
                                <TextField name='name' value={name} placeholder='Enter Name' label="Equipment Name" onChange={handleChnage} />
                            </div>

                            <label className=''>GameType: </label>
                            <Select name='gametype' value={gametype} className='w-[130px]' onChange={handleChnage} >


                                {
                                    sports.map((item) =>
                                        <MenuItem value={item.sportName} >{item.sportName}</MenuItem>
                                    )
                                }

                            </Select>

                        </div>
                        <div className='mb-[20px]'>
                            <TextField name='qty' value={qty} placeholder='Enter Name' label="Qty" onChange={handleChnage} />
                        </div>
                        <div className='mb-[20px]'>
                            <TextField name='available' value={available} placeholder='Enter Name' label="Avialable" onChange={handleChnage} />
                        </div>

                       

                    </form>
                </div>

                <DialogActions>
                    <Button onClick={handleClose} variant='outlined' color='secondary'>Cancel</Button>
                    <Button autoFocus className='text-primaryColor' variant='contained' onClick={tempfunction}>
                        {data.val}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
