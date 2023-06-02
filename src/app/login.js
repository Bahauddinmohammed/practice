// var details=[3,1,5,9,7]
// details.sort( (a,b)=>a-b)
// var db=details.slice(1).reduce((sum,num)=>sum +num);
// console.log(db)
// var cd=details.slice(0,4).reduce((sum,num)=>sum +num);
// console.log(cd);
// console.log(db +','+cd);
var details = [4, 6, 1, 2];
details.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    else
        return -1;
});
console.log(details);
