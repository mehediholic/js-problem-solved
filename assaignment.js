/* 01. Problem: Convert any feet to Mile */
/* hints: 1 Mile = 5280 feet */

/*---------------------------------------------- */
function feetToMile(WhatisYourFeet){
    var findMile = WhatisYourFeet / 5280;
    return findMile;
}
var resultOfMile = feetToMile(300000);
console.log(resultOfMile);
/*---------------------------------------------- */


/* 02. Problem: Calculate how much wood you need to build cair, table and bed */
/* hints: chair = 1 cft, table = 2cft, bed = 3cft */

/* --------------------------------------------- */
function woodCalculator(chair, table, bed){
    var chair = chair * 1;
    var table = table * 2;
    var bed   = bed * 3;

    var totalWood = chair + table +bed;
    return totalWood;
}
var totalWoodNeeded = woodCalculator(10, 2, 5);

console.log(totalWoodNeeded);
/* -------------------------------------------- */


/* 03. Problem: Bricks Calcualtor- Count toal bricks you need to build a house */
/* hints: bricks we need for per feet = 1000*, first ten floor hight = 15, second ten floor hight = 12, rest hight = 10 */

/* ------------------------------------------ */
function brickCalculator (floor) {
    var BricksWeNeedPerFeet = 1000;
    var firstTenFloor       = 10;

    var firstTenFloorHeight       = 15;
    var tenToTwentyFloorHeight    = 12;
    var moreThenTwentyFloorHeight = 10;

        if (floor <=10){
            var firstTenFloor = floor;
            return (firstTenFloor * firstTenFloorHeight * BricksWeNeedPerFeet);
        }
        else if (floor > 10 && floor <=20) {
            tenToTwentyFloor = floor - 10;
            return (firstTenFloor * firstTenFloorHeight * BricksWeNeedPerFeet) + 
            (tenToTwentyFloor * tenToTwentyFloorHeight * BricksWeNeedPerFeet);
        }
        else {
            tenToTwentyFloor = 10;
            moreThenTwentyFloor = floor - 20;
            return (firstTenFloor * firstTenFloorHeight * BricksWeNeedPerFeet) + 
            (tenToTwentyFloor * tenToTwentyFloorHeight * BricksWeNeedPerFeet) + 
            (moreThenTwentyFloor * moreThenTwentyFloorHeight * BricksWeNeedPerFeet);
        }
}
var totalBricksNeeded = brickCalculator(100);
console.log(totalBricksNeeded);
/* ------------------------------------------ */



/* 04. Problem: Tiny Friends: Find the tiny friend of your group */

/* ------------------------------------------ */
function tinyFriend(friends) {
    var tiny = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var length = friends[i].length;  
        
        if(length < tiny.length) {
            tiny = friends[i];
        }
    }
    return tiny;
}
var whoIsTiny = tinyFriend(['jon', 'jhon', 'jhonnas', 'jonnathon', 'jovan']);
console.log(whoIsTiny);
/* ------------------------------------------- */