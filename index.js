const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) { 
  let win = array.find( r => r.result === 'W')
  if (win) {
    return win.year
  }
}

