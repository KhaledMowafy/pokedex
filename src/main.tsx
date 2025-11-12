import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProviders from './presentation/providers/AppProviders.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
)
