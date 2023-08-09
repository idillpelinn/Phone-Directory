//choose form for submit button
const phone_form = document.getElementById("phone-form")


//choose input element
const nameElement = document.getElementById("form-name")
const phoneElement = document.getElementById("form-phone-number")
const mailElement = document.getElementById("form-mail")

//choose div (class="card-body") for table-body
const card_body = document.querySelectorAll(".card-body")[1]

//all function callback
eventListener();

function eventListener(){
    //add_form.addEventListener("click",addButton)
    
    //form submit
    phone_form.addEventListener("submit",addRecord)
    //load records
    document.addEventListener("DOMContentLoaded",function(){
        let records = Storage.getRecordFromStorage();
        UI.loadAllRecords(records);
    })

    //delete record one by one 
    card_body.addEventListener("click", deleteFilm)



}
//add a new record to form
function addRecord(event){ 
    const name = nameElement.value
    const phone_number = phoneElement.value
    const mail = mailElement.value

   if(name === "" ||phone_number === "" || mail === "" )
    {
        UI.displayMessage("danger","Please, fill in all fields")
        
    }
    else{
        //new record
        const newRecord = new Phone(name,phone_number,mail);
        Storage.addRecordToStorage(newRecord);
        UI.displayMessage("success","Record successfully added.") 

    }
    //clear input after add record
    UI.clearInput(nameElement, phoneElement,mailElement)
    event.preventDefault();

}
function deleteFilm(event){
    if(event.target.id === "delete-record")
    {
        UI.deleteRecordFromUI(event.target)
        Storage.deleteRecordFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessage("success", "Phone record successfully deleted")
    }

}








































/*





const form_phone = document.getElementById("phone-form")
//console.log(form_phone)
//for içinde bulunann inputları seçelim , name , phone number, mail

const nameElement = document.getElementById("form_name")
const phoneElement = document.getElementById("form_phone_number")
const mailElement = document.getElementById("form_mail")

//UI objesi
 const ui  = new UI();

 const storage = new Storage();

 let records = storage.getRecordsFromStorage();
    ui.loadAllRecords(records);



function addRecord()
{    
    const name = nameElement.value;
    const phone_number = phoneElement.value;
    const mail = mailElement.value;

    if(name === "" || phone_number ==="" || mail === "")
    {
            ui.displayMessage("danger","fill in all fields")
    }
    else{
        //bir kayıt oluştu
        const new_record = new Phone(name, phone_number,mail);
       
        //oluşan yeni kaydı arayüzde göstermek için 
       // ui.addRecordToUI(new_record)
        storage.addRecordToStorage(new_record)
        ui.displayMessage("success","record created")

    }
    
    console.log("yenile")

   
}
*/

