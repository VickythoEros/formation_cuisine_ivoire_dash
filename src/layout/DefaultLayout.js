import React from 'react'
import MyAppBreadcrumb from 'src/components/utils/MyBreadcrumb'
import { AppContent, AppSidebar, AppHeader } from '../components/index'






const DefaultLayout = () => {
  return (
    <div className='app-quizine-main' >
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 " 
      style={{
        // background:"url('https://cdn.dribbble.com/users/1012997/screenshots/14073001/media/4994fedc83e967607f1e3b3e17525831.png?compress=1&resize=400x300')",
        // backgroundPosition:"center",
        // backgroundRepeat:"no-repeat",
        // backgroundSize:"cover"
      }}
       >
        <AppHeader />
        <div className="body flex-grow-1 px-3 ">
          <MyAppBreadcrumb />
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
