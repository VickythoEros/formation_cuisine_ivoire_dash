import {  useState,useRef, useEffect } from 'react'
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import FormAjoutCours from 'src/components/forms/ajoutCours/FormAjoutCours'


import './AjoutLeçons.css'
import AjoutLeçonsTabPanel from 'src/components/tabs/AjoutLeçonsTabPanel';



const AjoutLeçons = ()=>{

    // Define my states variables
    const [dataTable,setDataTable]= useState([])
   

    return(
        <main className="acteurs-cours-main card p-5">
            <section className='acteurs-cours-body '>
                <div className='pb-3 '>
                    <h3 className='fw-bolder' style={{color:"black"}} >
                        Enregistrement d'une nouvelle leçon
                    </h3>
                </div>
            </section>
            <section className='main-section-ajout-cours container'>
                <section className='px-5'>
                    <div className=''>
                        <AjoutLeçonsTabPanel />
                    </div>
                </section>
                
            </section>
        </main>
    )
}

export default AjoutLeçons