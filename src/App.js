import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user =useSelector(state => state.user)

  // const loginHandler = () => {
  //   alert()
  // }
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default App;
