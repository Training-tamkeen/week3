import Discover from "./Discover";
import Table from "./Table";
import Form from "./Form";
import { useEffect, useState } from "react";

function Home() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => {
    setText("Text on page first load");
  }, []);

  return (
    <div>
      <Discover />
      <div id="discover">
        <h2>{text}</h2>
        <button id="showText" onClick={() => show?setShow(false):setShow(true)}>
          {show?<p>Hide text</p>:<p>Show text</p>}
        </button>
        {show ? <p>I'm hidden Text ..</p> : <></>}
      </div>
      <Table />
      <Form />
    </div>
  );
}

export default Home;
