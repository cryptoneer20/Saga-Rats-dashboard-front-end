
import {Route, Routes, BrowserRouter as Router, Navigate} from 'react-router-dom'

import Dashboard from "./pages/dashboard";

import './bootstrap.min.css';
import 'antd/dist/reset.css';
import './assets/style.scss'
import RefreshComponent from './pages/refresh';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path='/staking' element={<RefreshComponent location="https://staking.sagaratsalpha.xyz"/>} />
        </Routes>
      </Router>

  );
}

export default App;