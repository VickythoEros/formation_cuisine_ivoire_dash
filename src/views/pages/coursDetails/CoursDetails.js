

import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';



const CoursDetails = ()=>{
    const [nombreApprenants,setNombreApprenants] =  useState(10)
    const [startNumber,setStartNumber] =  useState(2)

    return(
        <main>
            <div className='container-fuid pb-3'>
                <div className='row justify-content-start align-items-center'>
                    <div className='col-md-8'>
                        <h3 className='fw-bolder' >
                            It is a long established fact that a reader will be distracted 
                        </h3>
                        <Rating value={startNumber} onChange={(e) => setStartNumber(e.value)} stars={5} cancel={false} />
                    </div>
                </div>
            </div>
            <section className="shadow rounded-4 p-4">
                <div className='container'>
                    <div className="row justify-content-center align-items-center py-3">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <Knob 
                                    value={nombreApprenants} 
                                    onChange={(e) => setNombreApprenants(e)} />
                                <h5 className='h6 fw-bolder ms-3'>Nombre d'Apprenants</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <Knob 
                                    value={nombreApprenants} 
                                    onChange={(e) => setNombreApprenants(e)} />
                                <h5 className='h6 fw-bolder ms-3'>Nombre de sections du cours</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center py-3">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <Knob 
                                    value={nombreApprenants} 
                                    onChange={(e) => setNombreApprenants(e)} />
                                <h5 className='h6 fw-bolder ms-3'>Nombre de Questions</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <Knob 
                                    value={nombreApprenants} 
                                    onChange={(e) => setNombreApprenants(e)} />
                                <h5 className='h6 fw-bolder ms-3'>Nombre de leçons du cours</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className='row justify-content-center align-items-center border-start-1 border-success border-5'>
                    <h5 className='fw-bolder h5' >
                        Image du cours
                    </h5>
                    <div className='mx-auto text-center'>
                            <Image className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMuR4-QfjhoYe088uCI_N1t-aXn5X2JepWOomHrLZhSIllbeWPVkCogSeHLW1w2HTKP0&usqp=CAU" template="Preview Content" alt="Image Text" /> <br/>
                        <Button label="Modifier" className='mt-3 p-button-rounded ' icon="pi pi-file-edit"  />
                    </div>
                </div>
            </section>


        <section className='py-5 '>
            <div className='d-flex justify-content-evenly align-items-center'>
             <Button label="Sauvegarder les changements" className='p-button-rounded' icon="pi pi-check"  />  
             <Button label="Supprimer le cours" className='p-button-danger p-button-rounded' icon="pi pi-times"  />
            </div>
        </section>
        </main>
    )
}

export default CoursDetails