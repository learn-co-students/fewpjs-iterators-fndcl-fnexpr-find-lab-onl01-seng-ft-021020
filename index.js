const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find( x => x.result === 'W' )
  return win ? win.year : win
}

