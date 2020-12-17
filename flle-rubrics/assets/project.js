// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset


var load2020RP = (function () {

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	addToBuffer("<h1>FIRST LEGO League Explore: Reviewing Sheet</h1>")
	addToBuffer("<p>Instructions: Teams should communicate to the judges their achievement in each of the criteria below. This rubric should be filled out during the Innovation Project presentation.<br><br><b>Judges are required to tick one box on a separate line to indicate the level the team has achieved. If the team exceeds, please make a short comment in the Exceeds box.</b></p>")
	startRubric()

	startrow()
	addLevels("#E9EBF8","#BCC7E7","#8AA4D5","#5484C4")
	closeRow()

	startRow()
	addSubSection("Identify - Team had a clearly defined problem that it was well researched.","#D2DAF1",["identify","identify2"])
	closeRow()

	startRow()
	addOption("identify","Problem not clearly defined","1")
	addOption("identify","Partially clear definition of the problem","2")
	addOption("identify","Fully clear definition of the problem","3")
	addFreeOption("identify","4")
	closeRow()

	startRow()
	addOption("identify2","Minimal research","1")
	addOption("identify2","Some research but quality unclear","2")
	addOption("identify2","Wide variety of quality research","3")
	addFreeOption("identify2","4")
	closeRow()



	startRow()
	addSubSection("Design - Team generated innovative ideas independently before selecting and planning which one to develop.","#D2DAF1",["design","design2"])
	closeRow()

	startRow()
	addOption("design","Minimal idea generation across the team","1")
	addOption("design","Evidence of some ideas from across the team","2")
	addOption("design","Evidence of a lot of ideas from across the team","3")
	addFreeOption("design","4")
	closeRow()

	startRow()
	addOption("design2","Minimal planning with some team members included","1")
	addOption("design2","Some effective planning with some team members included","2")
	addOption("design2","Highly effective planning including all team members","3")
	addFreeOption("design2","4")
	closeRow()



	startRow()
	addSubSection("Create - Team developed an original idea or built on an existing one with a prototype model/drawing to represent their solution.","#D2DAF1",["create","create2"])
	closeRow()

	startRow()
	addOption("create","Minimal development of innovative solution","1")
	addOption("create","Partial development of innovative solution","2")
	addOption("create","A lot of development of innovative solution","3")
	addFreeOption("create","4")
	closeRow()

	startRow()
	addOption("create2","No model/drawing of solution","1")
	addOption("create2","Simple model/drawing which helps to share the solution","2")
	addOption("create2","Detailed model/drawing which helps to share the solution","3")
	addFreeOption("create2","4")
	closeRow()




	startRow()
	addSubSection("Iterate - Teams shared their ideas, collected feedback and included improvements in their solution","#D2DAF1",["iterate","iterate2"])
	closeRow()

	startRow()
	addOption("iterate","Minimal sharing of their solution","1")
	addOption("iterate","Some sharing of their solution","2")
	addOption("iterate","A lot of sharing of their solution","3")
	addFreeOption("iterate","4")
	closeRow()

	startRow()
	addOption("iterate2","Minimal evidence of improvements in their solution","1")
	addOption("iterate2","Some evidence of improvements in their solution","2")
	addOption("iterate2","A lot of evidence of improvements in their solution","3")
	addFreeOption("iterate2","4")
	closeRow()




	startRow()
	addSubSection("Communicate - Team shared a creative and effective presentation of their current solution and its impact on their users.","#D2DAF1",["communicate","communicate2"])
	closeRow()

	startRow()
	addOption("communicate","Presentation minimally engaging","1")
	addOption("communicate","Presentation partially engaging","2")
	addOption("communicate","Presentation very engaging","3")
	addFreeOption("communicate","4")
	closeRow()

	startRow()
	addOption("communicate2","Solution and its potential impact on others unclear","1")
	addOption("communicate2","Solution and its potential impact on others partially clear","2")
	addOption("communicate2","Solution and its potential impact on others fully clear","3")
	addFreeOption("communicate2","4")
	closeRow()


	addComments("innovationProject")

	endRubric()

	addToBuffer("Total Points: <b style='color:red;' id='projpts'></b>")

	
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("projectlist")
})();

