import { useRoutes } from 'react-router-dom'
import MainRoutes from './MainRoutes.tsx'

export default function Routes() {
  return useRoutes([ MainRoutes ])
}