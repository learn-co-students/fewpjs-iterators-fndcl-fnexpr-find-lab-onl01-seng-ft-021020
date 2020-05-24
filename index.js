

function superbowlWin(array){

  let record = array.find(a => a.result === "W")
  if (record){
    return record.year
  } else {
    return undefined
  }
  
}
