const fs = require('fs');

function jsonToCsv(jsonFilePath, csvFilePath) {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        const headers = ['Name', 'Age', 'Email'];
        const csvData = [headers.join(',')];
        
        jsonData.users.forEach(user => {
            csvData.push([user.name, user.age, user.email].join(','));
        });

        fs.writeFile(csvFilePath, csvData.join('\n'), (err) => {
            if (err) throw err;
            console.log('CSV file created.');
        });
    });
}

jsonToCsv('users.json', 'users.csv');
