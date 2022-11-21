
import { useEffect, useState } from 'react'
import { Breadcrumb } from 'rsuite';
import CIcon from '@coreui/icons-react'
import { NavLink, useLocation } from "react-router-dom";
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import {
  cilChartPie,
  cilDescription,
  cilNotes,
  cilSettings,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'



const navLinksElements = {
    accueil:{
        title : "Accueil",
        icon : cilSpeedometer
    },
    acteurs:{
        title : "Acteurs",
        icon : cilPeople
    },
    cours:{
        title : "Cours",
        icon : cilDescription
    },
    leçons:{
        title : "Leçons",
        icon : cilNotes
    },
    questions:{
        title : "Questions",
        icon : cilPuzzle
    },
    statistiques:{
        title : "Statistiques",
        icon : cilChartPie
    },
    configurations:{
        title : "Configurations",
        icon : cilSettings
    }
}

const MyAppBreadcrumb = () => {
    
    const location = useLocation()
    const [listBreadcrumbPath,setListBreadcrumbPath] = useState([])
    const [currentTitle,setCurrentTitle] = useState({})
    
    useEffect(()=>{
        let listLocations = location.pathname.split('/')
        let currentPath = ""
        let realPath = listLocations.map(item=>{
            if(!!item){
                currentPath += `${item}/`
                return  {
                    to : currentPath,
                    title :item.toLowerCase()
            }}
            else{
                return{}
            }
        })
        setCurrentTitle(navLinksElements[realPath[1].title])
        console.log(navLinksElements[realPath[1].title])
        setListBreadcrumbPath(realPath)
    },[location])
   
    return(
        <>
         <section className="breadcrumb-section ">
            <div className='d-flex justify-content-start align-items-center'>
                <CIcon style={{height:'45px'}} icon= {currentTitle?.icon} customClassName="nav-icon" />
                <h3 className='ms-3' > {currentTitle?.title} </h3>
            </div>
            <div className='mt-2'>
                <Breadcrumb separator={<AngleRightIcon />}  className="fs-6" >
                    {
                        listBreadcrumbPath.map((breadcrumb,index)=>{
                            return(
                                <NavLink key={index} to={breadcrumb.to} > {breadcrumb.title} </NavLink>
                            )
                        })
                    }
                    
                </Breadcrumb>
            </div>
        </section>
        </>

  )};

export default MyAppBreadcrumb