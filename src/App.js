// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  fetchDb  from './firebase/fetchDb'
import  updateDb  from './firebase/updateDb'
import  signIn  from './firebase/auth'
import StudentSignUp from './components/StudentSignUp'
import OwnerSignUp from './components/OwnerSignUp';
import SignIn from './components/SignIn';
import reactDom from 'react-dom';
import StoresPageForStudent from './pages/StoresPageFOrUser/WatchStoresPage'
import ReservationPage from './pages/ReservationPage/ReservationPage'

// test

function App() {

  useEffect(() => {

    signIn({id:"student1", password:"sㅅ1"})
    
  }, [])
  
  return (  
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/SignUp/Owner" element={<OwnerSignUp />} />
        <Route exact path="/SignUp/Student" element={<StudentSignUp />}  />
        <Route exact path="/StoresPage" element={< StoresPageForStudent/>} />
        <Route exact path="/Reservation" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
