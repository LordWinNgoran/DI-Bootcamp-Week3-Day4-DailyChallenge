
/**********************************************************************************/
/*********************************DAILY CHALLENGE *******************/
/********************************************************************************/


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Todo List
 * @param: 21 distinct colors
 * Date : 08/01/2023
 */



/************************ Todo List************************************ */




// 1 Create an HTML, CSS and a JS file.
// Done 

//2 In the HTML file
//create a form with one input type="text", and a “Submit” button.
//add an empty div below the form
//<div class="listTasks"></div>

// Done 


//3 In the js file, you must add the following functionalities:
//3-1 Create an empty array : const tasks = [];

const tasks = [];



//3-2 Create a function called addTask(). As soon as the user clicks on the button:


//then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
let button=document.querySelector('button')
let getForm=document.forms[0]
button.addEventListener('click',addTask)

function addTask(e){
    e.preventDefault()
    let takeInput=document.getElementById('new-task').value
    console.log(takeInput)
//check that the input is not empty,
    if(takeInput.length==0 ){
        alert('Le  champ est vide')
    }else{

// then add it to the array (ie. add the text of the task)
        tasks.push(takeInput)



        let listItem=document.createElement("li");

//a “X” button. Use font awesome for the “X” button.
        let buttonX=document.createElement("button");
        let checkBox=document.createElement("input");
	    let label=document.createElement("label");
        buttonX.textContent="X";
        label.innerText=takeInput;
        checkBox.type="checkbox";
//an input type="checkbox". The label of the input is the task added by the user.
        listItem.appendChild(buttonX);
        listItem.appendChild(checkBox);
	    listItem.appendChild(label);
//then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
        var incompleteTaskHolder=document.getElementById("incomplete-tasks")
	    incompleteTaskHolder.appendChild(listItem);
    } 
}

