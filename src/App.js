import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/layouts/Footer';
import Home from './component/HomePage/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
