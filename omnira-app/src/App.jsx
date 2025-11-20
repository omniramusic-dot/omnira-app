import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Header />
          <div className='p-6 text-white'>Omnira App Base Structure Ready</div>
        </div>
      </div>
    </BrowserRouter>
  );
}