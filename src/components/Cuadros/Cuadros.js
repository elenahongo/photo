import React from 'react';

export class Cuadros extends React.Component {
  render() {
    return (
      <div>
        <img className="frames" src={this.props.src} alt='coolFrame'/>
      </div>
    );
  }
}