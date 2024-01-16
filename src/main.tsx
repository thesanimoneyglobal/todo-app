import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {StyledEngineProvider} from "@mui/material";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <StyledEngineProvider>
          <App/>
      </StyledEngineProvider>

  </React.StrictMode>,
)
