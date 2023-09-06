import './App.css';
import CheckOnline from './components/checkOnlineProject/CheckOnlieStatus';
import Increment from './components/counterProject/Increment';
import Decrement from './components/counterProject/Decrement';


function App() {
  return (
    <div className="App">
     <CheckOnline />
     <Increment />
     <Decrement />
    </div>
  );
}

export default App;
