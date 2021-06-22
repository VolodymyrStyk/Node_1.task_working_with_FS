const fs = require('fs');
const path = require('path');
const filePath1800 = path.join(__dirname, '1800');
const filePath2000 = path.join(__dirname, '2000');

fs.readdir(filePath1800, (err, files) => {
        files.forEach(file => {
            const oldPath = path.join(filePath1800, file);
            const newPath = path.join(filePath2000, file);
            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
            })
        })
    }
);
fs.readdir(filePath2000, (err, files) => {
        files.forEach(file => {
            const oldPath = path.join(filePath2000, file);
            const newPath = path.join(filePath1800, file);
            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                }
            })
        })
    }
);