function mapChooser(locationName){
    if (!locationName) {
        locationName = "alla";
    }
    let imageName = locationName + ".png";
    return (imageName);
}

export default mapChooser;
