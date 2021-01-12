//your code here!

let inputID = document.getElementById("input-number")
let List = document.getElementById("list")
const modifyID = document.getElementById("button-compute")

let myID = 620610804
let newID = 0

modifyID.addEventListener("click",function(){
    newID = myID + inputID
    const newelement = document.createElement("li")
    newelement.textContent = newID
    List.append(newelement)
})