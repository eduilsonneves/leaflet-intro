var map = L.map('map').setView([-5.08827,-42.81056], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-5.08827,-42.81056]).addTo(map)
		.bindPopup('LAEIFPI - IFPI<br> Where Eduilson spends most of his work time')
		.openPopup();	