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
	},
	{
		'title':'Wien',
		'lat': 48.20172499496315, 
		'lon': 16.38416934088646
	},
	{
		'title':'Praha',
		'lat': 50.086798281964114, 
		'lon': 14.428706578935302
	},
	{
		'title':'Dresden',
		'lat': 51.051775768044195, 
		'lon': 13.738844317208226
	},
	{
		'title':'Münster',
		'lat': 51.95883600118282, 
		'lon': 7.626812529733272
	},
	{
		'title':'Amsterdam',
		'lat': 52.37481351636909, 
		'lon': 4.895710991493268
	},
	{
		'title':'Berlin',
		'lat': 52.5148713326038, 
		'lon': 13.388988141306054
	},
	{
		'title':'Cambridge',
		'lat': 52.205975432534466, 
		'lon': 0.11985596673989965
	},
	{
		'title':'London',
		'lat': 51.50555492582728, 
		'lon': -0.108675632267634
	},
	{
		'title':'Tallahassee',
		'lat': 30.44146449773943, 
		'lon': -84.2850216973807
	},
	{
		'title':'Gainesville',
		'lat': 29.65561546374546, 
		'lon': -82.35011572467816
	},
	{
		'title':'Panama City',
		'lat': 30.15804923911138, 
		'lon': -85.65780080409598
	},
	{
		'title':'Kennedy Space Center',
		'lat': 28.56877344279317, 
		'lon': -80.64969564718162
	},
	{
		'title':'Walt Disney World',
		'lat': 28.369822510521825, 
		'lon': -81.51569034612257
	},
	{
		'title':'Tampa',
		'lat': 28.068142451872514, 
		'lon': -82.6531190562146
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
		.bindPopup('<a href="http://www.ifpi.edu.br">LAEIFPI - IFPI</a><br> Here, I spend my work time')
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