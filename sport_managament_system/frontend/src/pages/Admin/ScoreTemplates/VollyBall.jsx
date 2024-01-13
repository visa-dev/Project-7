import React from 'react'
import { TextField, MenuItem, Select } from '@mui/material';
import { Table, Button, Modal, message, Input } from 'antd';

const VallyBall = () => {
    return (
        <div className='flex justify-center'>
            <label htmlFor="" className='m-[20px]'>Team 1</label>
            <TextField ></TextField>
            <label htmlFor="" className='m-[20px]'>Team 2</label>
            <TextField></TextField>
        </div>
    )
}

export default VallyBall