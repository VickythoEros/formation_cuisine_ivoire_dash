import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';


const SectionInputsItems=(props)=>{

    return(
        <div className='pt-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='h4 fw-bolder' >Section {props.index +1} </h4>
                <div className=''>
                    <Button 
                        disabled={props.sectionInputDataLength === 1 && true}
                        label="Supprimer" 
                        icon="pi pi-trash" 
                        className='p-button-danger p-button-rounded' 
                        loading={false} 
                        onClick={()=> props.deleteNewSectionInput(props.index) } />
                </div>
            </div>
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4  className='fw-bolder mb-2' htmlFor=""> Titre de la section ( Optionnel ) </h4>
            <InputText 
                name='titre'
                value={props.item.titre}
                onChange={(event)=> props.onChangeSectionInputs(event,props.index) }
                className={`w-100 block p-input text-lg block"} `}  />
        </div>
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4 className='fw-bolder mb-2' htmlFor=""> Entrez une description de la section</h4>
            <InputTextarea 
                name='description'
                value={props.item.description}
                onChange={(event)=> props.onChangeSectionInputs(event,props.index) }
                autoResize 
                rows={5} 
                placeholder="Sauce à base de graine..."
                className={`w-100  p-input text-lg block block"} `}   />
        </div>
        </div>
    )
}


export default function FormAjoutLeçonsSections(){
    const initialStateSection = {titre:"", description:"" }
    const [sectionInputData,setSectionInputData] = useState([initialStateSection])


    const onChangeSectionInputs = (event,index)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData[index][event.target.name] = event.target.value
        setSectionInputData(newSectionInputData)
    }

    const addNewSectionInput = ()=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData.push(initialStateSection)
        setSectionInputData(newSectionInputData)
    }

    const deleteNewSectionInput = (index)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData.splice(index,1)
        setSectionInputData(newSectionInputData)
    }

    useEffect(()=>{
        console.log("🚀 ~ file: FormAjoutLeçonsSections.js ~ line 46 ~ FormAjoutLeçonsSections ~ sectionInputData", sectionInputData)
    },[sectionInputData])

    return(
        <>
            {
                sectionInputData?.map((item,index)=>{
                    return(
                    <SectionInputsItems
                        item={item}
                        sectionInputDataLength={sectionInputData?.length}
                        index={index}
                        key={index}
                        onChangeSectionInputs={onChangeSectionInputs}
                        deleteNewSectionInput={deleteNewSectionInput}
                    />)
                })
            }
           
                
                {/* <MyTextInput
                    label="Titre de la section ( Optionnel ) "
                    name="titre"
                    type="text"
                    placeholder="Ingredients"
                />
                <MyTextareaInput
                    label="Entrez une description de la section"
                    name="description"
                    rows={5} 
                    placeholder="Sauce à base de graine..."
                />
                */}
               
                {/* <FormFile /> */}
                {/* <div className='text-end py-5'>
                    <Button type="submit" className='q-button-primary p-button-rounded' label="Enregistrez le cours" icon="pi pi-check" />
                </div> */}

                
            <div className='py-5'>
                <Button label="Ajouter une nouvelle section" icon="pi pi-plus" className='p-button-rounded' loading={false} onClick={()=>addNewSectionInput()} />
            </div>
          
        </>
    )
}