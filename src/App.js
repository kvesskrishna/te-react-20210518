import './App.css';
import testImage from './images/783px-Test-Logo.svg.png';
import { Header2 as Heading2 } from './components/Header'
import Heading from './components/Header';
import TodoItem from './components/TodoItem';

const doubleNum = x => 2 * x;

const App = () => {
  const technology = 'React';
  const today = new Date();
  let a = 7;
  let b = 9;
  // let x = doubleNum(a);
  // let y = doubleNum(b);
  let showImage = false;
  const mystyle = { textShadow: '5px 5px 5px red', fontSize: 34, color: 'red' };
  const mystyle2 = { textShadow: '5px 5px 5px green', fontSize: 34, color: 'green' };
  const todoInfo = [{
    created: new Date(2020, 7, 2),
    target: new Date(2021, 8, 12),
    task: 'Buy Groceries',
    status: 'Not Started'
  },
  {
    created: new Date(2021, 5, 26),
    target: new Date(2021, 10, 12),
    task: 'Pay Insurance',
    status: 'In Progress'
  },
  {
    created: new Date(2021, 4, 20),
    target: new Date(2021, 8, 1),
    task: 'Reduce weight by 2 kg',
    status: 'Completed'
  },
  {
    created: new Date(2019, 1, 20),
    target: new Date(2020, 3, 1),
    task: 'Get a job',
    status: 'Completed'
  }]
  return (
    <div>
      <Heading></Heading>
      {/* < h2>My First {technology} Program</h2>
      <p>This is my para</p>
      <p>{today.getFullYear()} Expression </p>
      <h3 style={(a + b) % 2 === 0 ? mystyle : mystyle2} id='before'>The sum of a and b before doubling is {a + b}</h3>
      <h3 className='result' id='after'>The sum of a and b after doubling is {doubleNum(a) + doubleNum(b)}</h3>
      <img style={{ display: showImage ? 'block' : 'none' }} src={testImage} /> */}
      {/* <TodoItem info={todoInfo[0]}></TodoItem>
      <TodoItem info={todoInfo[1]}></TodoItem>
      <TodoItem info={todoInfo[2]}></TodoItem>
      <TodoItem info={todoInfo[3]}></TodoItem> */}
      {
        todoInfo.map((todo) => <TodoItem info={todo}></TodoItem>)
      }

    </div>
  );
}

export default App;
