function saturdayFun(activity){
    if(activity){
        return (`This Saturday, I want to ${activity}!`);
    }else{
        return (`This Saturday, I want to roller-skate!`);
    }
    
}

function mondayWork(place) {
    if(place){
        return(`This Monday, I will ${place}.`);
    }else{
        return(`This Monday, I will go to the office.`);
    }
 }
 
 function wrapAdjective(part1){
    return function wrapAdjective(saySomething) {
        return (`You are ${part1}${saySomething}${part1}!`);
    };
 };