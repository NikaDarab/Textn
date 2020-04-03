// const chat = document.getElementById("empty-chat");
// const inputFld = document.getElementById("input-text");

// let postMsg = (e) => {
//     inputFld.addEventListener("keyup", (e) => {
//         if (e.keyCode === 13) {
//             e.preventDefault();
//             const chatList = createElement("ul");
//             const chatMsg = createElement("li");
//             let newMsg = document.createTextNode('Hello');
//             chatMsg.appendChild(newMsg);
//             chatList.appendChild(chatMsg);
//             chat.appendChild(chatList);
//             document.getElementById('send').click();
//         };
    
//         console.log("Post Msg works!");
//     });
// };
// const know = {
// "Hello" : "Hi",
// "How Are you?" : "good",
// "ok" : ":-)",
// };
// function talk() {
//     var user = document.getElementById("empty-chat").nodeValue;
//     document.getElementById("chatLog").innerHTML+= user+"<br>";
//     if (user in know){
//        document.getElementById("chatLog").innerHTML += know[user]+"<br>"; 
//     } else {
//       document.getElementById("chatLog").innerHTML +="I dont't understand...<br>";
//     }

// }