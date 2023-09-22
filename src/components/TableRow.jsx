import moment from "moment";

const TableRow = ({ d, popUp }) => {
  return (
    <>
      <tr
        onClick={() => {
          popUp(d.id);
        }}
        className="border-b border-b-green-400 cursor-pointer"
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
            <img className="" src="/icon/edit.png" alt="" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
