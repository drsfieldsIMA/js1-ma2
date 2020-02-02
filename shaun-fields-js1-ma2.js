//****************************************************************************************
// Question 1
// Create a function expression by assigning an anonmyous function to a variable called 
// myFunctionExpression. The function should console log your name. 

function logTheArgument(someFunction) {
    someFunction();
}

// assign the function to a variable
const myFunctionExpression = function() {
    console.log("Shaun Fields");
};

logTheArgument(myFunctionExpression);
// 1st Answer                        Shaun Fields                shaun-fields-js1-ma2.js:12
//****************************************************************************************
// Question 2
// Select the input in the HTML below by its class. Add a click event listener. The callback
// function passed to the event listener should log the sentence I was clicked.
// You can pass the function in directly, declare it and pass it in by its name or assign it 
// to a variable and pass it in by the variable name.
const butt = document.querySelector(".btn");

butt.addEventListener("click", function() {
                                            console.log("I was clicked")
                                        }
                    );
// 2nd Answer                        I was clicked               shaun-fields-js1-ma2.js:26                                                   
//****************************************************************************************
// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.
let input = document.querySelector('#firstName');

input.addEventListener("keydown", function() {console.log("key", event.key)});
// 3rd Answer with User Input = press the keboard keys "q" "w" "e"                       
//  key q                                                       shaun-fields-js1-ma2.js:34
//  key w
//  key e                              
//****************************************************************************************
// Question 4
// Select the button in the HTML below by its tag. Add a mouseover event listener. 
// The callback function should add a class called hover to the button.
// <button class="btn" data-animal="dog">Hover over me</button>
let button = document.querySelector("button");

    function callOnHover() {
        button.classList.add("hover");
       
        console.log(button.classList.value)
    };

button.addEventListener("mouseover", callOnHover);
// 4th Answer with User Input = mouseover
// btn hover                                                    shaun-fields-js1-ma2.js:51
//************************************************************************************************
// Question 5
// Select the button in the HTML below by its data attribute and add a mouseout event listener to it.
// The callback function should remove the class called hover from the button.
//  <button class="btn" data-animal="dog">Hover over me</button
button = document.querySelector("[data-animal='dog']");

    function callOutHover() {
         button.classList.remove("hover");

         console.log(button.classList.value)
    };

button.addEventListener("mouseout", callOutHover);
// 5th Answer with User Input = mouseout    
// btn                                                           shaun-fields-js1-ma2.js:67
//****************************************************************************************
// Question 6
// Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
// The callback function should log the value of the data attribute on each element when the cursor moves over it.
// <ul>
// <li data-animal="goose">Animal 1</li>
// <li data-animal="frog">Animal 2</li>
// <li data-animal="elephant">Animal 3</li>
// </ul>
let matches = document.getElementsByTagName('li');

for(let i=0 ; i < matches.length; i++)
        {
        matches[i].addEventListener("mouseover", 
                                    function(event){   
                                                    // highlight the mouseover target
                                                    event.target.style.color = "red";

                                                    console.log(matches[i].dataset.animal)
                                                    // reset the color after a short delay
                                                    setTimeout(
                                                        function() {
                                                                    event.target.style.color = "";
                                                        }, 
                                                            500);

                                                    },false
                            );
        }
// 6th Answer with User Input = mouseover on each of the animals "Animal 1" "Animal 2" "Animal 3"
// goose                                             shaun-fields-js1-ma2.js:91
// frog
// elephant
//****************************************************************************************
// Question 7
// Convert the if-else-if statement below to a switch statement.
// Use the code inside the else block in the default block in the switch.
//  
// const animal = "cow";
// if(animal === "cat") {
//    console.log("Meow");
// }
// else if(animal === "cow") {
//    console.log("Moo");
//}
//else if(animal === "bird") {
//    console.log("Tweet");
//}
//else {
//    console.log("Harrumph");
//} 
// get genre value from the data-genre attribute
const animal = "cow";

            switch(animal) {

                case "cat":
                    console.log("Meow");
                    break;

                case "cow":
                    console.log("Moo");
                    break;

                case "bird":
                    console.log("Tweet");
                    break;

                default:
                    console.log("Harrumph");
            }
// 7th Answer- Moo                                                        shaun-fields-js1-ma2.js:134                                                                  
//*****************************************************************************************
// Question 8
// Convert the for loop code below to a forEach loop.
//
const sheep = ["Malcolm", "Anders", "Marie"];

    function handleEachSheep(sheep) {
        console.log(sheep);
    } 

sheep.forEach(handleEachSheep);
// 8th Answer   
//              Malcolm                                                shaun-fields-js1-ma2.js:152
//              Anders
//              Marie
//******************************************************************************************
// Question 9
// Create a timer that logs the word hello every half a second. 
// It must stop after its logged the word 6 times.

const counterContainer = document.querySelector(".counter");

    function updateDiv() {

        counterContainer.innerHTML += " hello";
                            
            // cancel the timer after the counter reaches 6 which means hello has been logged 6 times
            if(counter === 6) {
                clearInterval(intervalId);
            }
                            
        counter++;
    }

let counter = 1;
const intervalId = setInterval(updateDiv, 500);
// 9th Answer Displayed on the html file after 6 seconds 
// 
// hello hello hello hello hello hello 
//******************************************************************************************
// Question 10
// Select the div from the HTML below. Write code that updates the div's text to say Text 
// updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text.
// <div class="container">Placeholder text</div>
const timeoutContainer = document.querySelector("div.container");
// the function to run after the delay
    function updateText() {

        timeoutContainer.innerHTML = "Text updated after waiting 2 seconds";
    }
// 2000 milliseconds = 2 seconds
// The div's innerHTML will be updated after two seconds.
setTimeout(updateText, 2000);
// 10th Answer Displayed on the html file after 2 seconds 
// 
// Text updated after waiting 2 seconds 