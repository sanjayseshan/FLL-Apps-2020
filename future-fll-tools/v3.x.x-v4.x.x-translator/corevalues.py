
from html import *
import html

html.cvtrue =  True

clearbuffer()

addToBuffer("<p>Instructions: The Core Values should be the	lens through which you watch the team’s presentations. All team members should be demonstrating the Core Values in everything they do. This rubric should be used to record the Core Values observed thoughout the judging session.</p><br><br>If the team is a candidate for one of these awards, please tick the appropriate box:")

addStrengths(
    "Breakthrough Award - A team that made significant progress in their confidence and capability and who understand that what they discover is more important than what they win",
    "Rising All-Star - A team that the judges notice and expect great things from in the future",
    "Motivate - A team that embraces the culture of FIRST LEGO League through team building, team spirit, and displayed enthusiam"
)

startRubric()

startRow()
addCVLevels("#FDEAE3","#FCCEBE","#F4AE94","#EF8C6D")
closeRow()

startRow()
addSubSection("Discovery - Team explored new skills and ideas.","#FCD8CA",["discovery",""])
closeRow()

startRow()
addCVOption("discovery","","1")
addCVOption("discovery","","2")
addCVOption("discovery","","3")
addCVOption("discovery","","4")
addCVFree("discovery","5")

closeRow()


startRow()
addSubSection("Innovation - Team used creativity and persistance to solve problems","#FCD8CA",["innovation",""])
closeRow()

startRow()
addCVOption("innovation","","1")
addCVOption("innovation","","2")
addCVOption("innovation","","3")
addCVOption("innovation","","4")
addCVFree("innovation","5")

closeRow()

startRow()
addSubSection("Impact - Team applied what they learned to improve their world","#FCD8CA",["impact",""])
closeRow()

startRow()
addCVOption("impact","","1")
addCVOption("impact","","2")
addCVOption("impact","","3")
addCVOption("impact","","4")
addCVFree("impact","5")

closeRow()



startRow()
addSubSection("Inclusion - Team demonstrated respect and embraced their differences","#FCD8CA",["inclusion",""])
closeRow()

startRow()
addCVOption("inclusion","","1")
addCVOption("inclusion","","2")
addCVOption("inclusion","","3")
addCVOption("inclusion","","4")
addCVFree("inclusion","5")

closeRow()


startRow()
addSubSection("Teamwork - Team clearly showed that the had worked as a team throughout their journey","#FCD8CA",["teamwork",""])
closeRow()

startRow()
addCVOption("teamwork","","1")
addCVOption("teamwork","","2")
addCVOption("teamwork","","3")
addCVOption("teamwork","","4")
addCVFree("teamwork","5")

closeRow()


startRow()
addSubSection("Fun - Teams clearly had fun and celebrated what they had achieved","#FCD8CA",["fun",""])
closeRow()

startRow()
addCVOption("fun","","1")
addCVOption("fun","","2")
addCVOption("fun","","3")
addCVOption("fun","","4")
addCVFree("fun","5")

closeRow()


addComments("coreValues")

endRubric()	

addToBuffer3("}}")

addToBuffer("Total Points: <b style='color:red;' id='cvpts'>"+html.buffer3+"</b>")





writebuffer("cvlist")





