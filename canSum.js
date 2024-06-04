function canSumTab(sum, nums) {
    const arr = new Array(sum + 1).fill(false);
    arr[0] = true


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === true) {
           for (let j = 0; j < nums.length; j++) {
                const num = nums[j];

                if (i + num <= sum) {
                    arr[i + num] = true; 
                }
           } 
        } 
    }


    return arr[sum]
}

console.log(canSumTab(300, [7, 14]))
console.log(canSumTab(8, [2, 3, 5]))
