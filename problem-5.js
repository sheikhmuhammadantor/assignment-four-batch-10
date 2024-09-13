

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



console.log(waitingTime([3, 5, 7, 11, 6], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7, 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))
