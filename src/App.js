import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Fotter from './components/Fotter';
import Video from './components/Video';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/video' element={<Video/>}/> 
      <Route path='/upload' element={<Upload/>}/> 
      <Route path='/signup' element={<Signup/>}/> 
      <Route path='/login' element={<Login/>}/> 

    </Routes>
    <Fotter/>
  </Router>
}

export default App;
