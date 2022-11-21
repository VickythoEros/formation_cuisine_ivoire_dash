import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Administrateurs = React.lazy(() => import('./views/pages/administrateurs/Administrateurs'))
const Mentors = React.lazy(() => import('./views/pages/mentors/Mentors'))
const Apprenants = React.lazy(() => import('./views/pages/apprenants/Apprenants'))

const Cours = React.lazy(() => import('./views/pages/cours/Cours'))
const CoursDetails = React.lazy(() => import('./views/pages/coursDetails/CoursDetails'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/acceuil', name: 'Dashboard', element: Dashboard },
  { path: '/acteurs/administrateurs', name: 'Administrateurs', element: Administrateurs },
  { path: '/acteurs/mentors', name: 'Mentors', element: Mentors },
  { path: '/acteurs/apprenants', name: 'Apprenants', element: Apprenants },

  { path: '/cours', name: 'Cours', element: Cours },
  { path: '/cours/:idCours', name: 'Cours details', element: CoursDetails },

]

export default routes
