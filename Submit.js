function calculateTax(income, expenses) {
    if (income >= 0 && income >= expenses && expenses >= 0) return (income - expenses) * 0.2;
    else return "Invalid Input";
}



function sendNotification(email) {
    if (typeof email === 'string' && email.includes('@') && email[0] !== '@' && email[email.length - 1] !== '@') {
        const n = email.indexOf('@');
        const userName = email.slice(0, n);
        const domainName = email.slice(n + 1);

        return `${userName} sent you an email from ${domainName}`;

    } else return "Invalid Email";
}



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



function calculateFinalScore(obj) {
    if (typeof obj === 'object' &&
        !Array.isArray(obj) &&
        typeof obj.name === 'string' &&
        typeof obj.testScore === 'number' &&
        obj.testScore <= 50 &&
        typeof obj.schoolGrade === 'number' &&
        obj.schoolGrade <= 30 &&
        typeof obj.isFFamily === 'boolean' &&
        !isNaN(obj.schoolGrade) &&
        !isNaN(obj.schoolGrade)
    ) {
        const score = obj.isFFamily ? obj.testScore + obj.schoolGrade + 20 : obj.testScore + obj.schoolGrade;
        return score >= 80 ? true : false;
    } else return 'Invalid Input';
}



function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) &&
        typeof serialNumber === 'number' &&
        !isNaN(serialNumber) &&
        serialNumber > waitingTime.length
    ) {
        const avgTime = waitingTimes.reduce((a, b) => a + b) / waitingTimes.length;
        const remindPerson = serialNumber - waitingTimes.length - 1;
        return remindPerson * Math.round(avgTime);

    } else return 'Invalid Input ';
}





// !###################################################################################





console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));


// ##############################


console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));


// ##############################


console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName("Suman"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Raj"]));


// ##############################


console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));


// ##############################


console.log(waitingTime([3, 5, 7, 11, 6], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7, 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))
