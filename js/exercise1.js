function joinArrays(x,y,z) {
    let result = [...x, ...y, ...z];

    return result.sort((a, b) => a - b);
}

var x = [2,3];
var y = [0,1];
var z = [4,5];

console.log(joinArrays(x, y, z));

