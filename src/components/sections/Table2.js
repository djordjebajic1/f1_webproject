import { useState } from "react";
import mockdata from "../../data1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import React from "react";


const Table = () => {
  const [tableData, setTableData] = useState(mockdata);

  const columns = [
    { label: "Tim", accessor: "team", sortable: false },
    { label: "Pobjede", accessor: "wins", sortable: false },
    { label: "Podiji", accessor: "podiums", sortable: false },
    { label: "Bodovi", accessor: "points", sortable: true },
   
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a.points>b.points) return -1;
        if (a.points<b.points) return 1;
        if (a.points === null && b.points === null) return 0;
        return (
          a.points.toString().localeCompare(b.points.toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };


  return (
    <>
      <table className="table">
        <caption>
        <h3>Poredak konstruktora</h3> 
        </caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;