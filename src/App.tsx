import * as React from 'react';
import { Home, Questions, Results, Processing } from './screens';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/results" element={<Results />} />
      <Route path="/processing" element={<Processing />} />
    </Routes>
  );
}

export default App;

