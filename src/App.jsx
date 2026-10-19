import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Docs from "./components/Docs";
import Guide from "./components/Guide";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      
      <Sidebar author="John Chardy Q. Crayo" />

      <Docs 
        read={read} 
        bookmarks={bookmarks} 
        handleRead={handleRead} 
        handleBookmark={handleBookmark} 
        handleReset={handleReset} 
      />
      
      <Guide />

    </div>
  );
}

export default App;