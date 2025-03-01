// import App from './App.tsx'
// below replaces above
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)

// notes: Without <BrowserRouter>, React Router can't manage routing. Here's what happens if it's missing:
// You won’t be able to use the <Route> component to render different pages based on the URL.
// Navigation components like <Link> and <Navigate> won't work since there's no routing context.
// Any router hooks like useNavigate or useLocation will throw errors as there will be no router context available.