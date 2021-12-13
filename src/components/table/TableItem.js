import React from 'react';
import CalendarIcon from "../../assets/images/calendar.svg"

function TableItem({name, bookName, count, price, day, time}) {
    return (
        <>
            <tr>
                <td className='table__cell table__dayCell'>
                    <span className="table__dayCell-icon"><img src={CalendarIcon} alt=""/></span>
                    <span className="table__cell-text table__dayCell-day">{day}</span>
                    <span className="table__dayCell-time">{time}</span>
                </td>
                <td className='table__cell table__nameCell'>
                    <span className="table__cell-text table__nameCell-text">{name}</span>
                </td>
                <td className='table__cell table__bookNameCell'>
                    <span className="table__cell-text table__bookNameCell-text">{bookName}</span>
                </td>
                <td className='table__cell table__countCell'>
                    <span className="table__cell-text table__countCell-text">{count}</span>
                </td>
                <td className='table__cell table__priceCell'>
                    <span className="table__cell-text table__priceCell-text">{new Intl.NumberFormat("decimal").format(price)} сум</span>
                </td>
            </tr>
        </>
    );
}

export default TableItem;