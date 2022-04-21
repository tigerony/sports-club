import React from 'react';
import { Table } from 'react-bootstrap';
import react, { useState, useEffect } from "react";


const AddTicketBooking = () => {
  const [ticket, setTicket] = useState([])

  useEffect(() => {
    fetch("https://enigmatic-garden-34025.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `https://enigmatic-garden-34025.herokuapp.com/booking/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deletedCount > 0) {
       alert('Booking Succefully Deleted');
       const remaining = ticket.find(order=> order._id !== id);
       setTicket(remaining);
       console.log(setTicket);
       
     }

     });
    }
  
  }
  console.log(ticket)



    return (
        <div>
          <h1>All Order ticket {ticket.length}</h1>
           <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Email</th>
      <th>Number</th>
      <th>Date</th>
      <th>City</th>
      <th>Address</th>
    </tr>
  </thead>
  {
    ticket.map((pd, index) => (   
      <tbody>
      <tr>
      <td>{index}</td>
      <td>{pd.name}</td>
      <td>{pd.email}</td>
      <td>{pd.number}</td>
      <td>{pd.date}</td>
      <td>{pd.city}</td>
      <td>{pd.address}</td>
      <button onClick={()=> handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default AddTicketBooking;