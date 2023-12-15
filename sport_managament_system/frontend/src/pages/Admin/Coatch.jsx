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


  return (

    <div className='border-2 p-[50px]'>
      <Button onClick={handleClickOpen} >+ Add Coatch </Button>

      <FormDialog open={open} handleClose={handleClose} />
      <Table key={columns.map(temp => temp.key)} columns={columns} dataSource={dataSource} className='border-4 border-solid border-indigo-500' ></Table>


    </div>


  );
}

export default AddCoatch