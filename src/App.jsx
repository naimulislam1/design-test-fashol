import { useState } from "react";
import Table from "./components/table";
import { useEffect } from "react";
import TableTopSec from "./components/TableTopSec";

function App() {
  const [data, setData] = useState([]);
  const [personData, setPersonData] = useState([]);
  // table data
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // person data
  useEffect(() => {
    fetch("persondata.json")
      .then((res) => res.json())
      .then((data) => setPersonData(data));
  }, []);
  return (
    <>
      <div className="w-11/12 mx-auto mt-10">
        <TableTopSec></TableTopSec>
        <Table data={data} personData={personData}></Table>
      </div>
    </>
  );
}

export default App;
