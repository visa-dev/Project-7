import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import axios from 'axios';

const AddCoatch = () => {


  // const dataSource = axios.get('http://localhost:5000/api/coatch/show');



  const [dataSource, setDataSource] = useState([]);
  useState(() => {
    fetch('http://localhost:5000/api/coatch/show')
      .then(res => res.json())
      .then(res => setDataSource(res))

  }, []);



  //   {
  //     id: 1,
  //     name: 'Jhone',
  //     email: 'Visa@gmail.com',
  //     address: 'kegalle'

  //   },
  //   {
  //     id: 2,
  //     name: 'Jhone',
  //     email: 'Visa@gmail.com',
  //     address: 'kegalle'

  //   }, {
  //     id: 3,
  //     name: 'Jhone',
  //     email: 'Visa@gmail.com',
  //     address: 'kegalle'

  //   }
  // ]);

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

  // const addCoatch = () => {

  //   const newCoatch = {
  //     id: 4,
  //     name: 'Jhone4',
  //     email: 'Visa@gmail.com',
  //     address: 'kegalle'
  //   }
  //   setDataSource(pre => {
  //     return [...pre, newCoatch];
  //   })
  // }

  // const deleteCoatch = (recode) => {
  //   Modal.confirm({
  //     title: 'Are you sure, you want to delete this recode ',
  //     okText:'Yes',
  //     okType:'danger',
  //     onOk: () => {
  //       setDataSource((pre) => {
  //         return pre.filter((coatch => coatch.id !== recode.id));
  //       });
  //     }
  //   });

  // }

  return (
    <div className='border-2 p-[50px]'>
      <Button>Add a new Coatch</Button>

      <Table columns={columns} dataSource={dataSource} >


      </Table>

    </div>
  );
}

export default AddCoatch