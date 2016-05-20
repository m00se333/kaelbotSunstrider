module.exports = function(robot) {
  
  // Magic Missle 
  robot.respond(/target (.*)/i, function(message){
    var mMissles = ["pyroblast", "ice lance", "poison nova", "disenegrate"];
    var name = message.match[1];
    var selectedSpell = mMissles[Math.floor(Math.random()*mMissles.length)];

    message.reply("hello" + name);

     if (selectedSpell === mMissles[0]) {
       return message.reply(robot.name + " winds up a " + selectedSpell.toUpperCase() + " and hurls it at " + name + "!");
     } else if (selectedSpell === mMissles[1]) {
       return message.reply(robot.name + " spams " + selectedSpell.toUpperCase() + " at " + name + "!");
     } else if (selectedSpell === mMissles[2]) {
       return message.reply(robot.name + " emits a " + selectedSpell.toUpperCase() + " and " + name + " was standing right in the middle of it!")
     } else {
       return message.reply(robot.name + " plants his feet in the ground and casts " + selectedSpell.toUpperCase() + " right at " + name + " and guess what it's already off cooldown...")
     }

  });

   //General "hear" code
   robot.hear(/who is the most powerful user of magic/i, function(res){
     return res.send("I am of course.")
   });

   random 
   robot.respond(/practice/i, function(res){
     var spells = ["*felo'mena'SHA!*", "*felo'mena'SHAW!*", "_felo... mena... SHA!_", "*malore!*", "_felomenashaaa!_"];
     return res.send(res.random(spells));

   });

   robot.respond(/what can you tell us about magic and trees?/i, function(res){
     var magictrees = ["Hazel", "Cedar", "Willow", "Redwood"];
     var htmlstring = "I know about ";
       for (var i = 0; i<magictrees.length; i++) {
         htmlstring += magictrees[i] + "trees, ";

         if (magictrees[i] === 3) {
           htmlstring += " and " + magictrees[3] + "trees."
         }

       }
     res.send(htmlstring);
   })

}

   What are the most powerfull trees?

var magictrees = ["Hazel", "Cedar", "Willow", "Redwood"];
  //question asked to the witch @steve = What is your question?
 // @ steve responds = Which of these 3 trees is the most powerfull one? The Hazel, the Cedar or the Willow?
 // if answer is = Hazel
 // return = Hazel is not the most powerfull tree, but it is powerful as it used to used to gain knowledge, wisdom and poetic inspiration. 
 // A circle drawed around you with a Hazel branch will protect you from ennemies.
 













