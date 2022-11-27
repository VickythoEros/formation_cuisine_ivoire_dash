import { useEffect, useState } from 'react'
import LeconsDataTable from 'src/components/utils/table/LeconsDataTable'

import './Leçons.css'



const Leçons = ()=>{

    // Define my states variables
    const [dataTable,setDataTable]= useState([])
   
    return(
        <main className="acteurs-cours-main">
            <section className='acteurs-cours-body mt-5 p-5 card'>
                <div className='pb-3 '>
                    <h3 className='fw-bolder' style={{color:"orange"}} >
                        La liste des Leçons
                    </h3>
                </div>
                <LeconsDataTable />
            </section>
        </main>
    )
}

export default Leçons