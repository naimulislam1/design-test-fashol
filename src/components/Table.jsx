import moment from "moment";
const Table = ({ data }) => {
  const popUp = (id) => {
    console.log("Loading", id);
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
          {data?.map((d, i) => (
            <tr
              onClick={() => popUp(d.id)}
              key={i}
              className="border-b border-b-green-400"
            >
              <td>{moment(d.date).format("D MMM, YYYY")}</td>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.variant}</td>
              <td>{d.unit}</td>
              <td>{d.demand}</td>
              <td>{d.min_price}</td>
              <td>{d.max_price}</td>
              <td>
                <button>
                  <img className="" src="../../public/icon/edit.png" alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
