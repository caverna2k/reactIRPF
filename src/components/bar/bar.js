import React from 'react';
import './styles.css';
import BaseBar from '../baseBar/BaseBar';

export default class Bar extends React.Component {
  constructor() {
    super();

    this.state = {
      bar1: 33,
      bar2: 33,
      bar3: 33,
    };
  }
  percLiq;
  render() {
    const { bar1, bar2, bar3 } = this.state;

    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BaseBar value={bar1} color="#e67e22" />
          <BaseBar value={bar2} color="#c0392b" />
          <BaseBar value={bar3} color="#16a085" />
        </div>
      </div>
    );
  }
}
