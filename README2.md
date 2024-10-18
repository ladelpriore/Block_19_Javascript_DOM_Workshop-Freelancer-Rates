//DOM: In the DOCUMENT select which OBJECT


document. ;

document.firstElementChild;  //Returns the first, first-level element, the Head of the website

document.firstElementChild.lastElementChild;  //Returns the last first-level element, the Body

document.firstElementChild.lastElementChild.firstElementChild;   //Returns the H1 tag from the body as the first element in the last elmeentt
     // Returns <h1>Hello</h1> 

document.firstElementChild.lastElementChild.firstElementChild; 

let heading = document.firstElementChild.lastElementChild.firstElementChild; 
    // returns heading  <h1>Hello</h1>

heading.innerHTML = "Good Bye";     //   Grabs the heading and changes the innerhtml value to good bye
    // REturns "Good Bye"

heading.style.color = "red";    // ****CHANGES HEADING TO COLOR RED!***
    //Returns "red"



document.querySelector
document.querySelector("input"); 
document.querySelector("input").click();    // //Use querySelector to select a specific element/object ("input") followed by a method (.click)
    //Selects the input button and simulates a user event clicking it


//DOM & Javascript Objects
//Javascript Objects use dot notation to access/edit
car.colour;     //ACCESS    Returns "red",  the color of the car
car.numberOfDoors = 0;  //EDIT  Sets the object property numberOfDoors to 0
car.drive();    //

//DOM uses Dot notation to access:
    //Properties
    innerHTML
    style
    firstChild

    //Methods
    .click()
    .appendChild()
    .setAttribute()










//DOM: In the DOCUMENT select which OBJECT
//Tree diagram: see document as hierarchy of html elements


____________________________________________________________________________________
//SELECTING elements by position
document.firstElementChild;  //Returns the first, first-level element, the Head of the website

document.firstElementChild.lastElementChild;  //Returns the last first-level element, the Body

document.firstElementChild.lastElementChild.firstElementChild;   //Returns the H1 tag from the body as the first element in the last elmeentt
     // Returns <h1>Hello</h1> 

document.firstElementChild.lastElementChild.firstElementChild; 

let heading = document.firstElementChild.lastElementChild.firstElementChild; 
    // returns heading  <h1>Hello</h1>

heading.innerHTML = "Good Bye";     //   Grabs the heading and changes the innerhtml value to good bye
    // REturns "Good Bye"

heading.style.color = "red";    // ****CHANGES HEADING TO COLOR RED!***
    //Returns "red"


_____________________________________________________________________________________
//SELECTING elements by name
document.querySelector
document.querySelector("input"); 
document.querySelector("input").click();    // //Use querySelector to select a specific element/object ("input") followed by a method (.click)
                                            //Selects the input button and simulates a user event clicking it


_______________________________________________________________________________________
//DOT notation to ACCESS/EDIT javascript objects 
car.colour;     //ACCESS    Returns "red",  the color of the car
car.numberOfDoors = 0;  //EDIT  Sets the object property numberOfDoors to 0
car.drive();    //

//Access Properties
innerHTML
style
firstChild
index

//Access Methods
.click()
.appendChild()
.setAttribute()

.style.color    //Change color
.length         //Count the elements
element.textContent    //Return the text content of an element:
element.textContent = "I have changed!";
        
__________________________________________________________________________________
//DOM SELECTORS: SELECTING html elements by TAG, NAME, ID

document.getElementsByTagName("li");             //REturns an ARRAY of list elements  [li.item, li.item,li.item]
   
document.getElementsByTagName("li")[2].style.color = "purple";              //Use the BRACKETS to Select the 2nd list before u can change its color.

    .style.color    //Change color. Must give the elements position number first!
    .length     //Count of elements

document.getElementsByTagName("li").length;      //REturns 3 because there are 3 list items


document.getElementsByClassName("btn");               //Grab HTML elements with the "btn" class:      <button class="btn">Click Me </button>            
    //Returns AN ARRAY [button.btn]  even though it's one element

document.getElementsByClassName("btn")[1].style.color="red";        //Must name the element position number. Its is [1]. There is only one  button.btn. Change color to "red".


document.getElementsById("title").innerHTML = "Good Bye";           //Returns "Good Bye"



document.querySelector("h1");             //Returns   <h1 id="title">Good Bye</h1>

document.querySelectorAll();

document.querySelector("li a");        //Returns   <a href="https://www.google.com">Google</a>
-->hierarchical selectors must have a space b/t the 2 elements! 


____________________________________________________________________________________
//DOM MANIPULATION


