const tvlContent = document.getElementById("travel-content");
const btnTest = document.getElementById("btn-test");
btnTest.addEventListener('click', function() {
    // createPost("Columbia Tower","Seattle, WA","03/15/2022","I took this at the base of columbia Tower","../image/CC_Base.jpeg");
});


// window.onload = function() {
    
// }


let posts = [
    {title: "Will", location: "CSI Professor", date: date.now(), content: "Content", image: ""}
];

function addContent() {
    
}

// function createPost(title, location, date, content, image) {
//     let div = document.createElement("div");
//     div.classList.add("travel-post");

//     // let title = document.createElement("h3");
//     // let titleContent = document.createTextNode(title);
//     // title.appendChild(titleContent);
//     // div.appendChild(title);

    
//     let i = document.createElement("img");
//     i.src = image;
//     div.appendChild(i);

//     let t = document.createElement("h3");
//     t.innerText = title;
//     t.classList.add("title");
//     div.appendChild(t);

//     let l = document.createElement("p");
//     l.innerText = location;
//     l.classList.add("location");
//     div.appendChild(l);

//     let d = document.createElement("p");
//     d.innerText = date;
//     d.classList.add("date");
//     div.appendChild(d);

//     let cont = document.createElement("p");
//     cont.innerText = title;
//     cont.classList.add("post-content");
//     div.appendChild(cont);

//     tvlContent.appendChild(div);
// }

{/* <div class="travel-post">
<img src="image/IMG_0163.JPEG" alt="Columbia Tower">
<h3 class="title">Title</h3>
<p class="location">Location</p>
<p class="date">Date</p>
<p class="post-content">Content</p>
</div> */}