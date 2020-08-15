import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = { salary: 0 };
  }
  render() {
    var salary = this.state;

    return (
      <div>
        <label>Salário Bruto</label>
        <input
          type="number"
          defaultValue={salary}
          onChange={this.handleSalarioChange}
        />
      </div>
    );
  }
  handleSalarioChange = (event) => {
    this.props.handleChange(event);
  };
}
