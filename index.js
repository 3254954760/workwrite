/**
 * @param {string} s
 * @return {string[][]}
 */
let partition = function (s) {
    let n = s.length;
    let ans = [];
    let path = [];
    let isPardorm = (i, j) => {
        while (i < j) {
            if (s[i++] !== s[j--]) {
                return false;
            }
        }
        return true;
    };
    let dfs = (i) => {
        if (i === n) {
            ans.push(path.slice());
        }
        for (let j = i; j < n; j++) {
            if (isPardorm(i, j)) {
                path.push(s.substring(i, j + 1));
                dfs(j + 1);
                path.pop();
            }
        }
    };
    dfs(0);
    return ans;
};
console.log(partition('aab'));
