import { useState } from "react";
import "./App.css";
import DateCounter from "./components/DateCounter";
import FlipCards from "./components/FlipCards";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleStats() {
    setItems((items) => [...items, items]);
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={clearList}
      />
      <Stats items={items} setItems={setItems} onHandleStats={handleStats} />

      <FlipCards />
      <DateCounter />
    </div>
  );
}

export default App;
