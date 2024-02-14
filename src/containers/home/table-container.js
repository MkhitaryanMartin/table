import React, { useState } from 'react';
import Modal from '../../components/modal';
import CreateTableContainer from './create-table-container';
import Head from '../../components/head';
import TablleFormContainer from './table-form-container';

const TableContainer = () => {
    const [checkboxs, setCheckboxs] = useState(
        {
            "Select all": {checked:true, id:"Select all"},
            "Description": {checked:true, id:"FDESCRIPTION"},
            "Date created": {checked:true, id:"CREATED-ON"},
            "Created by": {checked:true, id:"FIAPCREATEDBY"},
            "Version": {checked:true, id:"VERSION"},
            "Template status": {checked:true, id:"FIAPTEMPLATESTATUS"},
            "Template type": {checked:true, id:"FIAPTEMPLATETYPE"},
            "Product area": {checked:true, id:"FCUSTPRODUCTAREA"},
            "Template stage": {checked:true, id:"FCUSTTEMPLATESTAGE"},
            "Report/CTD Code": {checked:true, id:"FCUSTCTDCODE"},
            "Effective date": {checked:true, id:"FCUSTEFFECTIVEDATE"},
            "Report/CTD Title": {checked:true, id:"FCUSTCTDTITLE"},
            "Date modified": {checked:true, id:"Date modified"},
            "Effective version": {checked:true, id:"Effective version"},
            "Scope/BB Code": {checked:true, id:"Scope/BB Code"}
        });
    const [isOpenModal, setIsOpenModal] = useState(false)

    const callbacks = {
        onChange: (e) => {
            setCheckboxs(prevState => ({ ...prevState, [e.target.name]: {checked:e.target.checked, id:e.target.id} }))
        },
        onSubmit: (data)=> setCheckboxs(data),
        onOpenModal: ()=> setIsOpenModal(true),
        onCloseModal: ()=> setIsOpenModal(false)
    }

    return (
        <>
        <Head onClick={callbacks.onOpenModal}/>
            <CreateTableContainer checkboxs={checkboxs}/>
            {isOpenModal && <Modal title="Manage Template Columns" onClose={callbacks.onCloseModal}>
                <TablleFormContainer 
                items={checkboxs} 
                onSubmit={callbacks.onSubmit} 
                onChange={callbacks.onChange} 
                onCancel={callbacks.onCloseModal}
                />
            </Modal>}
        </>
    );
};

export default TableContainer;
