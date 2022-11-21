// import { useState } from 'react'
import {cilPeople,} from '@coreui/icons'
import MyDataTable from 'src/components/utils/table/MyDataTable'

import './Mentors.css'
import Acteurs from 'src/views/acteurs/Acteurs'

const Mentors = ()=>{

    // Define my states variables
    // const [dataTable,setDataTable]= useState([])

    return(
        <Acteurs name="Mentors" icon={cilPeople} >
            <MyDataTable />
        </Acteurs>
    )
}

export default Mentors