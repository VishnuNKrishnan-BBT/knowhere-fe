export const doInitalFly = (mapRef = null, lat = null, lon = null) => {
    if (mapRef == null || lat == null || lon == null) {
        return
    }
    mapRef.current.flyTo({ center: [lon, lat], duration: 1000, zoom: 12 })
}

export const flyToSite = (mapRef = null, lat = null, lon = null, viewPortParams = {}, duration = 2000) => {
    if (mapRef == null || lat == null || lon == null) {
        return
    }
    mapRef.current.flyTo({ center: [lon, lat], duration: duration, ...viewPortParams })
}

export const recenter = (mapRef = null, lat = null, lon = null) => {
    if (mapRef == null || lat == null || lon == null) {
        return
    }
    mapRef.current.flyTo({ center: [lon, lat], duration: 1000 })
}

export const zoomIn = (mapRef = null, viewport = {}) => {
    if (mapRef == null) {
        return
    }
    mapRef.current.flyTo({ zoom: viewport.zoom + 1, duration: 250 })
}

export const zoomOut = (mapRef = null, viewport = {}) => {
    if (mapRef == null) {
        return
    }
    mapRef.current.flyTo({ zoom: viewport.zoom - 1, duration: 250 })
}

export const rotateLeft = (mapRef = null, viewport = {}) => {
    if (mapRef == null) {
        return
    }
    mapRef.current.flyTo({ bearing: viewport.bearing + 22.5, duration: 250 })
}

export const rotateRight = (mapRef = null, viewport = {}) => {
    if (mapRef == null) {
        return
    }
    mapRef.current.flyTo({ bearing: viewport.bearing - 22.5, duration: 250 })
}