import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { InputNumber } from 'primereact/inputnumber';
import { useField  } from 'formik'; 


const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-3 px-4 my-2 ">
            <h5 htmlFor={props.id || props.name}>{label}</h5>
            <InputText className={`w-100  ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}  />
            {meta.touched && meta.error ? (
          <small id="username-help" className="p-error block">{meta.error}</small>
        ) : null}
        </div>
      </>
    );
  };

  
const MyNumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-3 px-4 my-2 ">
            <h5 htmlFor={props.id || props.name}>{label}</h5>
            <InputNumber  className={`w-100  ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}  />
            {meta.touched && meta.error ? (
          <small id="username-help" className="p-error block">{meta.error}</small>
        ) : null}
        </div>
      </>
    );
  };

  
const MyTextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="py-3 px-4 my-2 ">
            <h5 htmlFor={props.id || props.name}>{label}</h5>
            <InputTextarea autoResize className={`w-100  ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props} />
            {meta.touched && meta.error ? (
          <small id="username2-help" className="p-error block">{meta.error}</small>
        ) : null}
        </div>
      </>
    );
  };



const MySelectInput = ({ label,options, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="py-3 px-4 my-2">
        <h5 htmlFor={props.id || props.name}>{label}</h5>
            <MultiSelect options={options} className={`w-100  ${(meta.touched && meta.error) && "p-invalid block"} `} {...field} {...props}   />
            {meta.touched && meta.error ? (
          <small id="usernamevick-help" className="p-error block">{meta.error}</small>
        ) : null}
        </div>
    );
 
};
 



export {
    MyTextInput,
    MySelectInput,
    MyTextareaInput,
    MyNumberInput,

}