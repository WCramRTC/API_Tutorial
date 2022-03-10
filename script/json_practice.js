const display = document.getElementById("json_display");


let emp = [{name: "Will", job: "CSI Professor"}, {name: "Dylan", job: "Senior Game Developer"}];

display.innerHTML = emp[1].name + " " + emp[1].job;



// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// //usage:
// readTextFile("./json/test.json", function(text){
//     var data = JSON.parse(text);
//     data.forEach(element => {
//         display.innerText += element.name + "\n";
//     });
//     // display.innerText = data[0].name;
//     console.log(data);
// });

