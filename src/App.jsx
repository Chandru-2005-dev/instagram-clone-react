import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Suggestion from "./Suggestion";

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar-area">
        <SideBar />
      </aside>

      <main className="feed-area">
        <Feed />
      </main>

      <aside className="suggestion-area">
        <Suggestion />
      </aside>
    </div>
  );
}

export default App;
