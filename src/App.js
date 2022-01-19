import "./App.css";
import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";
import TagContainer from "./Content/TagContainer";
import VideoContainer from "./Content/VideoContainer";

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
          <TagContainer />
          <VideoContainer />
        </div>
      </div>

    </div>
  );
}

export default App;
