import { useContext } from 'react'
import AppContext from 'components/context/appContext'

const useAppContext = () => {
  const app = useContext(AppContext)
  return app
}

export default useAppContext
