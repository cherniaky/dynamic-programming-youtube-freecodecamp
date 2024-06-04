function canSumTab(string, wordBank) {
    const arr = new Array(string.length + 1).fill(false);
    arr[0] = true


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === true) {
           for (let j = 0; j < wordBank.length; j++) {
                const word = wordBank[j];

                const el = string.slice(i, i + word.length);

                if (word !== el) {
                   continue 
                }
                

                if (i + word.length < arr.length) {
                    arr[i + word.length] = true; 
                }
           } 
        } 
    }


    return arr[arr.length - 1]
}

console.log(canSumTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
