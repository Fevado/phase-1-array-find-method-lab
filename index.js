// code your solution here
function superbowlWin(record){
    let wRecord= 
    record.find(record=>record.result==="W");
    return wRecord?
    wRecord.year : undefined;

}

