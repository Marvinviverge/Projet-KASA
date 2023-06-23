// import logo from '@/logo.svg';
import '@/Assets/Css/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
