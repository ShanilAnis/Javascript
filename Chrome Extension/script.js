const inputBtn = document.getElementById("input-btn")
let myLeads = ['www.google.com','www.epiclead.com','www.greatlead.com']
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value) 
    console.log(myLeads)
   
})

for(let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])
}