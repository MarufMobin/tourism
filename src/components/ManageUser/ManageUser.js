import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageUser.css'
import User from './User/User';

const ManageUser = () => {
    const [selectedTour, setSelectedTour] = useState([]);
    // const {dependancy , setDepandency} = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/tourdatas')
        .then(res => res.json())
        .then(data => setSelectedTour(data))
    }, [])

    // if( deletedCount == 1){
    //         setDepandency(true)
    // }

    return (
        <div className="container my-5">
            <h1 className="text-center my-4">Manage Users</h1>
            <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>sl</th>
            <th>Thubnail</th>
            <th>Email</th>
            <th>Tour Id</th>
            <th>Tour Title</th>
            <th>Edit</th>
            <th>Trash</th>
          </tr>
        </thead>
        <tbody>
         
            {
            selectedTour.map( select => <User select={select} key={select._id}></User>)
            }
            
          
          
        </tbody>
      </Table>
            
        </div>
    );
};

export default ManageUser;