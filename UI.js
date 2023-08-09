class UI{
  // to reste the inside of the input after add element to form 
  static clearInput(element1, element2, element3){
    element1.value="";
    element2.value="";
    element3.value="";
  }
  static displayMessage(type, message) {
    //chose first div (class="card-body")
    const card_body = document.querySelectorAll(".card-body")[0];

    // create bootstrap alert message 
    const show_alert = document.createElement("div");
    show_alert.className = `alert alert-${type}`;
    show_alert.appendChild(document.createTextNode(message));
    card_body.appendChild(show_alert);

    setTimeout(function () {
      show_alert.remove();
    }, 1000);
  };

  static loadAllRecords(records){
    //choose tbody
    const record_list = document.getElementById("table-body")
    //create tbody 
    records.forEach(function(record){
      record_list.innerHTML+=`
        <tr>
                <td>${record.name}</td>
                <td>${record.phone_number}</td>
                <td>${record.mail}</td>
                <td> <button id="delete-record" class="btn btn-outline-danger">Delete <i id="delete-record" class="fa-solid fa-trash fa-bounce" style="color: #d0d6e2;"></i> </button></td>
            </tr>`
           }
           )

  }
  
  static deleteRecordFromUI(element){
    element.parentElement.parentElement.remove();
  }
}














































/*
function UI(){

}
/*
UI.prototype.addRecordToUI = function(new_record){
    console.log("uı",new_record)
    
    const phone_list = document.getElementById("table-phone")
    console.log(phone_list)
    const newRow = document.createElement('tr');
    newRow.innerHTML = `       
              <td>{new_record.name}</td>
              <td>{new_record.phone_number}</td>
              <td>{new_record.mail}</td>
            
    `
    phone_list.appendChild (newRow)

}
*/



/*
UI.prototype.displayMessage= function(type, message) {
    //1. card bosy altına ekleyeceğimzi için onu seçmeliyiz.
    const card_body = document.querySelector(".card-body");
  
    const show_alert = document.createElement("div");
    show_alert.className = `alert alert-${type}`;
    show_alert.appendChild(document.createTextNode(message));
    card_body.appendChild(show_alert);
  
    setTimeout(function () {
      show_alert.remove();
    }, 1000);
  }

  const addRow = (data) => {
    const row = `
      <tr>
        <td></td>
        <td>${data.name}</td>
        <td>${data.phone_number}</td>
        <td>${data.mail}</td>
      </tr>
      
    
    `;
    return row;
  }


  UI.prototype.loadAllRecords = function(records){
    const table = document.getElementById("table")
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    records.forEach((record) => {
      const rowData = addRow(record)
      tbody.innerHTML += rowData;
    });
       

  }

  */