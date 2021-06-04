import './App.css';
// import testImage from './images/783px-Test-Logo.svg.png';
// import { Header2 as Heading2 } from './components/Header'
import Heading from './components/Header';
// import TodoItem from './components/TodoItem';
// import tasks from './data/tasks';
// import BasicCalc from './components/BasicCalc'
// import Parent from './components/Parent'
// import Child2 from './components/Child2'
// import ChildrenDemo from './components/ChildrenDemo'
import LifeCycleMethods from './components/LifeCycleMethods';
import ErrorBoundary from './components/ErrorBoundary'
import ReactForms, { ReactFormsWithRef } from './components/ReactForms'
// const doubleNum = x => 2 * x;

// const App = () => {
//   const technology = 'React';
//   const today = new Date();
//   let a = 7;
//   let b = 9;
//   // let x = doubleNum(a);
//   // let y = doubleNum(b);
//   let showImage = false;
//   const mystyle = { textShadow: '5px 5px 5px red', fontSize: 34, color: 'red' };
//   const mystyle2 = { textShadow: '5px 5px 5px green', fontSize: 34, color: 'green' };
//   const todoInfo = tasks;
//   let lcmstyle = { display: 'block' }
//   const removeLCM = () => {
//     lcmstyle = { display: 'none' };
//     console.log(lcmstyle)
//   }
//   return (
//     <div>
//       <Heading></Heading>
//       <button onClick={removeLCM}>remove LifeCycleMethods component</button>

//       {/* <ChildrenDemo></ChildrenDemo> */}
//       {/* <Parent>
//         <Child2 />
//       </Parent> */}
//       {/* <BasicCalc></BasicCalc> */}
//       {/* < h2>My First {technology} Program</h2>
//       <p>This is my para</p>
//       <p>{today.getFullYear()} Expression </p>
//       <h3 style={(a + b) % 2 === 0 ? mystyle : mystyle2} id='before'>The sum of a and b before doubling is {a + b}</h3>
//       <h3 className='result' id='after'>The sum of a and b after doubling is {doubleNum(a) + doubleNum(b)}</h3>
//       <img style={{ display: showImage ? 'block' : 'none' }} src={testImage} /> */}
//       {/* <TodoItem info={todoInfo[0]}></TodoItem>
//       <TodoItem info={todoInfo[1]}></TodoItem>
//       <TodoItem info={todoInfo[2]}></TodoItem>
//       <TodoItem info={todoInfo[3]}></TodoItem> */}
//       {
//         // todoInfo.map((todo) => <TodoItem key={todo.task} info={todo}></TodoItem>)
//       }

//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import ReduxPractice from './components/ReduxPractice'
import ErrorMessage from './components/ErrorMessage'
export default class App extends Component {
  state = {
    lcmstyle: { display: 'block' }
  }
  removeLCM = () => {
    let newstyle = { display: 'none' }
    this.setState({ lcmstyle: { newstyle }, lcmstyle1: '0' })
    console.log(this.state1)
  }
  render() {
    return (
      <div>
        <Heading></Heading>
        <ReactForms></ReactForms>
        <ReactFormsWithRef></ReactFormsWithRef>
        {/* <ReduxPractice />
        <button onClick={this.removeLCM}>remove LifeCycleMethods component</button>


        <div style={this.state.lcmstyle}>
          <ErrorBoundary FallbackComponent={ErrorMessage}>

            <LifeCycleMethods data='test data'></LifeCycleMethods>
          </ErrorBoundary>
        </div> */}
      </div>
    )
  }
}
