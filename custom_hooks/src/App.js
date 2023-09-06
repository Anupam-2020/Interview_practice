import './App.css';
import CheckOnline from './components/checkOnlineProject/CheckOnlieStatus';
import Increment from './components/counterProject/Increment';
import Decrement from './components/counterProject/Decrement';
import GithubUsers from './components/githubApiProject/GithubUsers';


function App() {
  return (
    <div className="App">
     <CheckOnline />
     <Increment />
     <Decrement />
     <GithubUsers />
    </div>
  );
}

export default App;
