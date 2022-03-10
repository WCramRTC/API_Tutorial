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
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in augue purus. Aenean bibendum vestibulum suscipit. Pellentesque at fermentum lectus. Quisque sollicitudin luctus fringilla. Curabitur ultricies maximus congue. Curabitur ultricies leo ligula, vel iaculis purus hendrerit ut. Phasellus pretium sagittis urna eu malesuada."
},
{title: "Post 2",
date: "03/09/2022",
post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in augue purus. Aenean bibendum vestibulum suscipit. Pellentesque at fermentum lectus. Quisque sollicitudin luctus fringilla. Curabitur ultricies maximus congue. Curabitur ultricies leo ligula, vel iaculis purus hendrerit ut. Phasellus pretium sagittis urna eu malesuada."
}
]

blog.forEach(element => {
display.innerHTML +=  element.title + "<br>" +element.date + "<br>Post:" + element.post;
    
})



function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

JSON.parse()
JSON.stringify()

usage:
readTextFile("./json/test.json", function(text){
    var data = JSON.parse(text);
    data.forEach(element => {
        display.innerText += element.name + "\n";
    });
    display.innerText = data[0].name;
    console.log(data);
});

