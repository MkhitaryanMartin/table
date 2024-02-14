import React from 'react';
import "./style.css"
import TableRow from './tableRow';

const Table = ({data, titles, active}) => { 
    return (
        <table>
            <thead>
                <tr>
                    {titles.map((title)=><th key={title}>{title}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => <TableRow key={item.id} item={item} titles={titles} active={active}/>)}
            </tbody>
        </table>
    );
};

export default React.memo(Table);
