// code your solution here
function mondayWork(e){
    if (e==undefined){
        e = 'go to the office';
    }
    return (`This Monday, I will ${e}.`)
}

function saturdayFun(e){
    if (e==undefined){
        e = 'roller-skate';
    }
    return (`This Saturday, I want to ${e}!`)
}

function wrapAdjective(e){
    return function wrap(txt){
        return `You are ${e}${txt}${e}!`
    }

}