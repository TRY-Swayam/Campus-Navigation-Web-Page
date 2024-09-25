function showRoute() {
    const start = document.getElementById("start").value;
    const destination = document.getElementById("destination").value;
    const routeInfo = document.getElementById("route-info");
    const campusMap = document.getElementById("campus-map");

    // Check if both selections are made
    if (start && destination) {
        if (start === destination) {
            routeInfo.innerHTML = `<p>Please choose different starting and destination points.</p>`;
            campusMap.src = "default-map.jpg"; // Reset to default image
        } else {
            // Construct the filename for the route image
            const routeImage = `${start.replace(/\s+/g, '-')}_to_${destination.replace(/\s+/g, '-')}.jpg`;
            
            // Display the selected route info
            routeInfo.innerHTML = `<p>Showing route from <strong>${start}</strong> to <strong>${destination}</strong> on the map.</p>`;
            
            // Update the image source
            campusMap.src = routeImage;
        }
    } else {
        routeInfo.innerHTML = `<p>Please select both starting point and destination.</p>`;
        campusMap.src = "default-map.jpg"; // Reset to default image
    }
}
