
/*

THIS WONT WORK i dont know backend development.


let base = new URLSearchParams(window.location.search);
// gets the inputs.

let user = base.get('email')
let userMessage = base.get('message')
//gets the input of the 'email', and 'message' inputs.

let fullMessages = [
    {email: '', message: ''},
]
//creates the email and message array

function addToArray(blank1, blank2){
fullMessages.push({email: blank1, message: blank2})
}
//adds emails and messages to the array

//checks if there are new messages, and pushes the email of the message to a side bar.
function isNewMessage(array){
    let isNew = false;
    let newMessage = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].message === userMessage){
            isNew = true;
            newMessage.push(array[i].email);
        }
    }

    if (isNew === true){
    // need to find a way to push the newMessage array to the ul under the class of side-bar inside of the inbox.html page.
    }
}

function addToPage(array){
   let toAdd = [] 
    for(let j = 0; j < array.length; j++){
        toAdd.push(array[])
    }
    if (toAdd){
 // need to find a way to add the toAdd email to the h3 with the id of email-post, and the message to the p with the id of message-post. 
    } else {
 // need to find a way to replace the ul with a p that says 
 // "your inbox is either not loading proporly, or you have no messages, please try again later."
    }
}

addToArray(user, userMessage)
//adds user and userMessage to the array "fullMessages"

isNewMessage(fullMessages)
//checks if there are any new messages in fullmessages

addToPage(fullMessages)
//adds everything to the page.
*/