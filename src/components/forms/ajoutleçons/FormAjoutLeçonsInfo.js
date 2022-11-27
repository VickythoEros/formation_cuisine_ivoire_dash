import React from 'react';
import { Button } from 'primereact/button';
import { Formik, Form  } from 'formik'; 
import * as Yup from 'yup';
import { MySelectInputDropdown, MyTextareaInput, MyTextInput } from 'src/components/utils/FormInputs';
import { FormFileLeçons } from 'src/components/utils/FormFileLeçons';




export default function FormAjoutLeçonsInfo(){
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
                    ethnie:null,
                    duree:""
                }}
                validationSchema={Yup.object({
                    titre: Yup.string()
                    .required('Le champ titre est obligatoire'),
                    description: Yup.string()
                    .required('Le champ description est obligatoire'),
                    duree: Yup.string()
                    .required('Le champ durée est obligatoire'),

                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                    console.log('value : ', values)
                }}>

            <Form>
                <MySelectInputDropdown
                    options={cities}
                    optionLabel="name" 
                    inputId="cours"
                    label="Selectionnez un cours ?"
                    name="cours"
                    placeholder="Selectionnez " 
                    filter
                />

                <MyTextInput
                    label="Titre de la leçon"
                    name="titre"
                    type="text"
                    placeholder="Les ingrédients de bases"
                />
                <MyTextareaInput
                    label="Entrez une description de la leçon"
                    name="description"
                    rows={5} 
                    placeholder="Sauce à base de graine..."
                />
               
               
                <FormFileLeçons 

                 />
                {/* <div className='text-end py-5'>
                    <Button type="submit" className='q-button-primary p-button-rounded' label="Enregistrez le cours" icon="pi pi-check" />
                </div> */}
            </Form>
            </Formik>
        </>
    )
}