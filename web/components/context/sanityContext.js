import React, { createContext, useEffect, useState } from 'react'

import { getAbout, getEnergy } from '../../lib/sanity'

const defaultValue = {
  companyInfo: {},
  siteSettings: {}
}

const SanityContext = createContext(defaultValue)

export const SanityProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)
  const [about, setAbout] = useState()
  const [energy, setEnergy] = useState()
  // const [companyInfo, setCompanyInfo] = useState({})
  // const [siteSettings, setSiteSettings] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAbout(await getAbout())
        setEnergy(await getEnergy())
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setError(err)
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <SanityContext.Provider
      value={{
        about,
        energy
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

export default SanityContext
