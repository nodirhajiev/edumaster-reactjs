import React from 'react';
import CalendarIcon from "../icons/CalendarIcon";

function TableItem({name,bookName, count, price, day,time}) {
    return (
        <>
            <tr>
                <td className="table__cell table__dayCell">
                    <span className="table__dayCell-icon"><CalendarIcon/></span>
                    <span className="table__cell-text table__dayCell-day">{day}</span>
                    <span className="table__cell-text table__dayCell-time">{time}</span>
                </td>
                <td className="table__cell table__nameCell">
                    <span className="table__cell-text table__nameCell-text">{name}</span>
                </td>
                <td className="table__cell table_bookNameCell">
                    <span className="table__cell-text table__bookNameCell-text">{bookName}</span>
                </td>
                <td className="table__cell table_countCell">
                    <span className="table__cell-text table_countCell-text">{count}</span>
                </td>
                <td className="table__cell table_priceCell">
                    <span className="table__cell-text table_priceCell-text">{new Intl.NumberFormat('decimal').format(price)} сум</span>
                </td>
            </tr>
        </>
    );
}

export default TableItem;