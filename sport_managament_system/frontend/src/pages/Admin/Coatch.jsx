import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import FormDialog from '../Popups/addCoatch.jsx';

const AddCoatch = () => {


  //show all data
  const [dataSource, setDataSource] = useState([]);
  useState(() => {
    fetch('http://localhost:5000/api/coatch/show')
      .then(res => res.json())
      .then(res => setDataSource(res))

  }, []);


  const columns = [
    {
      key: '1',
      title: 'Game Type',
      dataIndex: 'gametype'
    },
    {
      key: '2',
      title: 'Work Time',
      dataIndex: 'worktime'
    },
    {
      key: '3',
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: '4',
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      key: '5',
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      key: '6',
      title: 'Dob',
      dataIndex: 'dob'
    },
    {
      key: '7',
      title: 'Email',
      dataIndex: 'dob'
    },
    {
      key: '8',
      title: 'Mobile',
      dataIndex: 'dob'
    },
    {
      key: '9',
      title: 'Actions',
      render: (recode) => {
        return <>
          <div className='flex gap-5'>
            <EditOutlined />
            <DeleteOutlined style={{ color: 'red' }} />
          </div>
        </>
      }
    }
  ];


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);

  return (

    <div className='border-2 p-[50px]'>
      <Button onClick={handleClickOpen} >+ Add Coatch </Button>
      
      <FormDialog open={open} handleClose={handleClose} />
      <Table key={columns.map(temp => temp.key)} columns={columns} dataSource={dataSource}  ></Table>


    </div>


  );
}

export default AddCoatch