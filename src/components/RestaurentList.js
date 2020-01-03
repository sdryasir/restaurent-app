import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/restaurent').then(response => {
      response.json().then(result => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    console.warn(this.state.list);
    return (
      <div>
        <h1>Show All Restaurents</h1>
        <Container>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Reg#</th>
                <th>Student Name</th>
                <th>Father Name</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list ? (
                this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.reg_no}</td>
                    <td>{item.student_name}</td>
                    <td>{item.father_name}</td>
                    <td>{item.dob}</td>
                    <td>
                      <Link to={'/RestaurentUpdate/' + item.id}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>{' '}
                      |{' '}
                      <Link to={'/RestaurentDelete/' + item.id}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='4'>Loading...</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default RestaurentList;
