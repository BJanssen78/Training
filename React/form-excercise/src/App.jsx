import { useState } from "react";
function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [nameAutor, setNameAutor] = useState("");

  const addQuote = (e) => {
    e.preventDefault();
    setQuotes([{ quote: quote, name: nameAutor }]);
    setNameAutor("");
    setQuote("");
    console.log(quotes);
  };

  return (
    <div className="App">
      <h1>Our beautiful form will be here:</h1>
      <form>
        <textarea
          value={quote}
          style={{ width: "50vw", height: "50px" }}
          onChange={(eQ) => setQuote(eQ.target.value)}
        />
        <input
          type="text"
          value={nameAutor}
          placeholder="name of the one who said this quote"
          style={{ width: "250px", height: "25px" }}
          onChange={(eN) => setNameAutor(eN.target.value)}
        />
        <button
          onClick={(e) => addQuote(e)}
          type="submit"
          style={{
            backgroundColor: "limegreen",
            boxShadow: "1px 1px black",
          }}
        >
          Add quote
        </button>
      </form>

      <h1>Quotes:</h1>
      <div className="quote">
        {quote !== "" ? <p>{quote}</p> : <p>No new quotes yet</p>}
        {nameAutor !== "" ? (
          <span>{nameAutor}</span>
        ) : (
          <span>No new author yet</span>
        )}
        <p>
          My biggest fear is that people will attribute fake quotes to me and
          millions of morons on the internet will believe it.
        </p>
        - <span>Albert Einstein</span>
      </div>
    </div>
  );
}

export default App;
