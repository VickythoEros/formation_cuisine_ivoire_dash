import { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import {cilDescription,} from '@coreui/icons'
import CoursDataTable from 'src/components/utils/table/CoursDataTable'

import './Cours.css'



const Cours = ()=>{

    // Define my states variables
    const [dataTable,setDataTable]= useState([])
   
    return(
        <main className="acteurs-cours-main">
            {/* <section className="acteurs-cours-header-section ">
                <div className='d-flex justify-content-start align-items-center'>
                    <CIcon style={{height:'45px'}} icon={cilDescription} customClassName="nav-icon" />
                    <h3 className='ms-3' >Cours</h3>
                </div>
            </section> */}
            <section className='acteurs-cours-body mt-5'>
                <CoursDataTable />
            </section>
        </main>
    )
}

export default Cours