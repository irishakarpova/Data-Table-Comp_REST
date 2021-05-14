import React from "react";
import TableData from "./components/tableDataSet";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <TableData />
    </div>
  );
}

export default App;
