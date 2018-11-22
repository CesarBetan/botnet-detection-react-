import React from 'react';
import './TableRow.css';

const TableRow = (result) => {
    return(
        <tr>
            <td>{result.ip}</td>
            <td>{result.infoIp.city}, {result.infoIp.country}</td>
            <td>{result.infoIp.organization}</td>
            <td>{result.infoIp.regionName}</td>
            <td>
                {
                    result.reasons.map(r =>
                        (
                            <p>{r.reason}</p>
                        )
                    )
                }
            </td>
            <td>
                {
                    result.reasons.map(r =>
                        (
                            <p>{r.count}</p>
                        )
                    )
                }
            </td>
            <td>{result.time}</td>
        </tr>
    );
};






export default TableRow;
