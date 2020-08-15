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
    };
  }

  componentDidUpdate() {
    console.log('calc update');
    var {
      baseInss,
      desconto,
      baseIRPF,
      descontoIRPF,
      salarioLiquidi,
    } = this.state;
    console.log('calc log');
    console.log(this.props);
    var res = ccc(this.props.salario);
    console.log(res);
    var baseInss = formatNumber(res.baseINSS);
    var desconto = formatNumber(res.discountINSS);
    var baseIRPF = formatNumber(res.baseIRPF);
    var descontoIRPF = formatNumber(res.discountIRPF);
    var salarioLiquidi = formatNumber(
      res.baseINSS - (res.discountIRPF + res.discountINSS)
    );

    var percInss = res.discountINSS / this.props.salario;
    var percIrpf = res.discountIRPF / this.props.salario;
    var percLiq = salarioLiquidi / this.props.salario;

    this.setState({
      baseInss: baseInss,
      desconto: desconto,
      baseIRPF: baseIRPF,
      descontoIRPF: descontoIRPF,
      salarioLiquidi: salarioLiquidi,
    });
  }

  render() {
    var {
      baseInss,
      desconto,
      baseIRPF,
      descontoIRPF,
      salarioLiquidi,
    } = this.state;

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
          <input id="biss" type="text" value={baseInss} />
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
          <input id="diss" type="text" value={desconto} />
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
          <input id="birr" type="text" value={baseIRPF} />
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
          <input id="dirr" type="text" value={descontoIRPF} />
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
          <input id="dirr" type="text" value={salarioLiquidi} />
        </div>
      </div>
    );
  }
}
