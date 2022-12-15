

function check() {

    //yob = 'YEAR OF BIRTH'

    let name = document.getElementById('name').value;
    let yob = document.getElementById('yob').value;
    const message = document.getElementById('message');
    const messageRed = document.getElementById('messageRed');

    const age = 2022 - yob; // age of user

    const eligible = `${name} is eligible to vote. ${name} is ${age}`;
    const notEligible = `${name} is not eligible to vote. ${name} is just ${age}`;
    
    function checkYob() {
        //function to validate the year of birth entered by the user.
        //if length of year of birth is not up to four(character), then year is not valid. Or
        //if user is not born on or after 1920, then year of birth is not valid. Or
        //if name is empty
        if(yob.length !== 4 || yob < 1920 || name == '') {
            name == '' ? messageRed.innerText = 'Name of citizen is required' : messageRed.innerText = 'Enter a valid birth year please';
            message.innerText = '';
        } else {

            if(age >= 18) {
                message.innerText = eligible;
                messageRed.innerText = '';
            } else {
                message.innerText = notEligible;
                messageRed.innerText = '';
            }
        }
    }
    checkYob()
}