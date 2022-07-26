// globals
let data = [
	{
		'title':'Montevideo',
		'lat': -34.92311838219172, 
		'lon': -56.15941934445246
	},
	{
		'title':'Colonia del Sacramento',
		'lat': -34.460869283203536, 
		'lon': -57.833609492455246
	},
	{
		'title':'Buenos Aires',
		'lat': -34.57993000555176, 
		'lon': -58.425479383947454
	},
	{
		'title':'Mendoza',
		'lat': -32.889331827416385, 
		'lon': -68.84481075069264
	},
	{
		'title':'Santiago',
		'lat': -33.428334688945576, 
		'lon': -70.6430669781833
	},
	{
		'title':'Valparaíso',
		'lat': -33.04501553020392,
		'lon': -71.6204477643352
	},
	{
		'title':'Medellin',
		'lat': 6.211369101712767, 
		'lon': -75.57324431021308
	},
	{
		'title':'Guatapé',
		'lat': 6.233505156823787, 
		'lon': -75.15856521791905
	},
	{
		'title':'Piedra del Peñol',
		'lat': 6.220227940407645,  
		'lon': -75.1792477762925
	},
	{
		'title':'Lima',
		'lat': -12.159610920274023,  
		'lon': -76.97501449108036
	},
	{
		'title':'Cuscu',
		'lat': -13.516406857687572, 
		'lon': -71.97890070507565
	},
	{
		'title':'Vinicunca Rainbow Mountain',
		'lat': -13.869665425735144, 
		'lon': -71.30299015562994
	},
	{
		'title':'Machu Picchu',
		'lat': -13.163068062115993,  
		'lon': -72.54488511937575
	},
	{
		'title':'Pisac',
		'lat': -13.422270403381646,
		'lon': -71.85081184576204
	},
    {
		'title':'Washington - DC',
		'lat': 38.89333681545334, 
		'lon': -77.01055408319965
	}
	 
]

//Group
let myMarkers = L.featureGroup();

//End globals


var map = L.map('map').setView([-5.08827,-42.81056], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-5.08827,-42.81056]).addTo(map)
		.bindPopup('<a href="http://www.ifpi.edu.br">LAEIFPI - IFPI</a><br> Where Eduilson spends most of his work time')
		.openPopup();	

// loop through data
data.forEach(function(item){
	// create marker
	let marker = L.marker([item.lat,item.lon]).bindPopup(item.title)

	// add marker to featuregroup
	myMarkers.addLayer(marker)
})

// after loop, add the FeatureGroup to map
myMarkers.addTo(map)

// zoom to the extent of all markers
map.fitBounds(myMarkers.getBounds())