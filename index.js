const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  if( record.find( function(s) { return s.result === "W" } )){
    return record.find( function(s) { return s.result === "W" }).year
  }

  if(record.length === 0){
    return undefined

  }
  else if(record.filter( function(s) { return s['result'] === "W" })){
    return undefined

  }

}