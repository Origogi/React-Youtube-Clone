import "./App.css";
import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";
import TagContainer from "./Content/TagContainer";
import VideoContentsContainer from "./Content/VideoContentsContainer";

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
          <VideoContentsContainer />
        </div>
      </div>

    </div>
  );
}

export default App;
