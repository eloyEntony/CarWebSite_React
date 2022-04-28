// import './App.css';
import './test.css';
import { Navigate, Outlet, Route, Routes } from 'react-router';

import DefaultLayout from './components/containers/default_layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}/>
      </Routes>
    </>
  );
}

export default App;
