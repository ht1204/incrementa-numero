import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    count: 0,

  }

  handleClick = () =>{
    const {count} = this.state
    this.setState({count: count + 1})
  }


  render() {
    const{count}=this.state

    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={this.handleClick}>Incrementa</button>
      </div>
    )
  }
}

export default App;
