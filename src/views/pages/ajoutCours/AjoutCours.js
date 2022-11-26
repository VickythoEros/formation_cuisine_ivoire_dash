import {  useState,useRef, useEffect } from 'react'
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import FormAjoutCours from 'src/components/forms/ajoutCours/FormAjoutCours'


import './AjoutCours.css'



const AjoutCours = ()=>{

    // Define my states variables
    
    const msgs1 = useRef(null);
    const [dataTable,setDataTable]= useState([])
   
    useEffect(()=>{
        msgs1.current.show([
            { severity: 'info', summary: 'Info', detail: "Le cours enregistré ne pourra être valider que après ajout d'une leçon", sticky: true },
        ]);
    },[])
  

    return(
        <main className="acteurs-cours-main card p-5">
            <section className='acteurs-cours-body '>
                <div className='pb-3 '>
                    <h3 className='fw-bolder' style={{color:"black"}} >
                        Enregistrement d'un nouveau cours
                    </h3>
                </div>
                
                <Messages ref={msgs1}  />
            </section>
            <section className='main-section-ajout-cours container'>
                <section className='px-5'>
                    <div className=''>
                        <FormAjoutCours />
                    </div>
                </section>
                
            </section>
        </main>
    )
}

export default AjoutCours