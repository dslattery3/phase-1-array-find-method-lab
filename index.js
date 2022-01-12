// // code your solution here
// function superbowlWin(array) {
//     let i;
//     let wins = [];
//     for (i = 0; i < array.length; i++){
//         if (array[i].result === "W"){
//             wins = [...wins, `${array[i].year}`];
//             console.log(wins);
//             return array[i].year;
//         }
//     }
// }
function superbowlWin(array){
    let foundVictory = array.find(({result}) => result === "W");
    if (foundVictory === undefined){
        return undefined;
    }
    return foundVictory.year;
}