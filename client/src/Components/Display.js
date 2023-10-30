import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';

export default function Display() {
  const [data, SetData] = useState([]);
  
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/data");
    console.log("THIS IS MY DATA API",response.data);
    SetData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
            <table striped bordered hover className="table-bordered">
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Grade</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.grade}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
