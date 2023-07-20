console.log("çalişti");
var Soru = /** @class */ (function () {
    function Soru(sorumetni, siklar, cevap) {
        this.sorumetni = sorumetni;
        this.siklar = siklar;
        this.cevap = cevap;
    }
    return Soru;
}());
var hangisoru = 0;
var correct = 0;
function checkAnswer() {
    var selectedAnswer;
    var radios = document.getElementsByName('answer');
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (radio.checked) {
            selectedAnswer = radio.value;
            break;
        }
    }
    // compare the selected answer to the correct answer
    if (selectedAnswer === sorular[hangisoru].cevap) {
        correct++;
    }
    hangisoru++;
    if (hangisoru < sorular.length) {
        Run(sorular);
    }
    else {
        console.log("Sorular bitti.");
        console.log(correct);
        var correctanswer = document.querySelector(".correct-answer");
        correctanswer.classList.remove("inactive");
        correctanswer.innerHTML = "<p>You scored " + correct + "/" + "5" + "<p>";
        console.log(correctanswer);
    }
}
function take() {
    var girisDiv = document.getElementById("giris");
    girisDiv.style.display = "none";
    var background = document.getElementById("body");
    background.style.backgroundImage = "url('photo2.jpg')";
    var quizContainer = document.querySelector(".quiz-container");
    quizContainer.classList.remove("inactive");
}
var soru1 = new Soru(" What planet, never previously mentioned in a Star Wars movie , is invaded by the Trade Federation in The Phantom Menace?", { a: "Sullust", b: "Kamino", c: "Naboo", d: "Tattoine" }, "Naboo");
var soru2 = new Soru(" What color is the Naboo Starfighter in The Phantom Menace?", { a: "Yellow", b: "Blue", c: "White and Red", d: "Black" }, "Yellow");
var soru3 = new Soru("Where does the opening scene of A New Hope take place?", { a: "Death Star", b: "Leia's Starship", c: "Naboo", d: "Alderaan" }, "Leia's Starship");
var soru4 = new Soru("How many action sequences take place simultaneously towards the end of The Phantom Menace?", { a: "4", b: "8", c: "2", d: "1" }, "4");
var soru5 = new Soru("How long did Padmé serve as queen?", { a: "4 years", b: "1 year", c: "6 years", d: "8 years" }, "8 years");
var sorular = [soru1, soru2, soru3, soru4, soru5];
function Run(sorular) {
    var question = document.getElementById("question");
    question.innerHTML = "<h2>" + (hangisoru + 1) + "-" + sorular[hangisoru].sorumetni + "</h2>";
    var radio1 = document.getElementById("answer1");
    var label1 = document.getElementById("label1");
    label1.innerHTML = sorular[hangisoru].siklar.a;
    radio1.value = sorular[hangisoru].siklar.a;
    var radio2 = document.getElementById("answer2");
    var label2 = document.getElementById("label2");
    label2.innerHTML = sorular[hangisoru].siklar.b;
    radio2.value = sorular[hangisoru].siklar.b;
    var radio3 = document.getElementById("answer3");
    var label3 = document.getElementById("label3");
    label3.innerHTML = sorular[hangisoru].siklar.c;
    radio3.value = sorular[hangisoru].siklar.c;
    var radio4 = document.getElementById("answer4");
    var label4 = document.getElementById("label4");
    label4.innerHTML = sorular[hangisoru].siklar.d;
    radio4.value = sorular[hangisoru].siklar.d;
}
Run(sorular);
