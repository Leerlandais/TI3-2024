
// Pour commencer, nous devrons obtenir le JSON.
fetch("?json")
    .then(function(response){
        response.json().then(function(data){
            makeMarkersForMap(data);
            createListForHomepage(data);
        });

        })
        .catch(function(error){
            console.log(error.message);
    });

// Et, bien sûr, nous allons avoir besoin d'ajouter la carte.
const map = L.map('map').setView([52.825, -4.338], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

/*
    const markerTable = [];

function makeMarkersForMap(datas){
    for (let data in datas){
        let mapMarker = L.marker([datas[data].lat, datas[data].lon]).addTo(map);
        /* mettre le nom de l'item dans un popup */
 //       mapMarker.bindPopup(`<h3>${datas[data].nom}</h3><p>${datas[data].add}</p>`);

        /* ajouter ce marqueur au tableau */
   //     markerTable.push(mapMarker);
 //   }

// placer le tableau de marqueurs dans le featureGroup */
// const markerGroup = new L.featureGroup(markerTable);

// adapter l'affichage de ma carte en fonction de la position des marqueurs */
// map.fitBounds(markerGroup.getBounds(),{padding:[10,10]});
// }
function makeMarkersForMap (datas) {
const markers = L.markerClusterGroup();
const markerTable = [];

for (let data in datas){

// change what's displayed on the icons

    let mapMarker = L.marker([datas[data].lat, datas[data].lon]);

    mapMarker.bindPopup(`<h3>${datas[data].nom}</h3><p>${datas[data].add}</p>`);
markers.addLayer(mapMarker);
markerTable.push(mapMarker);
}
map.addLayer(markers);
const groupe = new L.featureGroup(markerTable);

map.fitBounds(groupe.getBounds(), {padding:[10,10]});
}

// Comme l'indique clairement le nom de la fonction, créez la liste pour la page d'accueil.
function createListForHomepage(data){
    
    const cineJSON = document.getElementById("cineJSON");   // Rencontrez le grand-père !

    const UL = document.createElement("ul");  // Création du parent <ul>

        data.forEach(function(item){

            let LI = document.createElement("li");  // Création de l'enfant <li>

                // Ajout du HTML nécessaire (Éducation de l'enfant ;-D )
            LI.innerHTML = `<span class = "PUTOTHERCLASSHERE">
                                <span class="PUTCLASSHERE">${item.nom},</span>
                                <span class="PUTCLASSHERE">${item.adresse},</span>
                                <span class="PUTCLASSHERE">${item.codepostal},</span>
                                <span class="PUTCLASSHERE">${item.ville}.</span>
                                <span class="PUTCLASSHERE">
                                    <a href="${item.url}" target="_blank">Visite</a>
                                </span>
                            </span>`;

      //      LI.addEventListener('click', itemClick);    // Écoute pour des clics
                // Préparation pour le "flyTo"
            LI.setAttribute("id",`${item.id}`);
            LI.setAttribute("lat",`${item.latitude}`);
            LI.setAttribute("lon",`${item.longitude}`);

            UL.appendChild(LI); // Maintenant qu'ils ont été créés, ajoutez les enfants à leurs parents.
            
        });
        // Et enfin, présentez-les à leurs grands-parents
    cineJSON.appendChild(UL);
}

