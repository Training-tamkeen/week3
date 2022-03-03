import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/Home';
import Another from './components/Another';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { ContextProvider } from './context/auth';

function App() {
  return (
    <div className="App">      
      <Header/>
      
      <ContextProvider value={500}>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/another' element={<Another/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      </ContextProvider>
      
      <Footer />

    </div>
  );
}

export default App;
