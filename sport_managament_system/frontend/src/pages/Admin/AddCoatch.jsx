import React, { useEffect, useState } from 'react';
import { Table, Button ,Modal} from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';

const AddCoatch = () => {

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Jhone',
      email: 'Visa@gmail.com',
      address: 'kegalle'

    },
    {
      id: 2,
      name: 'Jhone',
      email: 'Visa@gmail.com',
      address: 'kegalle'

    }, {
      id: 3,
      name: 'Jhone',
      email: 'Visa@gmail.com',
      address: 'kegalle'

    }
  ]);

  const columns = [
    {
      key: '1',
      title: 'Id',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: '5',
      title: 'Actions',
      render: (recode) => {
        return <>
          <div className='flex gap-5'>
            <EditOutlined />
            <DeleteOutlined style={{ color: 'red' }} onClick={() => {
              deleteCoatch(recode);
            }} />
          </div>
        </>
      }
    },
  ];

  const addCoatch = () => {

    const newCoatch = {
      id: 4,
      name: 'Jhone4',
      email: 'Visa@gmail.com',
      address: 'kegalle'
    }
    setDataSource(pre => {
      return [...pre, newCoatch];
    })
  }

  const deleteCoatch = (recode) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this recode ',
      okText:'Yes',
      okType:'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((coatch => coatch.id !== recode.id));
        });
      }
    });

  }

  return (
    <div className='p-[100px] border-2'>
      <Button onClick={addCoatch}>Add a new Coatch</Button>
      <Table columns={columns} dataSource={dataSource}>


      </Table>
    </div>
  );
}

export default AddCoatch