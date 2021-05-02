function toggleGif() {
    const pantalla = document.getElementById('gifScreen')
    if (pantalla.style.visibility == "hidden") {
        pantalla.style.visibility = "visible"
    } else {
        pantalla.style.visibility = "hidden"
    }
}