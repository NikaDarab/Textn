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
    let msg = document.getElementById("input-text");
    let list = document.getElementById("messages-list");
    let question = document.createElement("li");
    let questionText = document.createTextNode(msg.value + "  " + date);
    question.classList.add("question");
    question.appendChild(questionText);
    list.appendChild(question);
    if (know[msg.value]) {
        let answer = document.createElement("li");
        let answerText = document.createTextNode(know[msg.value] + "  " + date);
        answer.classList.add("response");
        answer.appendChild(answerText);
        list.appendChild(answer);
    } else {
        let idk = document.createElement("li");
        let idkText = document.createTextNode('I don\'t know' + "  " + date);
        idk.classList.add("response");
        idk.appendChild(idkText);
        list.appendChild(idk);
    }
    msg.value = "";
};