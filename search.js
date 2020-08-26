// Recieving Json files 
var objcafes;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json', false);
xhr.onload = function () {
    if (this.status === 200) {

        data = this.responseText;
        objcafes = JSON.parse(data);

        for (i = 0; i < objcafes.cafes.length; i++) {
            var cafedata = objcafes.cafes[i];
            var cafename = cafedata["name"];
            let myTable = document.getElementById('myTable');
            let tr = myTable.getElementsByTagName('tr');

            let td = tr[i + 1].getElementsByTagName('td')[1];
            td.innerHTML = cafename;
            console.log(td);

        }

    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();



xhr.open('GET', 'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json', false);
xhr.onload = function () {
    if (this.status === 200) {

        data1 = this.responseText;
        placeobj = JSON.parse(data1);

        for (k = 0; k < 8; k++) {
            cal = objcafes.cafes[k];
            sal = cal["location_id"];
            for (l = 0; l < 8; l++) {
                tal = placeobj.places[l];
                chal = tal["id"];
                if (sal == chal) {
                    console.log("match");
                    let myTable = document.getElementById('myTable');
                    let tr = myTable.getElementsByTagName('tr');

                    let td = tr[k + 1].getElementsByTagName('td')[2];
                    td.innerHTML = tal["locality"];


                }
            }

        }

        for (k = 0; k < 8; k++) {
            cal = objcafes.cafes[k];
            sal = cal["location_id"];
            for (l = 0; l < 8; l++) {
                tal = placeobj.places[l];
                chal = tal["id"];
                if (sal == chal) {
                    console.log("match");
                    let myTable = document.getElementById('myTable');
                    let tr = myTable.getElementsByTagName('tr');

                    let td = tr[k + 1].getElementsByTagName('td')[3];
                    td.innerHTML = tal["postal_code"];


                }
            }

        }

        for (k = 0; k < 8; k++) {
            cal = objcafes.cafes[k];
            sal = cal["location_id"];
            for (l = 0; l < 8; l++) {
                tal = placeobj.places[l];
                chal = tal["id"];
                if (sal == chal) {
                    console.log("match");
                    let myTable = document.getElementById('myTable');
                    let tr = myTable.getElementsByTagName('tr');

                    let td = tr[k + 1].getElementsByTagName('td')[4];
                    td.innerHTML = tal["lat"];


                }
            }

        }
        for (k = 0; k < 8; k++) {
            cal = objcafes.cafes[k];
            sal = cal["location_id"];
            for (l = 0; l < 8; l++) {
                tal = placeobj.places[l];
                chal = tal["id"];
                if (sal == chal) {
                    console.log("match");
                    let myTable = document.getElementById('myTable');
                    let tr = myTable.getElementsByTagName('tr');

                    let td = tr[k + 1].getElementsByTagName('td')[5];
                    td.innerHTML = tal["long"];


                }
            }

        }


    }
    else {
        console.log("Some error occured");
    }

}
xhr.send();


// Filtering js
const searchCafe = () => {
    var filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            }
            else {
                tr[i].style.display = 'none';
            }
        }
    }
    

}

//finding the address lat and long
function Match(objcafe, objplace) {
    var place, placetrue;
    for (let i = 0; i < 8; i++) {
        let club = objplace.places[i];

        for (j = 0; j < 11; j++) {

            let sub = objcafe.cafes[i];
            let dub = sub.location_id;
            if (dub == club);
            {
                return objplace.places[i];
            }
        }

    }

}