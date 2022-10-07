const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
const MALE_NAMES = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const FEMALE_NAMES = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calculateNameAndDay(century, year, month, day, gender){
    var indexOfTheDay = Math.round((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7) ;
    var dayTheUserWasBorn = DAYS_OF_THE_WEEK[indexOfTheDay];
    var name = null;

    if (gender === 'm'){
        name = MALE_NAMES[indexOfTheDay];
    } else {
        name = FEMALE_NAMES[indexOfTheDay];
    }
    var list = [dayTheUserWasBorn, name];
    return list;
}

function main(){
    var userInputYear = validator(parseInt(prompt("Enter the year:")), "Y");
    var userInputMonth = validator(parseInt(prompt("Enter the month:")), "M");
    var userInputDay = validator(parseInt(prompt("Enter the day:")), "D");
    var userInputGender = validator(prompt("Enter the gender:"), "G");

    var userInputCentury = parseInt(userInputYear.toString().substring(0, 2));
    var output = calculateNameAndDay(userInputCentury, userInputYear, userInputMonth, userInputDay, userInputGender);
    var outputELement = document.getElementById("output");
    outputELement.innerHTML = "You were born on: " + output[0] + ". Your Akan name is: " + output[1];
    outputELement.classList.add("akan-name");
}


function validator(value, type){
    switch(type){
        case "Y":
            if (value > 2022 || value < 1900){
                alert("Invalid year");
            }
            break;
        case "M":
            if (value > 12 || value < 1){
                alert("Invalid month");
            }
            break;
        case "D":
            if (value > 31 || value < 1){
                alert("Invalid day");
            }
            break;
        case "G":
            if (value.toString().toLowerCase() !== "f" || value.toString().toLowerCase() !== "m"){
                alert("Invalid gender");
            }
            break;
        default:
            console.log();
    }
}