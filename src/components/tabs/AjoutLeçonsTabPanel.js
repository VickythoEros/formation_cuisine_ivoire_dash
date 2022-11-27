
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import FormAjoutLeçonsInfo from '../forms/ajoutleçons/FormAjoutLeçonsInfo';
import FormAjoutLeçonsSections from '../forms/ajoutleçons/FormAjoutLeçonsSections';
import './AjoutLeçonsTabPanel.css';
import FormAjoutLeçonsQuestions from '../forms/ajoutleçons/FormAjoutLeçonsQuestions';

const AjoutLeçonsTabPanel = () => {
    const [panelIndex,setPanelIndex]= useState(0)

    const onChangePanelPreviousIndex = ()=>{
        setPanelIndex(panelIndex - 1 )
    }


    const onChangePanelNextIndex = ()=>{
        setPanelIndex(panelIndex  + 1 )
    }

    const onSubmitLecons =()=>{

    }

    const panelItems =["Informations sur la leçon", "Sections de la leçon", "Questions", "Enregistrer"]

    const tabHeaderITemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={`${options.className} fw-bolder h5 px-5`}>
                <i className="pi pi-info-circle me-2" />
                {options.titleElement}
            </button>
        );
    };
    const tabHeaderIITemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={`${options.className} fw-bolder h5 px-5`}>
                <i className="pi pi-clone me-2" />
                {options.titleElement}
            </button>
        );
    };

    const tabHeaderIIITemplate = (options) => {
        return (
            <button type="button" onClick={options.onClick} className={`${options.className} fw-bolder h5 px-5`}>
                <i className="pi pi-question-circle me-2" />
                {options.titleElement}
            </button>
        );
    };


    return (
        <div className="tabview-demo">
            <div className="mt-4">
                <TabView activeIndex={panelIndex}  onTabChange={(e) => setPanelIndex(e.index)} >
                    <TabPanel  header={panelItems[0]}  headerTemplate={tabHeaderITemplate}>
                       <FormAjoutLeçonsInfo />
                    </TabPanel>
                    <TabPanel header={panelItems[1]}  headerTemplate={tabHeaderIITemplate}>
                        <FormAjoutLeçonsSections />
                    </TabPanel>
                    <TabPanel header={panelItems[2]}  headerTemplate={tabHeaderIIITemplate}>
                        <FormAjoutLeçonsQuestions />
                    </TabPanel>
                </TabView>

                <Divider className='mt-5' />
                <div className='d-flex justify-content-between align-items-center pt-2'>
                    <div className=''>
                        <Button 
                            className='p-button-rounded'
                            disabled={panelIndex === 0 && true} 
                            label={panelIndex ===0? panelItems[0]:panelItems[panelIndex-1]}
                            icon="pi pi-arrow-left" 
                            loading={false} 
                            onClick={()=> setPanelIndex(panelIndex-1)} />
                    </div>
                    <div className=''>
                        <Button
                            className='p-button-rounded'
                            label={panelItems[panelIndex+1]}
                            iconPos="right" 
                            icon={`pi ${ panelIndex===2?"pi-save" : "pi-arrow-right"} `} 
                            loading={false} 
                            onClick={()=>{panelIndex !== 2 ? setPanelIndex(panelIndex+1): onSubmitLecons()}} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjoutLeçonsTabPanel