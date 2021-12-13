import React from 'react';
import TableItem from "./TableItem";

function Table(props) {
    const data = [
        {
            id: 1,
            name: 'Ази*******  *****лиев',
            bookName: 'Устоз ва Шшогирд',
            count: 1,
            price: 75000,
            day: '24 Май 2021',
            time: '12:15',
        },
        {
            id: 2,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 2,
            price: 150000,
            day: '24 Май 2021',
            time: '12:29',
        },
        {
            id: 3,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 4,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 5,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 6,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 7,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 8,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 9,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        },
        {
            id: 10,
            name: 'Ази*******  *****лиев',
            bookName: 'Молиявий бошкарув',
            count: 4,
            price: 75000,
            day: '24 Май 2021',
            time: '12:05',
        }
    ]
    return (
        <div className='table'>
            <div className="container">
                <div className="table__title"></div>
                <table>
                    <thead>
                        <tr>
                            <td className='table__cell'>
                                <span className="table__cel-text table__cell-text">кун ва вакти</span>
                            </td>
                            <td className='table__cell'>
                                <span className="table__cel-text table__cell-text">ким олган</span>
                            </td>
                            <td className='table__cell'>
                                <span className="table__cel-text table__cell-text">китоб номи</span>
                            </td>
                            <td className='table__cell'>
                                <span className="table__cel-text table__cell-text">сони</span>
                            </td>
                            <td className='table__cell'>
                                <span className="table__cel-text table__cell-text">канча пул отказган</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item =>{
                                return (
                                    <TableItem
                                        key = {item.id}
                                        name = {item.name}
                                        bookName = {item.bookName}
                                        count = {item.count}
                                        price = {item.price}
                                        day = {item.day}
                                        time = {item.time}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;