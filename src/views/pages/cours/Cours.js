import { useEffect, useState } from 'react'
import CoursDataTable from 'src/components/utils/table/CoursDataTable'

import './Cours.css'



const Cours = ()=>{

    // Define my states variables
    const [dataTable,setDataTable]= useState([])
   
    return(
        <main className="acteurs-cours-main">
            <section className='acteurs-cours-body mt-5 p-5 card'>
                <div className='pb-3 '>
                    <h3 className='fw-bolder' style={{color:"orange"}} >
                        La liste des cours
                    </h3>
                </div>
                <CoursDataTable />
            </section>
        </main>
    )
}

export default Cours