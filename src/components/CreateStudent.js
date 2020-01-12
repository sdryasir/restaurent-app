import React, { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { reg_no: '', student_name: '', father_name: '', dob: '' };
  }
  createRecord = () => {
    fetch('http://localhost:3000/students', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      result.json().then(res => {
        console.warn(res);
      });
    });
  };
  render() {
    return (
      <div>
        <br />
        <Container>
          <Card style={{ width: '28rem' }}>
            <Card.Body>
              <Card.Title>New Student Information</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId='formBasicReg'>
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control
                      type='text'
                      onChange={event => {
                        this.setState({ reg_no: event.target.value });
                      }}
                      placeholder='enter registration no.'
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicName'>
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                      type='text'
                      onChange={event => {
                        this.setState({ student_name: event.target.value });
                      }}
                      placeholder='enter student name'
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicFather'>
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      type='text'
                      onChange={event => {
                        this.setState({ father_name: event.target.value });
                      }}
                      placeholder='enter father name'
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicDOB'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type='date'
                      onChange={event => {
                        this.setState({ dob: event.target.value });
                      }}
                      placeholder='enter date of birth'
                    />
                  </Form.Group>

                  <Button
                    variant='primary'
                    variant='primary'
                    onClick={this.createRecord}
                    type='button'>
                    Add Srudent
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default CreateStudent;
