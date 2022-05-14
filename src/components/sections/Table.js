import { useState } from "react";
import mockdata from "../../data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import React from "react";


const Table = () => {
  const [tableData, setTableData] = useState(mockdata);

  const columns = [
    { label: "Vozač", accessor: "full_name", sortable: false },
    { label: "Tim", accessor: "team", sortable: false },
    { label: "Pobjede", accessor: "wins", sortable: false },
    { label: "Podiji", accessor: "podiums", sortable: false },
    { label: "Bodovi", accessor: "points", sortable: true },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
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
         <h3>Poredak vozača</h3> 
         
        </caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
      
    </>
  );
};

export default Table;
