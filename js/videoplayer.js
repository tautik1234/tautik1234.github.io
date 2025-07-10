const videos = [
    `<iframe src="https://drive.google.com/file/d/1MqJzU5R1KGOAyxpJFfuvraHIO1Lhjjz-/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1W3rZWMInZeKdwUQd63IR4-4osEVGgQk3/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1hZrGOxjtB5EOQBEooUjKFiDt2QLjaY2v/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1BO2HPord0DYnlhoHiw4xqQdY-ULHaaDM/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1aZV-BTVB4UwfPChzlL5C8xIRhN5NM_M4/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1LWXe1xqhLrUpHVINldULh3N3FgsrTFvn/preview" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>`
]

let cards=document.getElementsByClassName("cards");
for(let i=0;i<cards.length;i++) {
    cards[i].addEventListener("click",function() {
        let player = document.getElementById("video-player-bg");
        let video = document.getElementById("main-video");
        video.innerHTML=videos[i];
        player.classList.toggle("active");
    })       
}

function openvideo() {

    // let player = document.getElementById("video-player-bg");
    // let video = document.getElementById("main-video");
    // video.play();
    // player.classList.toggle("active");
}

function closevideo() {
    let player = document.getElementById("video-player-bg");
    let video = document.getElementById("main-video");
    video.innerHTML="";
    player.classList.toggle("active");
}
