import React from 'react';
import { calculateSalaryFrom as ccc } from './salary';
import { formatNumber, formatNumberPerc } from './formatter';
export default class Calc extends React.Component {
  constructor() {
    super();

    this.state = {
      baseInss: 0,
      desconto: 0,
      baseIRPF: 0,
      descontoIRPF: 0,
      salarioLiquidi: 0,
      percInss: 0,
      descontoIRPF: 0,
      salarioLiquidi: 0,
    };
  }

  componentDidMount() {
    console.log('calc mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('calc update');
    var {
      baseInss,
      desconto,
      baseIRPF,
      descontoIRPF,
      salarioLiquidi,
      percInss,
      percIrpf,
      percLiq,
    } = this.state;
    console.log('calc log');
    console.log(this.props);
    console.log('xxxx:' + this.props.salario);
    var res = ccc(this.props.salario);
    console.log(res);
    var baseInss = formatNumber(res.baseINSS);
    var desconto = formatNumber(res.discountINSS);
    var baseIRPF = formatNumber(res.baseIRPF);
    var descontoIRPF = formatNumber(res.discountIRPF);
    var salarioLiquidi = formatNumber(res.netSalary);

    percInss = res.discountINSS / this.props.salario;
    percIrpf = res.discountIRPF / this.props.salario;
    percLiq = res.netSalary / this.props.salario;

    this.state.baseInss = baseInss;
    this.state.desconto = desconto;
    this.state.baseIRPF = baseIRPF;
    this.state.descontoIRPF = descontoIRPF;
    this.state.salarioLiquidi = salarioLiquidi;
    this.state.percInss = res.discountINSS / res.baseINSS;
    this.state.percIrpf = res.discountIRPF / res.baseIRPF;
    this.state.percLiq = res.netSalary / res.baseIRPF;
    console.log(this.state);
    console.log(this.props);
  }

  componentDidCatch() {
    console.log('catch');
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label for="biss">Base INSS</label>
          <input id="biss" type="text" value={this.state.baseInss} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label for="diss">Desconto INSS</label>
          <input id="diss" type="text" value={this.state.desconto} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label for="birr">Base IRPF</label>
          <input id="birr" type="text" value={this.state.baseIRPF} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label for="dirr">Desconto IRPF</label>
          <input id="dirr" type="text" value={this.state.descontoIRPF} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label for="dirr">Salário Liquido</label>
          <input id="dirr" type="text" value={this.state.salarioLiquidi} />
        </div>
      </div>
    );
  }
}
