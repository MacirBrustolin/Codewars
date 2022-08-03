function nextHappyYear(year){
  for (let i = year + 1; i <= 10000; i++){
    let arrI = String(i)
    if(arrI[0] != arrI[1] && arrI[0] != arrI[2] && arrI[0] != arrI[3] && arrI[1] != arrI[2] && arrI[1] != arrI[3] && arrI[2] != arrI[3]){
      return i
    }
  }
}
