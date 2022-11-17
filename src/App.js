import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <br />
      <ChildArea isOpen={isOpen} onClickClose={onClickClose} />
    </div>
  );
}
