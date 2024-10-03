/*
Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delete
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
*/


// 1 set up fs and path modules
var fs = require('fs');

// 2 declare varianble folderN
const folderN = '/Users/tsmit/Logs';


// Create Log Files:
// 1 create Logs folder
try{
    if(!fs.existsSync(folderN)) {
        fs.mkdirSync(folderN);
    }
} catch (e) {
    console.error(e);
}

// loop to create 10 log files
for (let i =0; i < 10; i+=1) {
    fs.writeFile(folderN + '/log' + i + '.txt', 'Log' + i + 'file', function (e) {
        if (e) throw e;
        console.log('log' + i + '.txt');
        i++;
    });
}


//Remove Log Files:

try{
    if(fs.existsSync(folderN)) {
        fs.rmdir("folderN", () => {
            fs.readdirSync(folderN).forEach(f => {
                console.log('delete files...' + f);
            })
        });
    }
} catch (e) {
    console.error(e);
}
