import { useState } from "react";
import fetchData from "./UseFetch";
import TableRows from "./TableRows";


function TableBox() {

    const data = fetchData("https://api.coincap.io/v2/assets");
    const [rows, setRows] = useState(50);

    function loadMore(){
        if(rows<data.data.length){
            setRows(rows+50);
        }
    }


    if (!data) return <div></div>;
    return (
        <>
        <table>
           
            <thead className="thead">
            <tr className="center">
                <th className="center">Rank  </th>
                <th className="namehead"> Name  </th>
                <th className="coinValue">Price  </th>
                <th className="coinValue">Market Cap  </th>
                <th className="coinValue">VWAP (24Hr) </th>
                <th className="coinValue">Supply  </th>
                <th className="coinValue">Volume (24Hr) </th>
                <th className="coinValue">Change (24Hr) </th>
            </tr>
        </thead>
            <tbody className="Content">
                {
                    data.data.slice(0, rows).map((item,index) => (
                        <TableRows item={item} index={index} />
                    ))
                }
            </tbody>
        </table>
        <div></div>
        <button id="loadMore" onClick={loadMore}>Load More</button>
        </>
    );
}
export default TableBox;