import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import React,{Component} from 'react';
export default class App extends Component {
  constructor(props){
      super(props)
      this.state={
        childCount:1
      };
      this.changeFromChild=this.changeFromChild.bind(this)
  }
  changeFromChild(count){
    this.setState(
      {
        childCount:count
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.childCount}</h3>
        <Counter changeParentCount={this.changeFromChild} step={3} title="计数器" />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Counter step={3} title="计数器" />
//       {/* <header className="App-header">
//         <h1>hello react!</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
