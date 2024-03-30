
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import Footer from "./Components.js/Footer";
import Header from "./Components.js/Header";
import MainContent from "./Components.js/MainContent";
import { ProjectDetails } from "./screens/ProjectDetails";

function App() {
  return (
      <Router>
        <div className="text-letter-light bg-white rounded-b-lg px-6 ring-1 ring-slate-900/5 shadow-xl dark:bg-custom-dark dark:text-white dark:ring-white min-h-screen">
         
          <Header/>
          
          <Routes>
  
              <Route path="/" element={ <MainContent/> }/>

              <Route path="/project/:id" element={ <ProjectDetails/> }/>

          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
