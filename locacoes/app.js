document.addEventListener('DOMContentLoaded', () => {
    // Marca o link ativo no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", () => {
        const expanded = navbarToggler.getAttribute("aria-expanded") === "true";
        navbarToggler.setAttribute("aria-expanded", !expanded);
    });
});

const locations = [
    {
        name: "Laboratório Nacional de Los Alamos",
        lat: 35.8800,
        lng: -106.3030
    },
    {
        name: "Área do Trinity Test",
        lat: 33.6770,
        lng: -106.4754
    },
    {
        name: "Shepperton Studios, Inglaterra",
        lat: 51.3951,
        lng: -0.4582
    },
    {
        name: "Pinewood Studios, Inglaterra",
        lat: 51.5485,
        lng: -0.5356
    }
];

// Inicializar o mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 37.0902, lng: -95.7129 } // Centro aproximado (EUA)
    });

    // Adicionar marcadores para os locais
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });

        // Informações adicionais nos marcadores
        const infoWindow = new google.maps.InfoWindow({
            content: `<h5>${location.name}</h5>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}