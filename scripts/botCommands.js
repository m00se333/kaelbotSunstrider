//hear is the bot just listening to something, not dependent on an @, if the text is typed it sends it.

//respond is a call to the bot so @Kaelbot, it responds.
/* module.exports = function(robot) {
  
  robot.respond(/Hi Hubot! My name is (.*)/i, function(message){
    var name = message.match[1]; // The first group is the entire expression, use index value [1]
    if (name.toLowerCase() == "kaelbot" || name == "kaelbot sunstrider") {
      return message.send("You are not Kael'bot Sunstrider- I am Kael'bot Sunstrider!";)
    } else {
      return message.reply("Nice to meet you, " + name + "!");
    }
  });

  robot.hear(/Who is your pet?/, function(res){
    return res.send("A'lar")
  });
}
*/

module.exports = function(robot) {
  
  // Magic Missle 
  robot.respond(/target (.*)/i, function(message){
    var mMissles = ["pyroblast", "ice lance", "poison nova", "disenegrate"];
    var name = message.match[1];
    var selectedSpell = mMissles[Math.floor(Math.random()*mMissles.length)];

    if (selectedSpell === mMissles[0]) {
      return message.send(robot.name + " winds up a " + selectedSpell.toUpperCase() + " and hurls it at " + name + "!");
    } else if (selectedSpell === mMissles[1]) {
      return message.send(robot.name + " spams " + selectedSpell.toUpperCase() + " at " + name + "!");
    } else if (selectedSpell === mMissles[2]) {
      return message.send(robot.name + " emits a " + selectedSpell.toUpperCase() + " and " + name + " was standing right in the middle of it!")
    } else {
      return message.send(robot.name + " plants his feet in the ground and casts " + selectedSpell.toUpperCase() + " right at " + name + " and guess what it's already off cooldown...")
    }

  });

  //General "hear" code
  robot.hear(/who is the most powerful user of magic/i, function(res){
    return res.send("I am of course.")
  });

  //random 
  robot.respond(/practice/i, function(res){
    var spells = ["*felo'mena'SHA!*", "*felo'mena'SHAW!*", "_felo... mena... SHA!_", "*malore!*", "_felomenashaaa!_"];
    return res.send(res.random(spells));
  })
}
















