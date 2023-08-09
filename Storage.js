class Storage{

    static getRecordFromStorage(){
        let records;
        if(localStorage.getItem("records") === null){
            records=[]
        }
        else {
            records = JSON.parse(localStorage.getItem("records"))
        }
        return records;

    }
    static addRecordToStorage(new_records){
        let records= this.getRecordFromStorage();
        records.push(new_records)

        localStorage.setItem("records",JSON.stringify(records))

    }
    static deleteRecordFromStorage(record_name){
        let records=this.getRecordFromStorage();
    
        records.forEach(function(record, index){
    
            if(record.name === record_name){
                console.log("record-bame", record.name)
                records.splice(index,1)
            }
        })
        localStorage.setItem("records",JSON.stringify(records))


    }
}
















/*

function Storage(){

}

Storage.prototype.getRecordsFromStorage= function(){

    let records ;
    if(localStorage.getItem("records")===null){
        records=[]
    }
    else{
        records = JSON.parse(localStorage.getItem("records"));
    }
    console.log(records, 'recordssss')
    return records;
}
Storage.prototype.addRecordToStorage = function(new_record){

  let records = this.getRecordsFromStorage();//arrayı aldım
  records.push(new_record);

  localStorage.setItem("records",JSON.stringify(records))




}

*/