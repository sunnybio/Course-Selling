import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Signin from './components/SignIn';
import LandingPage from './components/LadingPage';
import Courses from './components/Courses';
function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/courses' element={<Courses />} />


        </Routes>
      </Router>

    </>
  )
}

export default App
