module.exports = function(robot) {
  robot.hear(/These boots/, function(res){
    return res.send("...are made for walkin'")
  });
}