const fs = require('fs');
const path = require('path');
const filePath1800 = path.join(__dirname, '1800');
const filePath2000 = path.join(__dirname, '2000');
const boysDir = path.join(__dirname, 'boys');
const girlsDir = path.join(__dirname, 'girls');

fs.mkdir(boysDir, {recursive: true}, (err) => {
    if (err){
        console.log(err);
    }
})
fs.mkdir(girlsDir, {recursive: true}, (err) => {
    if (err){
        console.log(err);
    }
})

const checkGender = (gender, filePath, file) => {
    gender === 'male' ? gender = 'boys' : gender = 'girls';
    fs.rename(path.join(filePath, file), path.join(__dirname, gender, file), err => {
        if (err) {
            console.log(err);
        }
    })
}

const moveToGenderDir = (filePath) => {
    fs.readdir(filePath, (err, files) => {
            files.forEach(file => {
                fs.readFile(path.join(filePath, file), (err, data) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    let user = JSON.parse(data);
                    checkGender(user.gender, filePath, file);
                })
            })
        }
    );
}

moveToGenderDir(filePath1800);
moveToGenderDir(filePath2000);
