import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilDescription,
  cilNotes,
  cilSettings,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/acceuil',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Acteurs',
    to: '/acteurs',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Administrateurs',
        to: '/acteurs/administrateurs',
      },
      {
        component: CNavItem,
        name: 'Mentors',
        to: '/acteurs/mentors',
      },
      {
        component: CNavItem,
        name: 'Apprenants',
        to: '/acteurs/apprenants',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Cours',
    to: '/cours',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Leçons',
    to: '/lecons',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Questions',
    to: '/questions',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Statistiques',
    to: '/statistiques',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Configurations',
    to: '/configurations',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
 
]

export default _nav
