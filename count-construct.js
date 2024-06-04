function gridTraveler(m, n) {
    let arr = new Array(m + 1).fill().map(() => (new Array(n + 1).fill(0)));

    arr[1][1] = 1;

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            arr[i][j] += arr[i - 1][j] + arr[i][j - 1];
        }
    }

    //console.log(arr)

    return arr[m][n];
}  

console.log(gridTraveler(18, 18))
