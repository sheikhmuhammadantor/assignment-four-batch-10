

function checkDigitsInName(name) {
    if (typeof name === 'string') {
        const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const nameArr = name.split('');
        let bulName = false;

        for (const num of number) {
            if (nameArr.includes(num)) {
                bulName = true;
                break;
            }
        } return bulName;
    } else return "Invalid Input";
}



console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName("Suman"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Raj"]));
