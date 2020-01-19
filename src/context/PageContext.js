import React, { useState, useEffect } from "react"
const defaultState = {
  isOpen: false,
  toggleMenu: () => {},
}
const PageContext = React.createContext(defaultState)

function PageContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <PageContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </PageContext.Provider>
  )
}
export default PageContext
export { PageContextProvider }
