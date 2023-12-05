import React, { useEffect, useState } from 'react'
import "../Styles/Home.css";
import { Table } from 'antd';
import axios from 'axios';

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
// import type { SearchProps } from '../Search';


// import Hanker from "../assets/hanker.jpeg"
import Hankerr from "../assets/hankerr.jpeg"

const { Search } = Input;

const Home = () => {
    const [data,setData] = useState ([])
    const [Mobile,setMobile] = useState ("")
    const payLoad = {mobile:Mobile}
    useEffect (() => {
        axios.post ("http://54.176.206.1:8080/get-app-logs" , payLoad) .then((Response) => {
        console.log(Response.data)
        setData(Response.data)
        }) 
        
        .catch((error) => {console.log (error)} )
    },[Mobile])


    const onSearch = (value, _e, info) => {setMobile(value)}



    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
        //   key: 'name',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
        //   key: 'age',
        },
        {
          title: 'Title',
          dataIndex: 'title',
        //   key: 'address',
        },
        {
            title: 'URL',
            dataIndex: 'url',
        },
        {
            title: 'UserID',
            dataIndex: 'userId',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Created On',
            dataIndex: 'createdOn',
        },
      ];



  return (
   <div className="home">
       <div className="logo">
           <div className="logo-text">

       <img src={Hankerr} alt="Hanker Logo" />
       <h1>Hanker</h1>
           </div>
       
       {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
    <div className="search">

    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      />
      </div>
       
       </div>
       {/* 03222189358 */}

       <h1>Tracking Data</h1>

       <Table dataSource={data} columns={columns} />;


   </div>
  )
}

export default Home
