import React from 'react';
import { useState, useEffect } from 'react';
import { TextField, MenuItem, Select } from '@mui/material';
import { Table, Button, Modal, message, Input } from 'antd';
import VollyBall from './ScoreTemplates/VollyBall';
import FootBall from './ScoreTemplates/FootBall';


const Score = () => {

  const [sports, setSports] = useState(['cricket']);
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    gametype: 'cricket',
    event: ''
  });


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

  const getEvents = async (type) => {

    await fetch(`http://localhost:5000/api/shedule/show/${type}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setEvents(data);
        console.log(data);

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



  const handleChnage = (e) => {
    const { value, name } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    getEvents(value);
  



  }
  return (
    <div className='container'>


      <div className='flex justify-center mt-[25px]'>
        <label htmlFor="">Select Sport : </label>
        <Select name='gametype' value={formData.gametype} className='w-[250px] m-[25px]' onChange={handleChnage}  >


          {
            sports.map((item) =>
              <MenuItem value={item.sportName}  >{item.sportName}</MenuItem>
            )
          }

        </Select>

        <label htmlFor="">Select Event : </label>
        <Select name='event' value={formData.event} className='w-[250px] m-[25px] ' onChange={handleChnage} >


          {
            events.map((item) =>
              <MenuItem value={item.eventName} >{item.eventName}</MenuItem>
            )
          }

        </Select>
      </div>

      <VollyBall />
      <FootBall />


    </div>

  )
}

export default Score