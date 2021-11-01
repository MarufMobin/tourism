import React, { useState } from 'react';

const User = (props) => {
    const {email,img,tourId,_id} = props.select;
   
    const clickDeleteUser = (id) =>{
       const uri = `http://localhost:5000/data/${id}`;
       fetch(uri,{
           method: "Delete"
       }).then( res => res.json()).then(data => {
           if( data.deletedCount == 1){
               alert("Success Fully Deleted")
           }
       });
       
    }
    return (
       <tr>
           <td>{}</td>
            <td><img src={img} alt="" style={{width:"80px",height:"40px"}}/></td>
            <td>{email}</td>
            <td>{tourId}</td>
            <td>@mdo</td>
            <td><button className="btn btn-warning text-center" >Edit</button></td>
            <td><button className="btn btn-danger text-center" onClick={ ()=> clickDeleteUser(_id)}>Trash</button></td>
        </tr>
    );
};

export default User;