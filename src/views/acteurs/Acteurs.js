import { useState } from 'react'
import CIcon from '@coreui/icons-react'

const Acteurs = (props)=>{


    return(
        <main className="acteurs-acteurs-main">
            <section className='acteurs-acteurs-body mt-5'>
                {props.children}
            </section>
        </main>
    )
}

export default Acteurs