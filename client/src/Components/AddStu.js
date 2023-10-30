import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddStu() {
  const [student, setStudent] = useState({
    name: '',
    grade: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = (event) => {
    event.preventDefault();
    const data = {
      name: student.name,
      grade: student.grade,
      email: student.email,
      password: student.password,
    };

    axios
      .post(`http://localhost:5000/addStudent`, data)
      .then((response) => {
        toast.success('Data sent successfully');
        console.log('Data sent successfully', response.data);
      })
      .catch((error) => {
        toast.error('Error sending data');
        console.error('Error sending data: ', error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={saveStudent}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={student.name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Grade"
            name="grade"
            value={student.grade}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={student.email}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={student.password}
            onChange={handleInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddStu;
