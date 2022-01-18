if (location.pathname === '/chatsnap/view.php' && !location.href.includes('&expanded=true')) {
    locationString = location.href
    locationString = locationString.concat('&expanded=true')
    location.href = locationString
}