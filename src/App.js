import React, { Component } from 'react';
import QuizzGameContainer from './components/QuizzGame/QuizzGameContainer'


class App extends Component {

  state = {
    gameStarted: false
  }

  handleClick = () => {
    this.setState({
      gameStarted: true
    })
  }


  render() {
    return (
      // <Navbar />
      // <Sidebar />
      <div>
        {this.state.gameStarted ?
          (<QuizzGameContainer />) :
          (<button onClick={this.handleClick}>Start</button>)}
      </div>
    )
  }
}


export default App;
