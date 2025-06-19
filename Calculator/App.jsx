import React from 'react';
import ThemeProvider from './Context/ThemeContext';
import Main from './Main';



const App = () => {
 
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
};

export default App;
