

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoPage from "./Pages/NoPage";
// import Home from "./Pages/Home";
// import Blogs from './Pages/Blogs';
// import Contact from "./Pages/Contact";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
import Layout from "./Pages/Layout"
import DramerCom from "./Components/DramerCom";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="dramer" element={<DramerCom />} />
        {/* <Route path="home" element={<Home />} /> */}

        
           {/* <Route path="blogs" element={<Blogs />} /> */}

          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />  */}
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);