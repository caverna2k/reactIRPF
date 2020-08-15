import React, { Component } from 'react';
import Input from './components/Input/Input';
import Bar from './components/bar/bar';
import Calc from './components/calculoIRPF/calc';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: 0,
      percInss: 0,
      percIrpf: 0,
      percLiq: 0,
    };
  }

  componentDidMount() {
    console.log('mount');
  }

  componentDidUpdate() {
    console.log('app update');
  }

  handleSalarioChange = (event) => {
    var newVal = event.target.value;
    this.setState({
      salary: newVal,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Input
          salario={this.state.salary}
          handleChange={this.handleSalarioChange}
        />
        <Calc
          salario={this.state.salary}
          percInss={this.state.percInss}
          percIrpf={this.state.percIrpf}
          percLiq={this.state.percLiq}
        />
        <Bar
          percInss={this.state.percInss}
          percIrpf={this.state.percIrpf}
          percLiq={this.state.percLiq}
        />
      </div>
    );
  }
}
