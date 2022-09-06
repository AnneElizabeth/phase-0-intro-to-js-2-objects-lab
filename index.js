const employee = {
    name: "Doug",
    streetAddress: "3221 Simon St"
}

function updateEmployeeWithKeyAndValue() {
    const eeUpdate = { ...employee }

    eeUpdate["name"] = "Sam";
    eeUpdate["streetAddress"] = "11 Broadway";
    
    return eeUpdate;
};

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";

    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const eeFired = { ...employee };

    delete eeFired["name"];
    return eeFired;
};

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
};

