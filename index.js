// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    return [...drivers.slice (-0, 2)]
}

function returnLastTwoDrivers(){
    return [...drivers.slice (2)]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    

function createFareMultiplier(){
    const fare = 12.5;
    const multiplier = 2;
    return function fareMultiplier(){
        return fare*multiplier
    }

}

function fareDoubler(){
    const fare = 10;
    return fare * 2;
}

function fareTripler(){
    const fare = 12;
    return fare * 3;
}

function selectDifferentDrivers(empty, returnFirstTwoDrivers){
    return (/* empty */ returnFirstTwoDrivers())
}

function selectDifferentDrivers(empty, returnLastTwoDrivers){
    return (/* empty */ returnLastTwoDrivers())
}