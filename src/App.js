import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - l</h1>
        <h2>React JS Programming Week09 Lab Excersise</h2>
        <Student studentId ="101311327" name="Angela Efremova" school="George Brown College, Toronto" />
      </header>
    </div>
  );
}

export default App;
