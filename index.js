/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let ans = [];
    let i = 0;
    let j = 0;
    let dirCount = 0;
    for (let k = 0; k < m * n; k++) {
        ans[k] = matrix[i][j];
        matrix[i][j] = Infinity;
        let x = i + dir[dirCount][0];
        let y = j + dir[dirCount][1];
        if (x >= n || x < 0 || y >= m || y < 0 || matrix[x][y] === Infinity) {
            dirCount = (dirCount + 1) % 4;
        }
        i += dir[dirCount][0];
        j += dir[dirCount][1];
    }

    return ans;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
