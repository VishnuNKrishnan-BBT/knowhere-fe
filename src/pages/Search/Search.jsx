import React from 'react'
import PageContentWrapper from '../../components/PageContentWrapper/PageContentWrapper'

function Search() {
    return (
        <>
            <PageContentWrapper
                pageTitle={'Search'}
                googleIcon={'manage_search'}
                pageDescription={'Search with driver names, license plates, contact numbers and more for further actions...'}
            // sideBarItems={sideBarItems}
            />
        </>
    )
}

export default Search
