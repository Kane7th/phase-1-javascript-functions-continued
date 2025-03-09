// code your solution here
function saturdayFun(task = "roller-skate") {
    return (`This Saturday, I want to ${task}!`);
}

console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog"));

//-----------------------------------------------------------------------------------------------------------

const mondayWork = function(task = "go to the office"){
    return (`This Monday, I will ${task}.`)
}
console.log(mondayWork());
console.log(mondayWork("wash the car"));

//-----------------------------------------------------------------------------------------------------------

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
