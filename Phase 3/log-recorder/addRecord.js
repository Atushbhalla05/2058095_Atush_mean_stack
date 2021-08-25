function addRecords(){
    let readData = require("readline-sync");
    let file = require("fs");
    let addRecords = true;
    let fname = readData.question("Enter First Name: ");
    let lname = readData.question("Enter Last Name: ");
    let gender = readData.question("Enter Gender: ");
    let email = readData.question("Enter Email: ");
    let data = file.readFileSync("records.json");
    let records = [];
    if(data.length){
        records = JSON.parse(data);
    }
    let newEmp = {"fname" : fname, "lname" : lname, "gender" : gender, "email" : email };
    records.push(newEmp);
    file.writeFileSync("records.json", JSON.stringify(records));
}

addRecords();