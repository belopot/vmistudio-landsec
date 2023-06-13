import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './dataset/routes';
import ThemeProvider from './theme';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
