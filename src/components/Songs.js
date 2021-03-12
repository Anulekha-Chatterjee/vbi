import React from "react";
import axios from 'axios';
import '../App.css'

function Songs() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/albums',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
      <div class="grid">
              <input
        type="text"
        placeholder="Search"

      />
        {data.map(item => (
          <ul key={item.objectID}>
          <p> Song Title: Song {item.id} </p>
          <p> Singer: Singer {item.id} </p>
          <p> Album: {item.title} </p> Playtime: {(
          (Math.random() * 6) + 1).toFixed(2) } mins 
          </ul>
        ))}
    </div>
  );
}

export default Songs;