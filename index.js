// Code your solution in this file!
function returnFirstTwoDrivers(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2);
}

function returnLastTwoDrivers(arrayOfDrivers){
    return arrayOfDrivers.slice(arrayOfDrivers.length-2, arrayOfDrivers.length);
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(num){
    return function(){
        return Math.pow(num,2);
    };
}

function fareDoubler(num){
    return num*2;
}
function fareTripler(num){
    return num*3;
}

function selectDifferentDrivers(arrayOfDrivers, functionToBeExecuted){
    return functionToBeExecuted(arrayOfDrivers);
}
