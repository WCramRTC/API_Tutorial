const display = document.getElementById("json_display");
const title = document.getElementById("title");

// let petArr = ["Mochi", "Corgi"];

let emp = [
    {name: "Will", job: "CSI Professor"}, 
    {name: "Dylan", job: "Senior Game Developer"}
];

let blog = [
    {title: "Post 1",
    date: "03/09/2022",
    post: "This is the first post"
},
{title: "Post 2",
date: "03/09/2022",
post: "This is a second post"
}
]

blog.forEach(element => {
    // display.innerHTML +=  element.title + "<br>" +element.date + "<br>Post:" + element.post + "<br><br>";

    display.innerHTML += `<h3> ${element.title} </h3>
    <p class="date">${element.date}</p>
    <p class="post">${element.post}</p>
    
    `;
    
})



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


// usage:
// readTextFile("./json/test.json", function(text){
//     var data = JSON.parse(text);
//     data.forEach(element => {
//         display.innerText += element.name + "\n";
//     });
//     console.log(data);
// });

