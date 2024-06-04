function countConstructTab(string, wordBank) {
    const arr = new Array(string.length + 1).fill([]);
    arr[0] = [[]] 


    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && arr[i].length > 0) {
           for (let j = 0; j < wordBank.length; j++) {
                const word = wordBank[j];

                const el = string.slice(i, i + word.length);

                if (word !== el) {
                   continue 
                }

                if (i + word.length < arr.length) {
                    const modArr = arr[i].map((e)=>([...e, word]));
                    arr[i + word.length] = arr[i + word.length].concat(modArr); 
                }
           } 
        } 
    }

    return arr[arr.length - 1]
}

console.log(countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]))
