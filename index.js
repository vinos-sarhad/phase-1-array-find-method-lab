// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
  function superbowlWin(record) {
    const winningRecord = record.find(entry => entry.result === "W");
    return winningRecord ? winningRecord.year : undefined; ;
  }
console.log(superbowlWin(record))

 