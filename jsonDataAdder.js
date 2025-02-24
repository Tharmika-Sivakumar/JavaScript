const fs = require('fs');

const filePath = 'users.json';



function createEmptyFile() {
    fs.writeFileSync(filePath, JSON.stringify({ users: [] }, null, 2));
}



function addUser(name, age, email) {
    const data = JSON.parse(fs.readFileSync(filePath));
    data.users.push({ name, age, email });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('User added.');
}

createEmptyFile();   
addUser('John Doe', 25, 'john@example.com');
addUser('Jane Doe', 30, 'jane@example.com');
