module.exports = function(robot) {
  robot.hear(/Who is your pet?/, function(res){
    return res.send("A'lar")
  });
}

module.exports = function(robot) {
  robot.respond(/Hi Hubot! My name is (.*)/i, function(message){
    var name = message.match[1];
    if (name.toLowerCase() == "kael'bot" || name == "kael'bot sunstrider") {
      return message.send("You are not Kael'bot Sunstrider- I am Kael'bot Sunstrider!";)
    } else {
      return message.reply("Nice to meet you, " + name + "!");
    }
  } )
}