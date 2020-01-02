import React, { Component } from 'react';

class RestaurentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { reg_no: '', student_name: '', father_name: '', dob: '' };
  }
  componentDidMount() {
    fetch(
      'http://localhost:3000/restaurent/' + this.props.match.params.id
    ).then(response => {
      response.json().then(result => {
        this.setState({
          reg_no: result.reg_no,
          student_name: result.student_name,
          father_name: result.father_name,
          dob: result.dob
        });
      });
    });
  }
  render() {
    console.warn(this.props.match.params.id);
    return (
      <div>
        <h1>Update Restaurent</h1>
        <div>
          <input
            type='text'
            onChange={event => {
              this.setState({ reg_no: event.target.value });
            }}
            value={this.state.reg_no}
          />
          <br />
          <br />
          <input
            type='text'
            onChange={event => {
              this.setState({ student_name: event.target.value });
            }}
            value={this.state.student_name}
          />
          <br />
          <br />
          <input
            type='text'
            onChange={event => {
              this.setState({ father_name: event.target.value });
            }}
            value={this.state.father_name}
          />
          <br />
          <br />
          <input
            type='date'
            onChange={event => {
              this.setState({ dob: event.target.value });
            }}
            value={this.state.dob}
          />
          <br />
          <br />
          <input
            variant='primary'
            onClick={this.updateRecord}
            type='button'
            value='Update'
          />
        </div>
      </div>
    );
  }
}
export default RestaurentUpdate;
