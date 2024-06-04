function howSumTab(sum, nums) {
    const arr = new Array(sum + 1).fill(null);
    arr[0] = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
           for (let j = 0; j < nums.length; j++) {
                const num = nums[j];

                if (i + num <= sum) {
                    const newArrI = [...element, num]; 
                    if(Array.isArray(arr[i + num]) && arr[i+num].length < newArrI.length){
                        continue
                    } 
                    arr[i + num] = newArrI;
                }
           } 
        } 
    }


    return arr[sum]
}

console.log(howSumTab(300, [7, 14]))
console.log(howSumTab(8, [2, 3, 5]))
