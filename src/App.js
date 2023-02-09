import './App.css';
import TestRouter from './sandBox/TestRouter';

export default function App() {
  console.log(process.env);
  return (
    <div className="App">
      {/* <p>MOVIES PROJECT</p> */}
      <TestRouter />
      {/* {process.env.REACT_APP_API_KEY} */}
    </div>
  );
}
