// import { useState } from 'react'
import {cilPeople,} from '@coreui/icons'
import MyDataTable from 'src/components/utils/table/MyDataTable'

import './Apprenants.css'
import Acteurs from 'src/views/acteurs/Acteurs'

const Apprenants = ()=>{

    // Define my states variables
    // const [dataTable,setDataTable]= useState([])

    return(
        <Acteurs name="Apprenants" icon={cilPeople} >
            <MyDataTable />
        </Acteurs>
    )
}

export default Apprenants