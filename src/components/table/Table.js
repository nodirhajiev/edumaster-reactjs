import React from 'react';
import TableItem from "./TableItem";

function Table({tableList}) {

    const data = tableList;

    return (
        <div className="table">
            <div className="container">
                <div className="table__title"> </div>
                <table>
                    <thead>
                        <tr>
                            <td className="table__cell">
                                <span className="table__cell-text">кун ва вақти</span>
                            </td>
                            <td className="table__cell">
                                <span className="table__cell-text">ким олган</span>
                            </td>
                            <td className="table__cell">
                                <span className="table__cell-text"> китоб номи</span>
                            </td>
                            <td className="table__cell">
                                <span className="table__cell-text">сони</span>
                            </td>
                            <td className="table__cell">
                                <span className="table__cell-text">қанча пул ўтказган</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item =>{
                                return(
                                    <TableItem
                                        key={item.id}
                                        name={item.name}
                                        bookName={item.bookName}
                                        count={item.count}
                                        price={item.price}
                                        day={item.day}
                                        time={item.time}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;