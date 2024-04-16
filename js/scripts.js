/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var isContentShown_1 = false; 
var isContentShown_2 = false;
var isContentShown_3 = false;
var isContentShown_4 = false;
var isContentShown_5 = false;
var isContentShown_6 = false;

function showMoreContent(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 1 && !isContentShown_1) {
        var cardText = document.querySelector('#card-text-1');
        cardText.innerHTML += " Workstations (DAWs). These programs let composers record, edit, and mix music using virtual instruments and effects. Computers also help connect keyboards and controllers for playing and controlling these instruments, making composing easier.";

        isContentShown_1 = true;
    }
}

function showMoreContent2(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 2 && !isContentShown_2) {
        var cardText = document.querySelector('#card-text-2');
        cardText.innerHTML += " arrange music tracks, and it has features like virtual instruments and audio effects. DAWs are like studios on your computer, where you can create and polish your music until it sounds just right.";

        isContentShown_2 = true;
    }
}

function showMoreContent3(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 3 && !isContentShown_3) {
        var cardText = document.querySelector('#card-text-3');
        cardText.innerHTML += " With its keys sensitive to touch, it captures the dynamics of playing like a traditional instrument. This makes inputting melodies and chords into recording software easier. It's like having a musical instrument that connects directly to your computer, making it simpler to create music that sounds just the way you want.";

        isContentShown_3 = true;
    }
}

function showMoreContent4(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 4 && !isContentShown_4) {
        var cardText = document.querySelector('#card-text-4');
        cardText.innerHTML += " mixing and mastering, letting producers make precise adjustments to ensure the music sounds great on any system. Having good speakers or headphones is key to making professional-quality music.";

        isContentShown_4 = true;
    }
}

function showMoreContent5(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 5 && !isContentShown_5) {
        var cardText = document.querySelector('#card-text-5');
        cardText.innerHTML += " into their computer. They can plug in instruments or microphones and capture their performances with clarity. It's like having a professional recording studio at home, making it easier to add live instruments or vocals to compositions and get great-sounding recordings without hassle.";

        isContentShown_5 = true;
    }
}

function showMoreContent6(event, cardIndex) {
    event.preventDefault(); 
    
    if (cardIndex === 6 && !isContentShown_6) {
        var cardText = document.querySelector('#card-text-6');
        cardText.innerHTML += " and emotion to compositions, allowing live performances and vocal tracks. With different types available for various recording needs, composers can personalize their music and authentically bring their ideas to life.";

        isContentShown_6 = true;
    }
}


document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表單默認提交行為

    // 獲取用戶輸入的評論
    var comment = document.getElementById("commentInput").value;

    // 創建一個新的留言區塊
    var commentContainer = document.createElement("div");
    commentContainer.classList.add("mb-4");

    // 留言者名稱和內容
    var commenterContent = document.createElement("div");
    commenterContent.classList.add("ms-3");
    var commenterName = document.createElement("div");
    commenterName.classList.add("fw-bold");
    commenterName.textContent = "Commenter Name";
    var commentText = document.createElement("div");
    commentText.textContent = comment;
    commenterContent.appendChild(commenterName);
    commenterContent.appendChild(commentText);
    commentContainer.appendChild(commenterContent);

    // 將新的留言區塊添加到留言區
    var messagesContainer = document.getElementById("messages");
    messagesContainer.appendChild(commentContainer); // 這一行添加了新的留言區塊到留言區容器中

    // 清空輸入框
    document.getElementById("commentInput").value = "";
});