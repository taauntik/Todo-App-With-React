import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code fires here... when the app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().text));
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();

    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
