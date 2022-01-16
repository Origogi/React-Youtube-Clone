import "./App.css";
import SideNav from "./SideNav/SideNav";
import Searcher from "./Header/Searcher";
import Header from "./Header/Header";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <div className="App_header">
        <Header />
      </div>
      <div className="App_body">
        <div className="App_sidebar">
          <SideNav />
        </div>
        <div className="App_content">
          <Content />
        </div>
      </div>

    </div>
  );
}

export default App;
