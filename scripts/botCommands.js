//hear is the bot just listening to something, not dependent on an @, if the text is typed it sends it.
module.exports = function(robot) {
  robot.hear(/Who is your pet?/, function(res){
    return res.send("A'lar")
  });
}

//respond is a call to the bot so @Kaelbot, it responds.
module.exports = function(robot) {
  robot.respond(/Hi Hubot! My name is (.*)/i, function(message){
    var name = message.match[1]; // The first group is the entire expression, use index value [1]
    if (name.toLowerCase() == "kaelbot" || name == "kaelbot sunstrider") {
      return message.send("You are not Kael'bot Sunstrider- I am Kael'bot Sunstrider!";)
    } else {
      return message.reply("Nice to meet you, " + name + "!");
    }
  })
}