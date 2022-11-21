import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
// import { DataTableervice } from '../service/DataTableervice';
import './MyDataTable.css';
import { useNavigate } from 'react-router-dom';


const CoursDataTable = () => {
    const navigate = useNavigate()
    const [dataTable, setDataTable] = useState(null);
    const [selectedDataTable, setSelectedDataTable] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'nom': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'pays': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const statuses = ["En ligne","Pas en ligne"]


    const getDataTable = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

 

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData?.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options?.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }


    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge `}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge `}>{option}</span>;
    }

   
    const actionBodyTemplate = () => {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Button
                    onClick={()=>navigate(`/cours/1`)}
                    icon="pi pi-eye" 
                    className="p-button-rounded p-button-info p-button-sm py-1 mx-2" 
                    aria-label="Voir"  
                    label="Voir" />
                {/* <Button icon="pi pi-file-edit" className="p-button-rounded p-button-warning p-button-sm py-1 mx-2" aria-label="Editer" label="Editer" /> */}
                <Button 
                    icon="pi pi-times" 
                    className="p-button-rounded p-button-danger p-button-sm py-1 mx-2" 
                    aria-label="Supprimer" 
                    label="Supprimer"
                     />
            </div>
        )
    }

    const header = renderHeader();



    
    useEffect(() => {
        setDataTable([
            {nom: "vickytho eros",pays:"Côte d'ivoire",date:"20/12/2002",status:"En ligne"},
            {nom: "Kone Safiatou",pays:"France",date:"02/12/2002",status:"Pas en ligne"},
            {nom: "Koffi gahou jean",pays:"Australie",date:"20//2002",status:"En ligne"},
            {nom: "Toto callé",pays:"Burkina Faso",date:"20/12/202",status:"Pas en linge"},
        ])
        setLoading(false)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="shadow">
            <div className="">
                <DataTable 
                    value={dataTable} 
                    paginator 
                    className="p-datatable-DataTable" 
                    header={header} 
                    rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
                    rowsPerPageOptions={[10,25,50]}
                    dataKey="id" 
                    rowHover 
                    selection={selectedDataTable} 
                    onSelectionChange={e => setSelectedDataTable(e.value)}
                    filters={filters} 
                    filterDisplay="menu" 
                    loading={loading} 
                    responsiveLayout="scroll"
                    globalFilterFields={['nom', 'pays', 'date', 'status']} 
                    emptyMessage="Aucune donnée trouvée."
                    currentPageReportTemplate="Voir de {first} à {last} de {totalRecords} données">

                    <Column selectionMode="multiple" selectionAriaLabel="Nom" headerStyle={{ width: '3em' }}></Column>

                    <Column 
                        field="nom" 
                        header="Nom" 
                        sortable 
                        filter 
                        filterPlaceholder="Search by name" 
                        style={{ minWidth: '14rem' }} />
                    
                    <Column 
                        field="pays" 
                        header="Pays" 
                        sortable 
                        filterField="pays" 
                        dataType="date" 
                        style={{ minWidth: '8rem' }} 
                        filter 
                         />
                    <Column 
                        field="date" 
                        header="Date" 
                        sortable 
                        filterField="date" 
                        dataType="date" 
                        style={{ minWidth: '8rem' }} 
                        // body={dateBodyTemplate}
                        filter 
                        filterElement={dateFilterTemplate} />

                    
                    <Column 
                        field="status" 
                        header="Status" 
                        sortable 
                        filterMenuStyle={{ width: '14rem' }} 
                        style={{ minWidth: '10rem' }} 
                        body={statusBodyTemplate} 
                        filter 
                        filterElement={statusFilterTemplate} />
                   
                    <Column 
                        header="Actions" 
                        headerStyle={{ width: '4rem', textAlign: 'center' }} 
                        bodyStyle={{ textAlign: 'center', overflow: 'visible' }} 
                        body={actionBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
                 

export default CoursDataTable


