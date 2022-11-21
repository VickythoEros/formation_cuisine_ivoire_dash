// import { useState } from 'react'
import {cilPeople,} from '@coreui/icons'
import MyDataTable from 'src/components/utils/table/MyDataTable'

import './Administrateurs.css'
import Acteurs from 'src/views/acteurs/Acteurs'

const Administrateurs = ()=>{

    // Define my states variables
    // const [dataTable,setDataTable]= useState([])

    return(
        <Acteurs name="Administrateurs" icon={cilPeople} >
            <MyDataTable />
        </Acteurs>
    )
}

export default Administrateurs