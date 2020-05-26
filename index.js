function superbowlWin(array) { let champion = array.find((e) => e.result == "W");

return champion ? champion.year : undefined}