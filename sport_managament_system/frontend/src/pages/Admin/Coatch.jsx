import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import FormDialog from '../Popups/addCoatch.jsx';
import LoadingSpinner from '../Loading/LoadingSpinner.jsx';



const AddCoatch = () => {


  //show all data
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch('http://localhost:5000/api/coatch/show')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDataSource(data)
      }).then(setInterval(() => {
        setLoading(false);
      }, 100))
      .catch(error => {
        // Handle errors here
        console.error('Fetch error:', error);
        // Notify the user
        // alert('An error occurred while fetching data. Please try again.');
        message.info("An error occurred while fetching data. Please try again.");

      });
  }

  useEffect(() => {
    fetchData();

  }, []);




  const editCoatch = (recode) => {
    console.log(recode);

  }

  const deleteCoatch = (recode) => {

    Modal.confirm({
      title: "Are you sure, you want to delete this coatch?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const tempData = JSON.stringify(recode);
        const row = JSON.parse(tempData);
        axios.delete(`http://localhost:5000/api/coatch/delete/${row._id}`)
          .then(response => {
            // Handle the response from the server
            console.log('Response from server:', response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });

        window.location.reload();
      }
    });




  }


  const columns = [
    {
      key: '1',
      title: 'Game Type',
      dataIndex: 'gametype'
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: '3',
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      key: '4',
      title: 'Birthday',
      dataIndex: 'dob'
    },
    {
      key: '5',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: '6',
      title: 'Mobile',
      dataIndex: 'mobile'
    },
    {
      key: '7',
      title: 'Actions',
      render: (recode) => {
        return <>
          <div key={recode.key} className='flex gap-5'>
            <EditOutlined onClick={editCoatch} />
            <DeleteOutlined style={{ color: 'red' }} onClick={() => deleteCoatch(recode)} />
          </div>
        </>
      }
    }
  ];


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (

    <div className='border-2 pl-[100px] pr-[100px] pt-[20px] pb-[20px]'>


      <FormDialog open={open} handleClose={handleClose} />
      {
        loading ? (<LoadingSpinner />) : (<><Button onClick={handleClickOpen} className='mb-[10px]'>+ Add Coatch </Button>
          <Table rowKey={5} columns={columns} dataSource={dataSource} className='border-4 overflow-y-auto h-[500px]' ></Table></>)

      }



    </div>


  );
}

export default AddCoatch