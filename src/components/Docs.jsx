import Header from "./Header";
import StatCard from "./StatCard";
import Controls from "./Controls"; 

export default function Docs({ read, bookmarks, handleRead, handleBookmark, handleReset }) {
  return (
    <div className="flex items-end justify-between px-20 pt-10">
      <div>
        <Header />
        
        
        <Controls 
          handleRead={handleRead} 
          handleBookmark={handleBookmark} 
          handleReset={handleReset} 
        />

      </div>
      <div className="flex gap-6">
        <StatCard value={read} label="Marked as read" />
        <StatCard value={bookmarks} label="Bookmarks" />
      </div>
    </div>
  );
}