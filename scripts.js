know = {
    "hello" : "hi",
    "hi": "hello",
    "how are you?" : "good",
    "what's up?": "just coding, how about you?",
    "I miss you!": "I miss you too!",
    "ok" : ":)"
};

let talk = () => {
    let date = new Date().toLocaleString();
    let msg = $('#input-text')[0];
    let list = $('#messages-list')[0];
    let question = document.createElement("li");
    $(question).addClass("question");
    let questionText = document.createTextNode(msg.value + "  " + date);
    $(question).append(questionText);
     list.appendChild(question);
    if (know[msg.value]) {
        let answer = document.createElement("li");
        let answerText = document.createTextNode(know[msg.value] + "  " + date);
        $(answer).addClass("response");
        $(answer).append(answerText);
        $(list).append(answer);
    } else {
        let idk = document.createElement("li");
        let idkText = document.createTextNode('I don\'t know' + "  " + date);
        $(idk).addClass("response");
        $(idk).append("I don't know"+ "  " + date);
        $(list).append(idk);
    }
    (msg.value) = "";
}; 