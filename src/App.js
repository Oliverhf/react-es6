import logo from './logo.svg';
import './App.css';

// React ES6 Modules

// You can export in-line individually:

  // export const name = "Oliver"
  // export const age = "23"

  const name = "Oliver"
  const age = "23"




function App() {

  // Destructuring Arrays

  function calculate(a,b) {
    const add =  a + b
    const subtract = a - b
    const multiply = a * b
    const divide = a / b

    return [add, subtract, multiply, divide]
  }

  const [add, subtract,, divide] = calculate(5,5)

  // When desctructuring arrays, the order that variables are declared is important:
  const [,,multiply,] = calculate(2,2)


  // Desctructuring Objects

  const vehicleOne = {
    brand: 'Honda',
    model: 'Civic',
    type:  'Car',
    year: 2021,
    color: 'black',
    registration: {
      city: 'Trusville',
      state: 'Alabama',
      country: 'USA'
    } 
  }

  function myVeichle({registration: {city, state}}) {
    return 'Your car is registered in ' + city + ' city of ' + state
  }

  const message = myVeichle(vehicleOne)

  // Spread Operator (Arrays)

  const numbers = [1, 2, 3, 4, 5, 6]

  const [one, two, ...rest] = numbers








  return (
    <div className="App">
      <header className="App-header">
        <strong>Desctructuring Objects</strong>
        <h1>{message}</h1>
        <div>
          <h2>Desctructuring Arrays</h2>
          <ul>
            <li>{add}</li>
            <li>{subtract}</li>
            <li><strong>When desctructuring arrays, the order that variables are declared is important: </strong>{multiply}</li>
            <li>{divide}</li> 
          </ul>
        </div>
        <div>
          <h2>Spread Operators</h2>
          <div>
            <p>{one}</p>
            <p>{two}</p>
            <p>Rest of the numbers: {rest}</p>
          </div>
        </div>
      </header>
    </div>
  );
}


// Or All at once at the bottom:


export 
      {
        name, 
        age
      }

export default App;
