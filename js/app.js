const quizdatas = [
    {
        question:"What does CSS stand for ?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Corlorful Style Sheets",
        correct:"b"
    },

    {
        question:"What is the correct CSS syntax for making all the <span> elements bold?",
        a:"span {text-size:bold}",
        b:"span{font-weight:bold}",
        c:"<span style='font-size:bold'>",
        d:"<span style='text-size:bold'>",
        correct:"b"
    },

    {
        question:"What property is used to change the text color of an element?",
        a:"fontcolor:",
        b:"textcolor",
        c:"color",
        d:"font-color",
        correct:"c"
    },

    {
        question:"The # symbol specifies that the selector is?",
         a:"class",
        b:"tag",
        c:"first",
        d:"id",
        correct:"d"
    },
    {
        question:"Which is the correct CSS syntax?",
        a:"{p:color=black(p}",
        b:"p{color:black;}",
        c:"{p;color:black}",
        d:"p:color=black",
        correct:"b"
    },
    {
        question:"Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
        a:"#header {height:30px;width:750px;color:black;}",
        b:".header {height:30px;width:750px;colour:black;}",
        c:"#header {height:30px;width:750px;text:black;}",
        d:".header {height:30px;width:750px;color:black;}",
        correct:"a"
    },
    {
        question:"How do you make a list not display bullet points?",
         a:"list-style-type:no-bullet",
        b:"list:none",
        c:"bulletpoints:none",
        d:"list-style-type:none",
        correct:"d"
    },
    {
        question:"What is the correct CSS syntax to change the font name?",
         a:"font-name:",
        b:"font:",
        c:"font-family:",
        d:"fontname:",
        correct:"c"
    },
    {
        question:"How do you make each word in a text start with a capital letter?",
         a:"text-transform:capitalize",
        b:"text-transform:uppercase",
        c:"you can't do that with css",
        d:"text-capitalize",
        correct:"a"
    },
    {
        question:"Which CSS property controls the text size?",
         a:"font-height",
        b:"text-size",
        c:"font-size",
        d:"text-style",
        correct:"c"
    },
    {
        question:"How do you insert padding so that it is:10 pixels at the top 15 pixels at the bottom 5 pixels at the right 10 pixels to the left?",
         a:"padding: 10px 15px 5px 10px;",
        b:"padding: 15px 5px 10px 10px;",
        c:"padding: 10px 5px 10px 15px;",
        d:"padding: 10px 5px 15px 10px;",
        correct:"d"
    },
    {
        question:"How do you display hyperlinks without an underline?",
         a:"a{decoration:no underline}",
        b:"a{text-decoration:none}",
        c:"a{hyperlink:no underline}",
        d:"a{text-decoration:no underline}",
        correct:"b"
    },

    {
        question:"How can you created rounded corners using CSS3?",
         a:"border[round]:30px",
        b:"corner-effect:round",
        c:"border-radius:30px",
        d:"alpha-effect:round-corner;",
        correct:"c"
    },
    {
        question:" How do you add shadow to elements in CSS3?",
         a:"box-shadow: 10px 10px 5px grey;",
        b:"shadow-right: 10px shadow-bottom: 10px;",
        c:"shadow-color: grey;",
        d:"alpha-effect[shadow]: 10px 10px 5px grey;",
        correct:"a"
    },
    {
        question:"How to add text shadow using CSS3?",
         a:"font: shadowed 5px 5px 5px grey;",
        b:"font-shadow: 5px 5px 5px grey;",
        c:"text-shadow: 5px 5px 5px grey;",
        d:"shadow: text 5px 5px 5px grey;",
        correct:"c"
    },
    {
        question:"How to rotate objects using CSS3?",
         a:"object-rotation: 30deg;",
        b:"transform: rotate(30deg);",
        c:"rotate-object: 30deg;",
        d:"transform: rotate-30deg-clockwise;",
        correct:"b"
    },
    {
        question:"How to create transition effects using CSS3?",
         a:"transition: width 2s;",
        b:"transition-duration: 2s; transition-effect: width;",
        c:"alpha-effect: transition (width,2s);",
        d:"None",
        correct:"a"
    },
    {
        question:"Look at the code. What piece of code is missing when make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }",
         a:"the color",
        b:"the element",
        c:"the id name",
        d:"the text shadow height",
        correct:"a"
    },
    {
        question:"What does RGBa mean?",
         a:"Review Get assistance Back-up your information acquire proof",
        b:"Red Green Blue alpha",
        c:"Red Gray Brown alpha",
        d:"Red Gold Black alpha",
        correct:"b"
    },
    {
        question:"__________ is a property that allows developers to add rounded corners on the design elements.",
         a:"Corner",
        b:"Box Shadow",
        c:"Round Corner",
        d:"Border-Radius",
        correct:"d"
    },
    {
        question:"Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?",
         a:"-webkit-",
        b:"-moz-",
        c:"-o-",
        d:"-gecko-",
        correct:"b"
    },
    {
        question:"How do four values work on border-radius",
         a:"top, bottom, left, right",
        b:"up, down, front, behind",
        c:"top-left, top-right, bottom-right, bottom-left",
        d:"bottom-left, bottom-right, top-right, top-left",
        correct:"c"
    }
    

];

// UI 

const quiz = document.getElementById('quiz')
const questionel = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text'),
      b_text = document.getElementById('b_text'),
      c_text = document.getElementById('c_text'),
      d_text = document.getElementById('d_text');

const submitbtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;
function loadquiz(){

    deselectanswers();
    
    const currentquizdata = quizdatas[currentquiz];

    questionel.textContent = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
    

}

loadquiz();

function getselected(){
    let answer;

    answerels.forEach(answerel=>{
        if(answerel.checked){
            answer = answerel.id;
        }
    });

    return answer;
}

// uncheck 
function deselectanswers(){
    answerels.forEach(answerel=>answerel.checked = false);
}

submitbtn.addEventListener('click',()=>{
    const answer = getselected();

    // console.log(answer); 

    if(answer){

        if(answer === quizdatas[currentquiz].correct){
            score++;
        }
        currentquiz++;
        // console.log(score);

        if(currentquiz < quizdatas.length){
            loadquiz();
        }else{
            quiz.innerHTML=`
                <h2>You answered correctly at ${score} / ${quizdatas.length} question </h2>
                <<button class="btn" onclick="location.reload()">Reload</button>
            `;
            
}
    }
});