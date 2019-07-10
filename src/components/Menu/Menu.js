import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.newSrc = this.newSrc.bind(this);
  }
  
  newSrc(e) {
    let source = e.target.value;
    this.props.onChange(source)
  }
  
  render() {
    return (
      <form onChange={this.newSrc}>
        <input type="radio" name="src" value="black" /> black
        <input type="radio" name="src" value="white" /> white
        <input type="radio" name="src" value="brown" /> brown
        <input type="radio" name="src" value="natural" /> natural
      </form>
    );
  }
}