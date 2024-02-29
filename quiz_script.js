class Question {

    question;

    answer_a;
    answer_b;
    answer_c;

    score_a;
    score_b;
    score_c;
    
    constructor(_question, _answer_a, _answer_b, _answer_c, _score_a, _score_b, _score_c) {

        this.question = _question;

        this.answer_a = _answer_a;
        this.answer_b = _answer_b;
        this.answer_c = _answer_c;

        this.score_a = _score_a;
        this.score_b = _score_b;
        this.score_c = _score_c;

    }

}

let Solutions = [

    "Gratulálunk, te tudod, hogy kell igazán egészségesen élni. Ami nagyon fontos, hogy továbbra is figyelj oda a megfelelő hidratálásra és a rostbevitelre. Ha még nem próbáltad, akkor itt az ideje kipróbálni az alternatív fehérje megoldásokat is. Szuper egészséges és finom tud lenni. Egyre vigyázz, azért ne hajtsd túl magad. ;)",
    "Jó úton jársz, de még van mit javítani az étkezéseden. Figyelj a rost és a megfelelő fehérje bevitelre (hal, pulyka vagy csirke legyen a fő és a hüvelyes zöldségek). Nézz utána a mediterrán étrendnek, a tested meg fogja hálálni. A nassolást, amennyire lehet, mellőzd. A nyugodt alváshoz pedig elengedhetetlen a jó környezet, a sötét szoba. Nyugi, nincs szörny az ágy alatt. ;)",
    "Ajjaj, nagy a baj. Nem figyelsz az étkezésedre. Ha ezen nem változtatsz, komoly egészségügyi következményei is lehetnek (mint a cukorbetegség, a magas vérnyomás vagy a korai csontritkulás). Légy tudatos, egy életünk van. Javasoljuk, hogy a gyorsan felszívódó szénhidrátokat (vagy épp a szupergyorsan felszívódókat) -mint a nassok, sütemények, krumpli, rizs- cseréld lassan felszívódó szénhidrátokra – basmati rizs, hajdina, köles, kuszkusz- és fogyassz elég folyadékot. Minden nap legalább egy 4km-es távot sétálj le gyorssétával. Ha azt érzed, hogy nehézkes az alvás, akkor lefekvés előtt egy 30 perccel már ne nézz tv-t és ne használd a telefonodat sem. Így nyugodtabb lesz az alvásod és másnap nem kelsz fáradtan, ami miatt amúgy összezabálsz mindent."

];

let Questions = new Array();

let qIndex = 0;
let qMax = 13;

let score = 0;

fetch("questions.json")
    .then(json => json.json())
    .then(file => {

        file.questions.forEach(element => {

            Questions.push(new Question(element.question, element.answer_a, element.answer_b, element.answer_c, element.score_a, element.score_b, element.score_c))

        });

        Load();

    });

function Load() {

    LoadQuestion();

}

function LoadQuestion() {

    document.getElementById("question").innerHTML = Questions[qIndex].question;

    document.getElementById("answer_a").innerHTML = Questions[qIndex].answer_a + Questions[qIndex].score_a;
    document.getElementById("answer_b").innerHTML = Questions[qIndex].answer_b + Questions[qIndex].score_b;
    document.getElementById("answer_c").innerHTML = Questions[qIndex].answer_c + Questions[qIndex].score_c;

}

function Next() {

    if (!(document.getElementById("va").checked || document.getElementById("vb").checked || document.getElementById("vc").checked)) {

        alert("baj baj");

    }
    else {

        if (document.getElementById("va").checked) {

            score += Questions[qIndex].score_a;

        }
        else if (document.getElementById("vb").checked) {

            score += Questions[qIndex].score_b;

        }
        else if (document.getElementById("vc").checked) {

            score += Questions[qIndex].score_c;

        }

        qIndex++;

        if (qIndex == qMax) {

            let sIndex = 0;

            if (score < 31 && score > 21) {

                sIndex = 1;

            }
            else if (score > 30) {

                sIndex = 2;

            }

            document.getElementById("quiz-panel").style.display = "none";
            document.getElementById("solution-panel").style.display = "block";

            document.getElementById("solution").innerHTML = Solutions[sIndex];

        }
        else {

            LoadQuestion();

            /*document.getElementById("va").checked = false;
            document.getElementById("vb").checked = false;
            document.getElementById("vc").checked = false;*/

        }

    }

}