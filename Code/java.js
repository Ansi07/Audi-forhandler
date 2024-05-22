    // Opprett et kart med senterkoordinater og zoomnivå
    var map = L.map('map').setView([59.7547, 10.1272], 13);
    
    L.marker([59.7547, 10.1272]).addTo(map)
        .bindPopup('Audi Forhandler<br>Ing. Rybergsgate 94-102, 3027 Drammen')
        .openPopup();
    // Legg til et flislag (tile layer) for å vise kartdataene
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
