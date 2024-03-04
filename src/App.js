
import Footer from "./Components.js/Footer";
import Header from "./Components.js/Header";
import MainContent from "./Components.js/MainContent";

function App() {
  return (
      <div className="text-letter-light bg-white rounded-b-lg px-6 ring-1 ring-slate-900/5 shadow-xl dark:bg-custom-dark dark:text-white dark:ring-white min-h-screen">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
  );
}

export default App;
