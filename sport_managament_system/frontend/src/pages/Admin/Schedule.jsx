import React from 'react'
import { TextField, MenuItem, Select } from '@mui/material';
import { Table, Button, Modal, message, Input } from 'antd';

const Schedule = () => {
  return (
    <div className='container'>
      <div className='container'>
        <div className='flex justify-around p-[50px] border-4 m-[20px]'>
          <input type="date" className='h-[50px] w-[200px]' />
          <input type="time" className='h-[50px] w-[200px]' />
          <TextField label="Venue" className='w-[200px]'></TextField>

          <Select name='gametype' className='w-[200px]'  >

            <MenuItem value="Cricket">Cricket</MenuItem>
            <MenuItem value="VolleyBall">VolleyBall</MenuItem>
            <MenuItem value="Elle">Elle</MenuItem>
            <MenuItem value="Badminton">Badminton</MenuItem>
            <MenuItem value="Carrom">Carrom</MenuItem>
            <MenuItem value="Chess">Chess</MenuItem>
          </Select>
          <Button className='w-[120px] h-[50px] bg-blue-300 font-[500]'>CREATE</Button>

        </div>

        <div className='p-[25px]'>
          <Table className='border-2 h-[350px] '></Table>
        </div>

      </div>
    </div>
  )
}

export default Schedule