const phone_form = document.getElementById("phone-form")

const nameElement = document.getElementById("form-name")
const phoneElement = document.getElementById("form-phone-number")
const mailElement = document.getElementById("form-mail")


const card_body = document.querySelectorAll(".card-body")[1]
console.log("2. card",card_body)

eventListener();



function eventListener(){
    phone_form.addEventListener("submit",addRecord)
    document.addEventListener("DOMContentLoaded",function(){
        let records = Storage.getRecordFromStorage();
        UI.loadAllRecords(records);
    })

    //elete record one by one 
    card_body.addEventListener("click", deleteFilm)



}




//add a new record to form
function addRecord(event){
   
    
    const name = nameElement.value
    const phone_number = phoneElement.value
    const mail = mailElement.value

   if(name === "" ||phone_number === "" || mail === "" )
    {
        console.log("hata")
        UI.displayMessage("danger","Please, fill in all fields")
        //en az biri boşsa hata mesajı vermeli
    }
    else{
        console.log("ekledi")
        //new record
        const newRecord = new Phone(name,phone_number,mail);
        Storage.addRecordToStorage(newRecord);
        UI.displayMessage("success","Record successfully added.") 

    }

    //Her addfilm işleminden sonra inputları temizlemek için kulllanılır
    UI.clearInput(nameElement, phoneElement,mailElement)
    event.preventDefault();



}
function deleteFilm(event){
    if(event.target.id === "delete-record")
    {
        UI.deleteRecordFromUI(event.target)
        //console.log("dene",event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
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

