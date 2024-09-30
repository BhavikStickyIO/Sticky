import React from 'react'
import LeftSidebar from './LeftSidebar'
import Filter from './Filter'
const Layout = ({ children }) => {
    return (
        <>
            <LeftSidebar />
            {children}
            <Filter />
        </>
    )
}

export default Layout
