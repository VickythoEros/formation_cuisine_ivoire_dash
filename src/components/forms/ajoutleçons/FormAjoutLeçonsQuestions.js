import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

const QuestionInputsItems=(props)=>{
    const customizeDropdownList = (liste)=>{
        return [ ...(liste || [])]?.map((item,index) => {
            return {
                label: item.proposition,
                value: index
            }
        } )
    }
    let listDropdown = customizeDropdownList(props?.item?.propositions)

    console.log('itempo : ',props?.item?.propositions)
    return(
        <div className='pt-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='h4 fw-bolder' >Question {props.index +1} </h4>
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
            <h4  className='fw-bolder mb-2' htmlFor=""> Saisissez une question </h4>
            <InputText 
                name='question'
                value={props.item.question}
                onChange={(event)=> props.onChangeSectionInputs(event,props.index) }
                className={`w-100 block p-input text-lg block"} `}  />
        </div>
        
                        
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4  className='fw-bolder' htmlFor=""> Entrez des propositions de reponse </h4>
            <small className='mb-2 text-danger fw-bolder' >Ces proposotions doivent contenir la reponse correcte</small>
            {props?.item?.propositions?.map((proposValue,index)=>{
                return (
                    <div className='pt-4'>
                        <div className='text-end'>
                            <Button 
                                disabled={props?.item?.propositions.length === 1}
                                onClick={()=> props.deleteNewQuestionInput(props.index,index)}
                                icon="pi pi-times" 
                                className="p-button-rounded p-button-danger p-button-text me-0" 
                                aria-label="Supprimer" />
                        </div>
                        <InputText 
                            key={index}
                            placeholder='Saisissez une proposition'
                            name='proposition'
                            value={proposValue?.proposition}
                            onChange={(event)=> props.onChangePropositionSelect(event,props.index,index) }
                            className={`w-100 block p-input text-lg block mt-2 `}  />
                    </div>
                           )
                    })
           }
           <div className=''>
                <Button 
                    onClick={()=> props.addNewQuestionInput(props.index)}
                    icon="pi pi-plus" 
                    className="p-button-rounded mt-4 p-button-sm" 
                    aria-label="Ajouter une proposition" />
           </div>
        </div>

        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4  className='fw-bolder mb-2' htmlFor="">Quelle est la reponse correcte parmis ces propositions ? </h4>
            <Dropdown 
                name="reponse"
                value={ props?.item.reponse } 
                options={listDropdown} 
                onChange={(event) => props.onChangeDropdownSelectInputs(event,props.index) } 
                className={`w-100 block p-input text-lg block"} `}
                placeholder="Selectionnez la bonne reponse"/>
        </div>
        
        </div>
    )
}


export default function FormAjoutLeçonsQuestions(){
    const initialStatePropositions = {proposition:''}
    const initialStateSection = {question:"", reponse:null,propositions:[ initialStatePropositions ] }
    const [sectionInputData,setSectionInputData] = useState([initialStateSection])


    const onChangeSectionInputs = (event,index)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData[index][event.target.name] = event.target.value
        setSectionInputData(newSectionInputData)
    }

    const onChangeDropdownSelectInputs = (event,index)=>{
        let newSectionInputData = [...sectionInputData]
        console.log('even: ',event)
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


    const onChangePropositionSelect = (event,mainIndex,index)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData[mainIndex].propositions[index][event.target.name] = event.target.value
        setSectionInputData(newSectionInputData)
    }

    const addNewQuestionInput = (mainIndex)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData[mainIndex].propositions.push(initialStatePropositions)
        setSectionInputData(newSectionInputData)
    }

    const deleteNewQuestionInput = (mainIndex,index)=>{
        let newSectionInputData = [...sectionInputData]
        newSectionInputData[mainIndex].propositions.splice(index,1)
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
                    <QuestionInputsItems
                        item={item}
                        listReponse={sectionInputData?.propositions }
                        sectionInputDataLength={sectionInputData?.length}
                        index={index}
                        key={index}
                        onChangeDropdownSelectInputs={onChangeDropdownSelectInputs}
                        onChangePropositionSelect={onChangePropositionSelect}
                        addNewQuestionInput={addNewQuestionInput}
                        deleteNewQuestionInput={deleteNewQuestionInput}
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