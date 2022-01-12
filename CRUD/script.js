var selectedRow = null

function onFormSubmit(){
    if (validate()) {   
        var formData = readFormDate();
    if(selectedRow == null)

        insertNewRecord(formData);
        else
        updateRecord(formData);

    resetForm();
    }
}

function readFormDate(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["countryCode"] = document.getElementById("countryCode").value;
    formData["country"] = document.getElementById("country").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tourist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML= data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML= data.countryCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML= data.country;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML= data.city;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML= `<a onclick = "onEdit(this)">Edit</a>   &nbsp;&nbsp;
                      <a onclick = "onDelete(this)">Delete</a>`;

}

function resetForm() {
    document.getElementById("fullName").value="";
    document.getElementById("countryCode").value="";
    document.getElementById("country").value="";
    document.getElementById("city").value="";
}

// Edit and update 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("countryCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("country").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.countryCode;
    selectedRow.cells[2].innerHTML = formData.country;
    selectedRow.cells[3].innerHTML = formData.city;
   
}

function onDelete(td){
    if(confirm("Are you sure to delete this record ?????")) {
        row = td.parentElement.parentElement;
        document.getElementById("tourist").deleteRow(row.rowIndex);
        resetForm();
    }
   
}
function validate() {
    isValid1 = true;
    if (document.getElementById("fullName").value == ""){
        isValid1 = false;
        document.getElementById("fullnameVl-error").classList.remove("hide");

    }
   
    else {
        isValid1 = true;
        if(document.getElementById("fullnameVl-error").classList.contains("hide"));
            document.getElementById("fullnameVl-error").classList.add("hide");
    }
    return isValid1;
}


