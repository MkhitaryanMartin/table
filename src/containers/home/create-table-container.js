import React, { useMemo } from 'react';
import data from "../../db.json";
import Table from '../../components/table';

const CreateTableContainer = ({ checkboxs }) => {

    const options = useMemo(() => ({
        titles: Object.entries(checkboxs).filter((checkbox) => checkbox[1].checked && checkbox[0] !== "Select all").map((checkbox) => checkbox[0]),
    }), [checkboxs]);

    const items = useMemo(() => {
        return data.items
    }, []);

    return (
        <Table data={items} titles={options.titles}/>
    );
};

export default CreateTableContainer;
