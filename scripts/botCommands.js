module.exports = function(robot) {
  
  // Magic Missle 
  robot.respond(/target (.*)/i, function(res){
    var mMissles = ["pyroblast", "ice lance", "poison nova", "disenegrate"];
    var name = res.match[1];
    var selectedSpell = mMissles[Math.floor(Math.random()*mMissles.length)];

     if (selectedSpell === mMissles[0]) {
       return res.reply(robot.name + " winds up a " + selectedSpell.toUpperCase() + " and hurls it at " + name + "!");
     } else if (selectedSpell === mMissles[1]) {
       return res.reply(robot.name + " spams " + selectedSpell.toUpperCase() + " at " + name + "!");
     } else if (selectedSpell === mMissles[2]) {
       return res.reply(robot.name + " emits a " + selectedSpell.toUpperCase() + " and " + name + " was standing right in the middle of it!")
     } else {
       return res.reply(robot.name + " plants his feet in the ground and casts " + selectedSpell.toUpperCase() + " right at " + name + " and guess what it's already off cooldown...")
     }

  });

   //General "hear" code
   robot.hear(/who is the most powerful user of magic/i, function(res){
     return res.send("I am of course.")
   });

   robot.respond(/practice/i, function(res){
     var spells = ["*felo'mena'SHA!*", "*felo'mena'SHAW!*", "_felo... mena... SHA!_", "*malore!*", "_felomenashaaa!_", "*felo'melorn!*", "_felo'melorn!_" ];
     return res.send(res.random(spells));

   });

   robot.respond(/what can you tell us about magic and trees?/i, function(res){
     var magictrees = ["Hazel", "Cedar", "Willow", "Redwood"];
     var htmlstring = "I know about ";
       for (var i = 0; i<magictrees.length; i++) {
         htmlstring += magictrees[i] + " trees, ";

         if (magictrees[i] === 3) {
           htmlstring += " and " + magictrees[3] + "trees."
         }

       }
     res.send(htmlstring);
   });

   robot.hear(/I need some motivation/i, function(res){
    var posters = ["http://imgur.com/1xC2BYX", "http://imgur.com/gallery/aLbmSbx", "http://imgur.com/gallery/aghTMdh"]
    res.reply("I got you.")
    res.send(res.random(posters));
   })

}

/* --- add code for tree if statements --- 

Here is some pseudocode to think about.

I think we're going to make a robot.respond call that takes in the splat (.*) argument.
From there we can use if and if else statements to respond with the correct information

if the robot hears (.*) function(message)

variable treeListener =  message.match[1]

    - if hazel
      <code>
    - if cedar
      <code>
    - if willow
      <code>
    - I took off redwood because it wasn't part of the original.

--- */
 













