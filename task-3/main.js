
let matrix = [
    [2, 5, 3, 1, 4],
    [3, 5, 2, 3, 4],
    [4, 6, 1, 2, 3],
    [4, 5, 6, 7, 7]
]
let sum=0
let max_index=0

for (let i = 0; i < matrix.length; i++) {
   for (let j = 0; j < matrix[i].length; j++) {

    if (matrix[i][j]==1) {
        max_index=[i+1]
        console.log(max_index.join(' '));
    }
    
   }
    
}
