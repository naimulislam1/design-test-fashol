import { useState } from "react";
import Table from "./components/table";
import { useEffect } from "react";
import TableTop from "./components/TableTop";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto mt-10">
        <TableTop></TableTop>
        <Table data={data}></Table>
      </div>
    </>
  );
}

export default App;
