import { useState } from "react";
import "./App.css";

import { Select } from "./Select/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  return (
    <div>
      <Select options={options} />
    </div>
  );
}

export default App;
