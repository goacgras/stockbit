const anagram = (arr) => {
    let obj = {};
    let newArr = [];

    for (let word of arr) {
        let letters = word.split("").sort().join("");
        obj[letters] = obj[letters] || [];
        obj[letters].push(word);
    }

    for (let key in obj) {
        newArr.push(obj[key]);
    }

    return newArr;
};

const val = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
console.log(anagram(val));
