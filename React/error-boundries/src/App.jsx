import "./App.css";
import { ComponentThatErrors } from "./ComponentThatErrors";
import { ErrorBoundery } from "./ErrorBoundery";

export default function App() {
  return (
    <div className="App">
      <h1>Error Boundary Exercise</h1>
      <ErrorBoundery>
        <ComponentThatErrors />
      </ErrorBoundery>
    </div>
  );
}
