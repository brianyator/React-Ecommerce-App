import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/auth" />
        <Route path="/checkout" />
      </Routes>
    </div>
  );
}

export default App;
