import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("name", "John");
  const [subject, setSubject] = useLocalStorage("subject", "React Hooks");
  return (
    <div className="App">
      <h1>Welcome, {name}</h1>
      <p>Continue learning {subject}</p>

      <label>Your Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Current Subject:</label>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} />
    </div>
  );
};

export default App;
