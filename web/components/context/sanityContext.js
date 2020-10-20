import React, { createContext, useEffect, useState } from 'react'

import { getAbout } from '../../lib/sanity'

const defaultValue = {
  companyInfo: {},
  siteSettings: {}
}

const SanityContext = createContext(defaultValue)

export const SanityProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)
  const [about, setAbout] = useState()
  // const [companyInfo, setCompanyInfo] = useState({})
  // const [siteSettings, setSiteSettings] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const newCompanyInfo = await getCompanyInfo()
        // const newSiteSettings = await getSettings()
        // setCompanyInfo(newCompanyInfo[0])
        // setSiteSettings(newSiteSettings)
        const about = await getAbout()
        setAbout(about)
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
        about
      }}
    >
      {children}
    </SanityContext.Provider>
  )
}

export default SanityContext
