import { useMemo } from "react";
import { mapValues } from "./utilits";

 const TableRow = ({ item, titles, active }) => {
    const row = useMemo(() => {
        const newRow = {};
        item.fields.forEach(field => {
            const [key, value] = mapValues(field,active);
            newRow[key] = value;
        });
        return newRow;
    }, [item,active]);

    return (
        <tr>
            {titles.map(title => <td key={title}>{row[title] || '-'}</td>)}
        </tr>
    );
}


export default TableRow