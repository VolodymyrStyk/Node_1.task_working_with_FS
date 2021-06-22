// // 1) Студентів з 1800 перевести в групу на 2000. І навпаки
const fs = require('fs');
const path = require('path');
const filePath1800 = path.join(__dirname, '1800');
const filePath2000 = path.join(__dirname, '2000');
let newFilePath;

const switchUser = (filePath) => {
    fs.readdir(filePath, (err, files) => {
            files.forEach(file => {
                filePath === filePath1800 ? newFilePath = filePath2000 : newFilePath = filePath1800;
                const oldPath = path.join(filePath, file);
                const newPath = path.join(newFilePath, file);
                fs.rename(oldPath, newPath, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
        }
    );
}

switchUser(filePath1800);
switchUser(filePath2000);
