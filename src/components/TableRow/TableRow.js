import React from 'react';
import './TableRow.css';

const TableRow = (result) => {
    return(
        <tr>
            <td>{result.ip}</td>
            <td>{result.infoIp.city}, {result.infoIp.country}</td>
            <td>{result.infoIp.org}</td>
            <td>{result.infoIp.regionName}</td>
            <td>{result.reasons[0].reason}</td>
            <td>{result.reasons[0].count}</td>
            <td>{result.time}</td>
        </tr>
    );
};






export default TableRow;
