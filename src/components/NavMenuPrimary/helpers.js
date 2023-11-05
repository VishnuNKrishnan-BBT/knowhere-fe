export const getPathname = () => {
    return window.location.pathname
}

export const getActiveItemIndexOnLoad = () => {
    var returnValue = 1

    if (getPathname() == '/track') {
        returnValue = 1
    } else if (getPathname() == '/favourites') {
        returnValue = 2
    } else if (getPathname() == '/analytics') {
        returnValue = 3
    } else if (getPathname() == '/search') {
        returnValue = 4
    } else if (getPathname() == '/settings') {
        returnValue = 5
    } else { //Default
        returnValue = 1
    }

    return returnValue
}