import { useState } from "react";
import TableRow from "./TableRow";
const Table = ({ data, personData }) => {
  const [personInfo, setPersonInfo] = useState();
  const popUp = (id) => {
    const person = personData.find((p) => p?.purchase_id === id);
    console.log(person);
    setPersonInfo(person);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead className="font-semibold text-black">
          <tr>
            <th>Date</th>
            <th>ID</th>
            <th>Name</th>
            <th>Variant</th>
            <th>Unit</th>
            <th>
              <div>Demand</div>
              <div className="text-xm text-green-400">Received</div>
            </th>
            <th>
              <div>Min-Price</div>
              <div className="text-xm text-green-400">Per Unit</div>
            </th>
            <th>
              <div>Max-Price</div>
              <div className="text-xm text-green-400">Per Unit</div>
            </th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <TableRow
              key={d.id}
              d={d}
              popUp={popUp}
              personInfo={personInfo}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
