window.onload = function(){
	//Setting map location
	var map = L.map('map').setView([30.288, -97.746], 15);

	//Adding map tile layer
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWhrZWVibGVyIiwiYSI6ImNpZ2licGIzaDd2N2R1Mm01dDFhamQ0cG4ifQ.Htc1t7UMP-r_BJejuq9MXA', {
		attribution: 'Map by Adam Humphrey, Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
		id: 'mapbox.streets'
	}).addTo(map)

	//Apartment Complex Polygons
	var QuartersSterling = L.marker([30.284993, -97.746109]).addTo(map).bindPopup("<b>Quarters Sterling House</b><br />Address: 709 W 22nd St.<br />Fee Paid on 6/19/05: $45,692");

	var QuartersCameron = L.marker([30.292447, -97.743846]).addTo(map).bindPopup("<b>Quarters Cameron House</b><br />Address: 2707 Rio Grande St.<br />Fee Paid on 8/1/06: $29,988");

	var QuartersMontgomery = L.marker([30.292252, -97.743170]).addTo(map).bindPopup("<b>Quarters Montgomery House</b><br />Address: 2700 Nueces St.<br />Fee paid on 8/1/06: $40,922");

	var TexanTower = L.marker([30.290082, -97.747371]).addTo(map).bindPopup("<b>Texan Tower</b><br />Address: 2505 San Gabriel St.<br />Fee paid on 3/9/07: $37,964");

	var BlockPearlSouth = L.marker([30.285604, -97.746720]).addTo(map).bindPopup("<b>The Block on Pearl South</b><br />Address: 2200 Pearl St.<br />Fee paid on 8/15/07: $22,948.5");

	var BlockPearlNorth = L.marker([30.286012, -97.746677]).addTo(map).bindPopup("<b>The Block on Pearl North</b><br />Address: 2208 Pearl St.<br />Fee paid on 8/15/07: $22,256.5");

	var BlockOn28 = L.marker([30.293207, -97.744683]).addTo(map).bindPopup("<b>The Block on 28th</b><br />Address: 701 W. 28th St.<br />Fee paid on 8/15/07: $48,579.5")

	var TexasShoalCreek = L.marker([30.300152, -97.746605]).addTo(map).bindPopup("<b>Texas Shoal Creek</b><br />Address: 3098 N. Lamar Blvd.<br />Fee paid on 5/15/08: $36,407.5")

	var TexanAtPearl = L.marker([30.290513, -97.746279]).addTo(map).bindPopup("<b>Texan at Pearl</b><br />Address: 2515 Pearl St.<br />Fee paid on 8/1/08: $34,418")

	var KarnesHouse = L.marker([30.286371, -97.745669]).addTo(map).bindPopup("<b>Karnes House</b><br />Address: W. 22 1/2 St.<br />Fee paid on 8/5/08: $164,743.5")

	var West26 = L.marker([30.291275, -97.743605]).addTo(map).bindPopup("<b>26 West</b><br />Address: 600 W. 26th St.<br />Fee paid on 8/5/08: $200,981.5")

	var BlockOnRio = L.marker([30.295069, -97.743559]).addTo(map).bindPopup("<b>The Block on Rio Grande</b><br />Address: 2819 Rio Grande St.<br />Fee paid on 8/15/08: $97,240.5")

	var BlockOn23 = L.marker([30.287020, -97.746738]).addTo(map).bindPopup("<b>The Block on 23rd</b><br />Address: 2222 Pearl St.<br />Fee paid on 8/20/08: $45,940")

	var Galileo = L.marker([30.289656, -97.747416]).addTo(map).bindPopup("<b>Galileo at 25th</b><br />Address: 910 W 25th St.<br />Fee paid on 8/20/08: $29.389.5")

	var Rio21 = L.marker([30.284301, -97.744734]).addTo(map).bindPopup("<b>21 Rio</b><br />Address: 2101 Rio Grande St.<br />Fee paid on 10/1/09: $78,332")

	var VintageWestCampus = L.marker([30.286522, -97.747149]).addTo(map).bindPopup("<b>Vintage West Campus</b><br />Address: 904 W. 22nd 1/2 St.<br />Fee paid on 10/1/09: $26,860");

	var GrandMarc = L.marker([30.290898, -97.742449]).addTo(map).bindPopup("<b>Grand Marc at 26th</b><br />Address: 510 W. 26th St.<br />Fee paid on 6/21/12: $54,638.25");

	var Salado2608 = L.marker([30.291626, -97.745525]).addTo(map).bindPopup("<b>2608 Salado</b><br />Address: 2608 Salado St.<br />Fee paid on 6/8/12: $6,447.5");

	var Elloras = L.marker([30.284970, -97.747474]).addTo(map).bindPopup("<b>West Campus Elloras</b><br />Address: 908 W. 21st St.<br />Fee paid on 6/26/12: $4,435.5");

	var LonghornLux = L.marker([30.288724, -97.750590]).addTo(map).bindPopup("<b>Longhorn Lux</b><br />Address: 2401 Longview St.<br />Fee paid on 1/13/13: $31,404");

	var Callaway = L.marker([30.284755, -97.743449]).addTo(map).bindPopup("<b>The Callaway House</b><br />Address: 505 W. 22nd St.<br />Fee paid on 5/24/13: $87,795");

	var SanPedroFlats = L.marker([30.293089, -97.746065]).addTo(map).bindPopup("<b>San Pedro Flats</b><br />Address: 2708 San Pedro St.<br />Fee paid on 3/4/14: $6,828.5");

	var RegentsAt24 = L.marker([30.288470, -97.747485]).addTo(map).bindPopup("<b>Regents West at 24th</b><br />Address: 2401 San Gabriel St.<br />Fee paid on 7/15/14: $49,731.5");

	var Texan26 = L.marker([30.290785, -97.748576]).addTo(map).bindPopup("<b>Texan 26</b><br />Address: 1009 W. 26th St.<br />Fee paid on 11/4/14: $36,075.5");

	var VillasOn26 = L.marker([30.288470, -97.747485]).addTo(map).bindPopup("<b>The Villas on 26th</b><br />Address: 800 W. 26th St.<br />Fee paid on 12/11/14: $39,422");
}