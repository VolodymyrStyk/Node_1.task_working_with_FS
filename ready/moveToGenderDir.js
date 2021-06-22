const fs = require('fs');
const path = require('path');
const filePath1800 = path.join(__dirname, '1800');
const filePath2000 = path.join(__dirname, '2000');

fs.readdir(filePath1800, (err, files) => {
        files.forEach(file => {
            fs.readFile(path.join(filePath1800, file), (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                let user = JSON.parse(data);
                console.log(user.gender);
                if (user.gender === 'male'){
                    fs.rename(path.join(filePath1800, file), path.join(__dirname,'boys', file), err => {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                if (user.gender === 'female'){
                    fs.rename(path.join(filePath1800, file), path.join(__dirname,'girls', file), err => {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            })
        })
    }
);
fs.readdir(filePath2000, (err, files) => {
        files.forEach(file => {
            fs.readFile(path.join(filePath2000, file), (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                let user = JSON.parse(data);
                console.log(user.gender);
                if (user.gender === 'male'){
                    fs.rename(path.join(filePath2000, file), path.join(__dirname,'boys', file), err => {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                if (user.gender === 'female'){
                    fs.rename(path.join(filePath2000, file), path.join(__dirname,'girls', file), err => {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            })
        })
    }
);