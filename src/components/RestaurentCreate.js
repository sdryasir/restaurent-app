import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class RestaurentCreate extends Component {
  constructor() {
    super();
    this.state = {
      reg_no: null,
      student_name: null,
      father_name: null,
      dob: null
    };
  }
  createRecord = () => {
    console.warn(this.state);
  };
  render() {
    return (
      <div>
        <Container>
          <h1>Create New Student</h1>
          <Form>
            <Form.Group controlId='formRegisterNo'>
              <Form.Label>Registration No.</Form.Label>
              <Form.Control
                type='text'
                onChange={event => {
                  this.setState({ reg_no: this.target.value });
                }}
                placeholder='enter registration no.'
              />
            </Form.Group>
            <Form.Group controlId='formName'>
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type='text'
                onChange={event => {
                  this.setState({ student_name: this.target.value });
                }}
                placeholder='enter student name'
              />
            </Form.Group>
            <Form.Group controlId='formFathername'>
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type='text'
                onChange={event => {
                  this.setState({ father_name: this.target.value });
                }}
                placeholder='enter father name'
              />
            </Form.Group>
            <Form.Group controlId='formDob'>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type='date'
                onChange={event => {
                  this.setState({ dob: this.target.value });
                }}
                placeholder='enter date of birth'
              />
            </Form.Group>
            <Button variant='primary' onClick={this.createRecord} type='submit'>
              Add
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default RestaurentCreate;
