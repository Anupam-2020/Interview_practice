import './App.css';
import UserDashboard from './components/useContextHook/UserDashboard';
import Users from './components/useMemoHook/Users';

function App() {
  return (
    <div className="App">
      <UserDashboard />
      {/* <Users /> */}
    </div>
  );
}

export default App;
