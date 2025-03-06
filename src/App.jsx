
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
// import Llayout from './compoments/Layout/Llayout';



// const App = () => {
//   return (
//     <Router>
//       <h1>Restaurant</h1>
//     <Routes>
//       <Route path="/" element={<Llayout/>} />
     
//     </Routes>
   
    
//   </Router>
    
//   )
// }

// export default App

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Llayout from "./compoments/Layout/Llayout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Llayout />}>
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
