import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <DndProvider backend={HTML5Backend}>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </DndProvider>
  </React.StrictMode>,
)
