let words = new URLSearchParams(window.location.search);

let username = 'SageRH@TheCodingMaster2009$5150';
let passcode = 'CodeCademy#PortfolioProject@5150!$';



function isCorrect(userinput, pwinput){
    if(userinput === username && pwinput === passcode){
        return true;
    } else {
        return false;
    }
}

function changeTab(blank1, blank2){
    if(isCorrect(blank1, blank2) === false){
        alert("The password or username is incorrect, please try again.")
    } else if (isCorrect(blank1, blank2) === true){
        window.location.href = 'https://mysterymaiden.github.io/portfolio/inbox.html';
    }
}
// when submit button is pressed i want it to changeTab
let password = (words.get('login-pw'))
let user = (words.get('login-user'))
changeTab(user, password)

