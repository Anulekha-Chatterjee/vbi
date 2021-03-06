import React from "react";
import axios from 'axios';
import { Input, Icon, Item, Container, ItemContent } from 'semantic-ui-react';
import '../App.css'

function Songs() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

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

  let filteredDatas = data.filter(content => { return content.title.indexOf(searchTerm) !== -1 })

  return (
    <Container>
      <h1>Songs</h1>
      <Icon name='search' />
      <Input
        type="text"
        placeholder="Search for songs..."
        onChange={e => handleChange(e)}
      />
      <Item.Group>
        {filteredDatas.map(item => (
          <Item key={item.objectID}>
            <ItemContent>
              <Item.Header as='a'>
                <Icon name='headphones' />
                Song Title: {item.title}</Item.Header>
              <Item.Meta> Singer: Singer{item.id} </Item.Meta>
              <Item.Meta> Album: Album {item.id} </Item.Meta> Playtime: {(
                (Math.random() * 6) + 1).toFixed(2)} mins
            </ItemContent>
          </Item>

        ))}
      </Item.Group>
    </Container>
  );
}

export default Songs;