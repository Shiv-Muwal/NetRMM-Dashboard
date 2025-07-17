import React from 'react'
import Sidebars from './component/Sidebars.jsx';
const App = () => {
  return (
   <div className="flex">
       <Sidebars />
 
       <main className="flex-1 bg-gray-100 p-8">
         <h2 className="text-2xl font-semibold">Main Content Area</h2>
         <p className="mt-4 text-gray-700">
           This is where your dashboard widgets and content will go.
         </p>
       </main>
     </div>
  )
}

export default App