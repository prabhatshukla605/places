import { useState } from "react";
import "./App.css";
import Location from "./components/Location";
import { Search } from "./components/Search";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  const fetchData = async (pin) => {
      const res = await fetch(`https://api.zippopotam.us/in/${pin}`);
      const data = await res.json();
      setIsLoaded(true);
      setItems(data);
      console.log(res);
      if(!res.ok){
        alert('An error occured!');
      }
  };

  return (
    <div className="app">
      <Search onSearch={fetchData} />
      {isLoaded && <Location data={items} />}
    </div>
  );
}

export default App;
