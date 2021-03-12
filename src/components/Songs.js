import React from "react";
import axios from 'axios';
import '../App.css'

function Songs() {
    const [data, setData] = React.useState([] );
 
    React.useEffect( ()=>{
        const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/albums',
      );
      console.log (result.data)
      setData(result.data);
        };
        fetchData();
    }, []);
  return (
         <div>
         {data.map(item => (
        <ul key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </ul>
      ))}
    </div>
  );
}

export default Songs;