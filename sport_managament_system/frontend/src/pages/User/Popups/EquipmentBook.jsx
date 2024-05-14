import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Button, Grid, InputLabel } from '@mui/material';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function EquipmentBook(props) {
    const [formData, setFormData] = useState({
        name: '',
        indexnumber: '',
        mobile: '',
        qty: '',
        from: '',
        to: '',

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if any field is empty
        for (const field in formData) {
            if (formData[field].trim() === '') {
                alert(`Please fill in all fields`);
                return;
            }
        }

        // Proceed with booking
        if (props.qty < parseInt(formData.qty)) {
            alert(`No available equipments. Quantity requested: ${formData.qty}, only ${props.qty} available`);
        } else {

            await axios.post('http://localhost:5000/api/equipment/book', JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(
                (data) => { if (data) { alert("Succsessfully Booked..!") } }
            )

        }

        props.handleClose();
    };


    useEffect(() => {

        formData.name = props.equName;
    }, [props])





    return (
        <React.Fragment>
            <BootstrapDialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='flex justify-center'>
                    Book Equipment
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center" className='flex justify-center'>
                            <Grid item>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    name='name'
                                    value={props.equName}
                                    // onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='text'
                                    label="Index Number"
                                    variant="outlined"
                                    name='indexnumber'
                                    value={formData.indexnumber}
                                    onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Mobile"
                                    variant="outlined"
                                    name='mobile'
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type='number'
                                    label="Qty"
                                    variant="outlined"
                                    name='qty'
                                    value={formData.qty}
                                    onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel htmlFor="outlined-basic-start-date">From</InputLabel>
                                <TextField
                                    type='date'
                                    variant="outlined"
                                    name='from'
                                    value={formData.from}
                                    onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel htmlFor="outlined-basic-end-date">To</InputLabel>
                                <TextField
                                    type='date'
                                    variant="outlined"
                                    name='to'
                                    value={formData.to}
                                    onChange={handleChange}
                                    className='w-[250px]'
                                />
                            </Grid>
                        </Grid>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} variant='outlined' color='secondary'>Cancel</Button>
                    <Button autoFocus className='text-primaryColor' variant='contained' onClick={handleSubmit}>
                        Book
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
