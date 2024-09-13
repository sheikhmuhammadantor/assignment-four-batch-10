

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



console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));
