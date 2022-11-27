import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Message } from 'primereact/message';
import { useField  } from 'formik'; 


const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4  className='fw-bolder mb-2' htmlFor={props.id || props.name}>{label}</h4>
            <InputText className={`w-100 block p-inputtext-lg ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}  />
            {meta.touched && meta.error ? (
              <Message severity="error" text={meta.error} />
        ) : null}
        </div>
      </>
    );
  };

  
const MyNumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
            <h4 className='fw-bolder mb-2' htmlFor={props.id || props.name}>{label}</h4>
            <InputNumber  className={`w-100  p-inputtext-lg block ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}  />
            {meta.touched && meta.error ? (
              <Message severity="error" text={meta.error} />
        ) : null}
        </div>
      </>
    );
  };

  
const MyTextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card">
            <h4 className='fw-bolder mb-2' htmlFor={props.id || props.name}>{label}</h4>
            <InputTextarea autoResize className={`w-100 block  p-inputtext-lg ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props} />
            {meta.touched && meta.error ? (
              <Message severity="error" text={meta.error} />
        ) : null}
        </div>
      </>
    );
};



const MySelectInput = ({ label,options, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
        <h4 className='fw-bolder mb-2' htmlFor={props.id || props.name}>{label}</h4>
            <MultiSelect options={options} className={`w-100 bolck  p-inputtext-lg ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}   />
            {meta.touched && meta.error ? (
              <Message severity="error" text={meta.error} />
        ) : null}
        </div>
    );
 
};




const MySelectInputDropdown = ({ label,options, ...props }) => {
  const [field, meta] = useField(props);
  return (
      <div className="py-5 px-4 my-2 shadow bg-white border-rounded card ">
      <h4 className='fw-bolder mb-2' htmlFor={props.id || props.name}>{label}</h4>
          <Dropdown options={options} className={`w-100 bolck  p-inputtext-lg ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}   />
          {meta.touched && meta.error ? (
            <Message severity="error" text={meta.error} />
      ) : null}
      </div>
  );

};


 


{/* <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/> */}
 

export {
    MyTextInput,
    MySelectInput,
    MyTextareaInput,
    MyNumberInput,
    MySelectInputDropdown,

}