import React, { Component } from 'react';

class RestaurentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { reg_no: '', student_name: '', father_name: '', dob: '' };
  }
  createRecord = () => {
    console.warn(this.state);
  };
  render() {
    return (
      <div>
        <p>Reg:{this.state.reg_no}</p>
        <p>Name:{this.state.student_name}</p>
        <p>Father Name:{this.state.father_name}</p>
        <p>Date of Birth:{this.state.dob}</p>
        <input
          type='text'
          onChange={event => {
            this.setState({ reg_no: event.target.value });
          }}
          placeholder='enter registration no.'
        />

        <input
          type='text'
          onChange={event => {
            this.setState({ student_name: event.target.value });
          }}
          placeholder='enter student name'
        />
        <input
          type='text'
          onChange={event => {
            this.setState({ father_name: event.target.value });
          }}
          placeholder='enter father name'
        />

        <input
          type='date'
          onChange={event => {
            this.setState({ dob: event.target.value });
          }}
          placeholder='enter date of birth'
        />

        <input
          variant='primary'
          onClick={this.createRecord}
          type='button'
          value='Add'
        />
      </div>
    );
  }
}
export default RestaurentCreate;
