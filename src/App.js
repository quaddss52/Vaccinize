import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Features from './pages/Features';
import HelpCenter from './pages/HelpCenter';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/blog' element={<Blog/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/features' element={<Features/>}/>
        <Route path = '/help-center' element={<HelpCenter/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/signUp' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
