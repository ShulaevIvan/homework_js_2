
function getNumbers(number) {

    const trash = [];
    const numArr = [];

    for (let i = 2; i <= number; i++){
        if(!trash[i]){
            numArr.push(i);
            for (let j = i * i; j<= number; j+=i){
                trash[j] = true;
            };
        };
    };

    return numArr

};

console.time()
console.log(getNumbers(process.argv[2]))
console.timeEnd()
