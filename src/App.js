import './App.css';
const doubleNum = x => 2 * x;

const App = () => {
  const technology = 'React';
  const today = new Date();
  let a = 7;
  let b = 9;
  // let x = doubleNum(a);
  // let y = doubleNum(b);
  const mystyle = { textShadow: '5px 5px 5px red', fontSize: 34, color: 'red' };
  const mystyle2 = { textShadow: '5px 5px 5px green', fontSize: 34, color: 'green' };
  return (
    <div>
      < h2>My First {technology} Program</h2>
      <p>This is my para</p>
      <p>{today.getFullYear()} Expression </p>
      <h3 style={(a + b) % 2 === 0 ? mystyle : mystyle2} id='before'>The sum of a and b before doubling is {a + b}</h3>
      <h3 className='result' id='after'>The sum of a and b after doubling is {doubleNum(a) + doubleNum(b)}</h3>
    </div>
  );
}

export default App;
