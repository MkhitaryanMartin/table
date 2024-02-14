import React, { useState } from 'react';
import TablleForm from '../../components/tablle-form';

const TablleFormContainer = ({ items, onSubmit, onChange, onCancel }) => {
    const [formState, setFormState] = useState(items);
    const [submitState, setSubmitState] = useState(items);
    const [searchValue, setSearchValue]= useState("")

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "Select all") {
            const newFormState = { ...formState };
            for (let key in newFormState) {
                newFormState[key] = { ...newFormState[key], checked };
            }
            setFormState(newFormState);
            setSubmitState(newFormState);
        } else {
            setFormState(prevState => {
                const newState = { ...prevState };
                newState[name] = { ...prevState[name], checked };
                const allChecked = Object.values({...newState, "Select all":{checked:true, id:"Select all"}}).every(value => value.checked);
                newState["Select all"] = { ...newState["Select all"], checked: allChecked };
                return newState;
            });
    
            setSubmitState(prevState => {
                const newState = { ...prevState };
                const item = newState[name];
                delete newState[name];
                const orderedState = { "Select all": prevState["Select all"], [name]: { ...item, checked }, ...newState };
                return orderedState;
            });
        }
    }
    

    const handleSearch = (e) => {
        if (e.target.value) {
            const updatedFormState = {};
            const searchTerm = e.target.value.toLowerCase(); 
            Object.keys(formState).forEach((el) => {
                if (el.toLowerCase().includes(searchTerm)) { 
                    updatedFormState[el] = { checked: true, id: el };
                } else {
                    updatedFormState[el] = { checked: false, id: el };
                }
            });
    
            setFormState(updatedFormState); 
        }
        setSearchValue(e.target.value)
    }
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchValue){
            onSubmit(formState)
            setSearchValue("")
        }else{
            onSubmit(submitState);
        }
        onCancel()
    }

    return (
        <TablleForm
            items={items}
            onSubmit={onSubmit}
            onChange={onChange}
            onCancel={onCancel}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formState={formState} 
            handleSearch={handleSearch}
            searchValue={searchValue}
            />
    );
};

export default TablleFormContainer
