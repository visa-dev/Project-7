import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, message, Input } from 'antd';
import { EditOutlined, DeleteOutlined, ProfileOutlined } from '@ant-design/icons';
import FormDialog from '../Popups/AchivementOperations.jsx';
import LoadingSpinner from '../Loading/LoadingSpinner.jsx';
import ImageViewer from '../Popups/ImageViwer.jsx';


const Achivement = () => {

  const [edit, setEdit] = useState(false);

  //show all data
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  //filter serachbar
  const [filterData, setFilterData] = useState();
  const [view, setView] = useState(false);
  const [coatchPhoto, setCoatchPhoto] = useState('');

  const filterDataSource = (e) => {
    setFilterData(dataSource.filter(temp => temp.achivementName.toLowerCase().includes(e.target.value)));
  }


  const fetchData = async () => {

    await fetch('http://localhost:5000/api/achivement/show')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setDataSource(data)
        setFilterData(data); // get frist time data otherwise empty table load
      }).then(setInterval(() => {
        setLoading(false);
      }, 250))
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





  const deleteAchivement = (id) => {

    Modal.confirm({
      title: "Are you sure, you want to delete this Achivement?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {

        axios.delete(`http://localhost:5000/api/achivement/delete/${id}`)
          .then(() => {
            // Handle the response from the server
            fetchData();
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });

        //window.location.reload();
      }
    });




  }

  const viewCoatch = (id) => {

    setCoatchPhoto('../../../public/' + id + '.jpg');
    setView(true);


  }



  const columns = [
    {
      key: '1',
      title: 'Achivement',
      dataIndex: 'achivementName'
    },
    {
      key: '2',
      title: 'GameType',
      dataIndex: 'gameType'
    },
    {
      key: '3',
      title: 'Discription',
      dataIndex: 'discription'
    },

    {
      key: '6',
      title: 'Actions',
      render: (recode) => {
        const tempData = JSON.stringify(recode);
        const row = JSON.parse(tempData);

        return <>
          <div key={recode.key} className='flex gap-5'>

            <EditOutlined onClick={() => handleClickOpen({ val: "update", object: row, title: "Update Achivement" })} />
            <DeleteOutlined style={{ color: 'red' }} onClick={() => deleteAchivement(row._id)} />
            <ProfileOutlined style={{ color: 'blue' }} onClick={() => viewCoatch(row._id)} />
          </div>
        </>
      }
    }
  ];


  const [open, setOpen] = useState(false);

  const [params, setParams] = useState(0);

  const handleClickOpen = (item) => {


    if (item.val === "update") {
      // data = { title: "Update Achivement", option: item };
      setEdit(true);
      setParams(item);
    } if (item.val === "add") {
      setParams(item);
    }
    setOpen(true);

  };


  const handleClose = () => {
    setOpen(false);

  };
  const handleViewClose = () => {
    setView(false);

  }






  return (

    <div className='bgImage border-2 pl-[100px] pr-[100px] pt-[20px] pb-[20px] '>


      <FormDialog open={open} handleClose={handleClose} operation={fetchData} data={params} edit={edit} />
      <ImageViewer open={view} handleViewClose={handleViewClose} imgId={coatchPhoto} />
      {
        loading ? (<LoadingSpinner />) : (
          <>

            <div className='flex gap-4 mb-[10px] '>

              <Button onClick={() => handleClickOpen({ val: "add", object: '', title: "Add Achivement" })} > + Add Achivement </Button>
              <Input type='text' placeholder='Search Achivements' onChange={filterDataSource}></Input>
            </div>

            <Table columns={columns} dataSource={filterData} className='border-4 overflow-y-auto h-[500px]' > </Table>
          </>)

      }



    </div >


  );
}

export default Achivement


