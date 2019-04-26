import React from 'react';
// const cowsay = require('cowsay');
import cowsay from 'cowsay-browser';
import faker from 'faker';

export default class App extends React.Component {
  constructor(props){//props=html attr
    super();//using react.components constructor
    this.state ={};
    this.state.content = 'click it!';
  }
  handleButtonClick = () => {
    this.setState((PS)=>{
      let name = faker.name.findName();
      let numba = faker.phone.phoneNumber();
      return{
        content: `Call ${name} @ ${numba}`
      };
    });
  };

  render(){
    return(<main>
      <h1>Cow Say Lorem</h1>
      <pre>
        {
          cowsay.say({
            text : `${this.state.content}`,
            e : "oO",
            T : "U "
          })
        }
      </pre>
      <button onClick={this.handleButtonClick}>click me!</button>
    </main>);
  };
}

//export default App;
