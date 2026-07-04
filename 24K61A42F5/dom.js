document.getElementById("heading1").innerHTML = "DOM is Awesome";
function addrow() {
    let table=document.getElementById("mytable");
    let newRow=table.insertRow();
    let cell=newRow.insertCell(0);
    let cel2=newRow.insertCell(1);
    let cel3=newRow.insertCell(2);
    cell1.innerHTML("Deepika");
    cell2.innerHTML("Srilakshmi");
    cell3.innerHTML("Malleswari");
}
console.log(document);