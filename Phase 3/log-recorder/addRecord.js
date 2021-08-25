function addRecords(){
    let obj = require("readline");
    var readData = obj.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let file = require("fs");
    let addRecords = true;
    readData.question("Enter First Name: ", (fname) =>{
        readData.question("Enter Last Name: ", (lname) =>{
            readData.question("Enter Gender: ", (gender) =>{
                readData.question("Enter Email: ", (email) =>{
                    let data = file.readFileSync("records.json");
                    let records = [];
                    if(data.length){
                        records = JSON.parse(data);
                    }
                    let newEmp = {"fname" : fname, "lname" : lname, "gender" : gender, "email" : email };
                    records.push(newEmp);
                    file.writeFileSync("records.json", JSON.stringify(records));
                    readData.close();
                 })
            })
        })            
     })
}

addRecords();