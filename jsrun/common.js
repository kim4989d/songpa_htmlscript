


//1차원배열
var array = [1, 2, 3, 4, 5];


for (var index = 0; index < array.length; index++) {
    var element = array[index];

    console.log(element);
}

console.log('==========================================');





array = [];

for (var index = 0; index < 10; index++) {

    array[index] = index + 1;
    console.log(array[index]);

}


console.log('==========================================');

var twoarray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


for (let index = 0; index < twoarray.length; index++) {
    for (let x = 0; x < twoarray[index].length; x++) {
        console.log(twoarray[index][x]);


    }

}


console.log('==========================================');




var twoarray2 = [];

var init = 0;

for (var i = 0; i < 3; i++) {

    twoarray2[i] = [];
    for (var x = 0; x < 3; x++) {
        twoarray2[i][x] = ++init;

    }


}

console.log(twoarray2);