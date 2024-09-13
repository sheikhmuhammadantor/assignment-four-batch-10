

function sendNotification(email) {
    if (typeof email === 'string' && email.includes('@') && email[0] !== '@' && email[email.length - 1] !== '@') {
        const n = email.indexOf('@');
        const userName = email.slice(0, n);
        const domainName = email.slice(n + 1);

        return `${userName} sent you an email from ${domainName}`;

    } else return "Invalid Email";
}



console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
