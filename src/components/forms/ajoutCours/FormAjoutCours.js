import React from 'react';
import { Button } from 'primereact/button';
import { Formik, Form  } from 'formik'; 
import * as Yup from 'yup';
import { MySelectInput, MyTextareaInput, MyTextInput,MyNumberInput } from 'src/components/utils/FormInputs';
import { FormFile } from 'src/components/utils/FormFile';




export default function FormAjoutCours(){
    const cities = [
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    return(
        <>
            <Formik

            initialValues={{
                titre:"",
                description:"",
                ethnie:"",
                duree:""
            }}
            validationSchema={Yup.object({
                lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),

            })}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}>

            <Form>
                <MyTextInput
                    label="Titre du cours"
                    name="titre"
                    type="text"
                    placeholder="Préparation de la sauce graine"
                />
                <MyTextareaInput
                    label="Entrez une description"
                    name="description"
                    rows={5} 
                    placeholder="Sauce à base de graine..."
                />
                <MySelectInput 
                    options={cities}
                    optionLabel="name" 
                    inputId="ethnie"
                    label="A quel ethnie est attribué ce plat ?"
                    name="ethnie"
                    placeholder="Selectionnez " 
                    filter
                />
                <MyNumberInput 
                    inputId="duree"
                    label="Combien d'heures avez-vous mis pour la préparation de ce plat ?"
                    name="duree"
                    placeholder="3 " 
                />
                
                <FormFile />
                <div className='text-end py-5'>
                    <Button className='q-button-primary p-button-rounded' label="Enregistrez le cours" icon="pi pi-check" />
                </div>
            </Form>
            </Formik>
        </>
    )
}