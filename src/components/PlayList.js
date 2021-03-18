import React from "react";
import { Container, Button, Card, Modal, Header, Form } from 'semantic-ui-react';
import moment from 'moment';
import PlayListDetails from "./PlayListDetails";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function PlayList() {

  const [list, setList] = React.useState([]);
  const [pname, setPName] = React.useState('');
  const [open, setOpen] = React.useState(false)

  const handlePlayListAdd = (event) => {
    setPName(event.target.value);
  }

  const handleAdd = () => {
    setOpen (false)
    var newList = [];
    newList = list.concat({ playlist: pname,
      currentTime:  moment().format()
     });
    console.log (newList)
    setList(newList);
  }

  return (
    <Container>
      <h1>PlayList</h1>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Create Playlist</Button>}
    >
       <Modal.Header>Create a PlayList</Modal.Header>

        <Modal.Description>
          <AddItem
        playListName={pname}
        onPChange = {handlePlayListAdd}
      />
        </Modal.Description>

      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Add"
          labelPosition='right'
          icon='checkmark'
          onClick={handleAdd}
          positive
        />
      </Modal.Actions>
    </Modal>

      <List list={list} />
    </Container>
  );
}

const AddItem = ({ playListName, onPChange }) => (
   <Form>
    <Form.Field>
      <input placeholder='Playlist Name' value = {playListName} onChange={onPChange}/>
    </Form.Field>
  </Form>
);

const List = ({ list }) => (
  <div>
    {list.map((item) => (
      <Router>
    <Link to={`/${item.playlist}`}> <table key={item.id}> <th>{item.playlist}</th> <th>{item.currentTime}</th></table> </Link> 
    <Route path = {`/${item.playlist}`} component = {PlayListDetails}>
    </Route>
    </Router>
    ))}
</div>
);

export default PlayList;