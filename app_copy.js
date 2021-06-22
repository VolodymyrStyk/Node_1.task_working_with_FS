const fs = require('fs');
const path = require('path');

const filePath1800 = path.join(__dirname, '1800');
const filePath2000 = path.join(__dirname, '2000');
const pathArr = [filePath1800, filePath2000];
const folders = ['2000', '1800'];
const util = require('util');
const reader = util.promisify(fs.readdir);
const rename = util.promisify(fs.rename);


// reader(filePath1800).then(files => {
//     console.log(files);
//     filesDir1800 = [...files];
//     console.log(filesDir1800)
//     return filesDir1800;
// });
// reader(filePath1800).then(files => {
//     console.log(files);
//     filesDir1800 = [...files];
//     console.log(filesDir1800)
//     return filesDir1800;
// }).then(files => {
//     files.forEach(file => {
//         console.log(file);
//         const oldPath = path.join(filePath1800, file);
//         const newPath = path.join(filePath2000, file);
//         rename(oldPath, newPath);
//     })
//         return files;
// }).then(files => {
//     newPath
// });


// const getList = () => {
//     return reader(filePath1800).then(files => {
//         console.log(files);
//         filesDir1800 = [...files];
//         console.log(filesDir1800)
//         return filesDir1800;
//     })
// }
// const a = async ()=>{
//     const result = await getList();
//     console.log(result)
// }
//
// console.log(51, a);

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
                fs.readdir(filePath2000, (err, files) => {
                    files.forEach(file => {
                        const filePath = path.join(__dirname, '2000', file);
                        fs.readFile(filePath, (err, data) => {
                            if (err) {
                                console.log('__________________________________');
                                console.log(err);
                                console.log('__________________________________');
                                return
                            }
                            let user = JSON.parse(data);
                            console.log(file);
                            console.log(filePath);
                            console.log(user);
                        })
                    })
                });
            })
        })
    }
);

const boysDir = path.join(__dirname, 'boys');
const girlsDir = path.join(__dirname, 'girls');

fs.mkdir(boysDir, {recursive: true}, (err) => {
})
fs.mkdir(girlsDir, {recursive: true}, (err) => {
})

// fs.readdir(filePath2000, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//         const filePath = path.join(__dirname, '2000',file);
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 console.log('__________________________________');
//                 console.log(err);
//                 console.log('__________________________________');
//                 return
//             }
//             console.log(data.toString());
//         })
//     })
// });


