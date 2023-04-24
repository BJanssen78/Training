import "./App.css";

function App() {
  const greeting = () => {
    <header>
      <h1>Welcome to my cool new app!</h1>
    </header>;
  };
  const description = <p>This app is going to change your life.</p>;

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <p>{greeting}</p>
      {description}
    </div>
  );
}

export default App;
