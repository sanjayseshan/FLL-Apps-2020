all_mission = []

buffer = ""
buffer2 = ""
window = {}

def clearbuffer() :
  global buffer
  buffer = ""

def clearbuffer2() :
  global buffer2
  buffer2 = ""


def addToBuffer(data) :
    global buffer
    buffer = buffer + data


def addToBuffer2(data) :
    global buffer2
    buffer2 = buffer2 + data

buffer3 = ""

def addToBuffer3(data) :
    global buffer3
    buffer3 = buffer3 + data

buffer4 = ""

def addToBuffer4(data) :
    global buffer4
    buffer4 = buffer4 + data

def createbutton(mission, points, description) :
    addToBuffer2("public "+mission+"Pts = "+str(points)+";")
    addToBuffer2("public "+mission+" = 0;public "+mission+"disabled = false;")
    addToBuffer4("this."+mission+"Pts = "+str(points)+";")
    addToBuffer4("this."+mission+" = 0;this."+mission+"disabled = false;")

    addToBuffer('<tr>\
<td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;" id="' + description + '"><!--<i class="only-print">__/' + str(points) + '</i>-->\
  ' + globals()[description] + '\
  </td>\
  </tr>\
  <tr>\
  <td>\
          <ion-item >\
    <!--  <ion-label slot="start">No</ion-label>-->\
      <ion-toggle disabled="{{'+mission+'disabled}}" (ionChange)="check_missions(\''+mission+'\')" [(ngModel)]="'+mission+'" class="toggle-small" toggle-class="toggle-calm" id="'+mission+'"  #ioToggle ></ion-toggle> \
    <!--  <ion-label slot="end">Yes</ion-label>-->\
    </ion-item>\
  </td>\
  </tr>')


def createcomment(description) :
    addToBuffer('<tr>\
  <td style="text-shadow: none;font-size: 90%; padding-left: 10px; padding-right: 5px; color: #990000" id="' + description + '">\
  ' + globals()[description] + '\
  </td>\
  </tr>')


def createrange(mission, increment, min, max, start, description) :
    addToBuffer2("public "+mission+"Pts = "+str(increment)+";")
    addToBuffer2("public "+mission+" = 0;public "+mission+"disabled = false;")
    addToBuffer4("this."+mission+"Pts = "+str(increment)+";")
    addToBuffer4("this."+mission+" = 0;this."+mission+"disabled = false;")

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="' + description + '">\
  ' + globals()[description] + '	  </td>\
  </tr>\
  <tr>\
  <td >\
      <ion-item>\
      <ion-badge>{{'+mission+'}}</ion-badge>\
      <ion-range disabled="{{'+mission+'disabled}}" (ionChange)="check_missions(\''+mission+'\')" pin="true" [(ngModel)]="'+mission+'" min="'+str(min)+'" max="'+str(max)+'" step="1" snaps="true" id="'+mission+'">\
      <ion-label slot="start">'+str(min)+'</ion-label>\
      <ion-label slot="end">'+str(max)+'</ion-label>\
    </ion-range>\
    </ion-item>\
  <p id="' + mission + 'Txt" style="color: red"></p>\
  </td>\
  </tr>')
    


def createdropdown(mission, items, points, description):
    addToBuffer2("public "+mission+"Pts = 1;")
    addToBuffer2("public "+mission+" = 0;public "+mission+"disabled = false;")
    addToBuffer4("this."+mission+"Pts = 1;")
    addToBuffer4("this."+mission+" = 0;this."+mission+"disabled = false;")

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="' + description + '">\
  ' + globals()[description] + '	  </td>\
  </tr>\
  <tr>\
  <td >\
      <ion-item>\
    <ion-select disabled="{{'+mission+'disabled}}" (ionChange)="check_missions(\''+mission+'\')" [(ngModel)]="'+mission+'" id="select' + mission + '"  placeholder="None">')
    i = 0
    while (i < len(items)) :
        addToBuffer('<ion-select-option value="' + str(points[i]) + '" id="' + items[i] + '">'+globals()[items[i]]+'</ion-select-option>')
        i = i + 1
    
    addToBuffer('    </ion-select>\
  </ion-item>\
  <p id="' + mission + 'Txt" style="color: red"></p>\
  </td>\
  </tr>')


totalCalc = "{{ 0 "
def starttable(mission, title, image, children, extrarows) :
    global totalCalc
    x = 0

    pointCalc = "{{ 0 "
    i=0
    while i<len(children) :
      pointCalc =  pointCalc + "+" + children[i] + "*" + children[i] + "Pts"
      totalCalc =  totalCalc + "+" + children[i] + "*" + children[i] + "Pts"
      i=i+1
    
    pointCalc=pointCalc+"}}"

    if (mission == "A00") :
        missionDisp = ""
    else :
        missionDisp = "<text id='mNum" + title + "'>" + missionNumbering + "</text>" + mission.split("M")[1] + " - "
 
    element = 1 + 2 * len(children) + extrarows
    addToBuffer('\
  <div class="missionFmt">\
  <table style="width:100%; border: 1px solid black; border-collapse: collapse; " border="1">\
  <tr>\
    <td rowspan="' + str(element) + '" width="60px"> <img src="assets/missions/' + image + '" width="58px"></td>\
    <td style="font-size: 110%; text-align: center; background-color: #489ebd; color: white;">\
  ' + missionDisp + ' <text id="' + title + '">' + globals()[title] + '</text>: ' + '\
      <i style="font-style: normal;" id="' + mission + 'pts">'+pointCalc+'</i>\
    </td>\
  </tr>\
  ')


def endtable() :
    addToBuffer('</table></div>')

def createbuttonenables(a,b):
  addToBuffer3("this.createbuttonenables('"+a+"','"+b+"');")

def createsliderenables2(a,b,c):
  addToBuffer3("this.createsliderenables2('"+a+"','"+b+"');")

def createbuttonconflict(a,b,c):
  addToBuffer3("this.createbuttonconflict('"+a+"','"+b+"',"+str(c)+");")

def createsliderenables3(a,b,c):
  addToBuffer3("this.createsliderenables3('"+a+"','"+b+"',"+str(c)+");")









def startRubric():
    addToBuffer(' <ion-grid>')


def endRubric():
    addToBuffer(' </ion-grid>')

subsec = 0

def startRow():
  global subsec
  # print(subsec)
  if subsec >= 1:
          addToBuffer("<ion-radio-group>")
          addToBuffer("<ion-row class='rbbtns'>")
  else:
    addToBuffer("<ion-row>")



def addSectionTitle(title):
    addToBuffer('<ion-col class="rbtd" > \
    <p class="s2" style="">'+title+'</p>\
    </ion-col>')


rbchildren = []
ssecct = 0
thischildren = []
addToBuffer3("{{0")

def addSubSection(description, color, children):
    global ssecct,subsec,thischildren
    subsec = 1
    addToBuffer('<ion-col class="rbtd" style="background-color: '+color+';height:40px;border:1px solid black;color: black !important;" colspan="4" bgcolor="'+color+'">\
      <div style="margin-left:5px;flex: 0 0 95%;">  '+description+'   </div> <div style="text-align:right;color:red;flex:1;margin-right:5px;">  <b style="text-align:right; color:red" id="'+str(ssecct)+description.split(" ")[0]+'">{{')

    addToBuffer(children[0]) 
    addToBuffer2(children[0]+"=0;")
    addToBuffer3("+"+children[0])
    if len(children) == 2 and not children[1]=="":
          addToBuffer("+"+children[1]) 
          addToBuffer2(children[1]+"=0;")
          addToBuffer3("+"+children[1])



    addToBuffer('}}</b>  </div>    \
    </ion-col>')
    rbchildren.append([str(ssecct)+description.split(" ")[0],children])
    thischildren = children
    ssecct = ssecct+1

cvtrue = False
def closeRow():
    global cvtrue
    global subsec
    addToBuffer("</ion-row>")
    if subsec > 1:
          addToBuffer("</ion-radio-group>")
    # print(subsec)
    if not cvtrue:
      if subsec >= 6:
        subsec = 0
    else :
      if subsec >= 2:
        subsec = 0

def addOption(name, value, id):
    global subsec
    subsec = subsec+1
    addToBuffer('<ion-col class="rbtd" style="border:1px solid black;">\
           <ion-item>      <ion-label>'+value+'</ion-label>   <ion-radio (click)="rubricCalc(\''+name+'\','+id+')" slot="start" value="'+id+'" name="'+name+'" id="'+name+id+'"></ion-radio> </ion-item>  \
    </ion-col>')


def addCVOption(name, value, id):
    global subsec
    subsec = subsec+1
    addToBuffer('<ion-col class="rbtd" style="text-align:center;align-items:center;border:1px solid black;">\
      \
         <ion-item>      <ion-label class="cvitem">['+id+']</ion-label>  <ion-radio (click)="rubricCalc(\''+name+'\','+id+')" slot="start" value="'+id+'" name="'+name+'" id="'+name+id+'"></ion-radio></ion-item> \
    </ion-col>')


def addFreeOption(name, id):
    addToBuffer('<ion-col class="rbtd" style="border:1px solid black;">\
      <ion-item>      <ion-label> </ion-label> \
    \
    \
    <ion-radio (click)="rubricCalc(\''+name+'\','+id+')" slot="start" value="'+id+'" name="'+name+'" id="'+name+id+'"></ion-radio><ion-textarea class="rbitem" id="text'+name+'" ></ion-textarea></ion-item>\
    </ion-col>')



def addCVFree(name, id):
    addToBuffer('<ion-col class="rbtd" rowspan="1" style="border:1px solid black;">\
            <ion-textarea class="rbitem" id="text'+name+'" ></ion-textarea>\
            </ion-col>')


def addComments(name):
    addToBuffer('<ion-row><ion-col  style="text-align:center;" colspan="4"><b><br>Feedback Comments</b></ion-col></ion-row><ion-row><ion-col style="text-align:center;" colspan="2">Great Job:</ion-col><ion-col style="text-align:center;" colspan="2">Think about:</ion-col></ion-row><ion-row><ion-col  colspan=2>\
      <ion-textarea rows="15" class="rbitem" id="text'+name+'1" ></ion-textarea>\
    </ion-col><ion-col  colspan=2>\
      <ion-textarea rows="15" class="rbitem" id="text'+name+'2" ></ion-textarea>\
  </ion-col></ion-row>')


def addLevels(color1,color2,color3,color4):
    addToBuffer('<ion-col bgcolor="'+color1+'" class="rbtd" style="background-color: '+color1+';text-align: center;font-weight: bold;">Beginning<br>1</ion-col><ion-col bgcolor="'+color2+'" style="background-color: '+color2+';text-align: center;font-weight: bold;" class="rbtd">Developing<br>2</ion-col><ion-col bgcolor="'+color3+'" class="rbtd" style="background-color: '+color3+';text-align: center;font-weight: bold;">Accomplished<br>3</ion-col><ion-col style="background-color: '+color4+';text-align: center;font-weight: bold;" bgcolor="'+color4+'" class="rbtd">Exceeds<br>4<br><i>How has the team exceeded?</i></ion-col>')




def addCVLevels(color1,color2,color3,color4):
    addToBuffer('<ion-col bgcolor="'+color1+'" class="rbtd" style="background-color: '+color1+';text-align: center;width:20%;"><b>Beginning</b><br>Minimal examples observed across the team<br>1</ion-col><ion-col bgcolor="'+color2+'" style="background-color: '+color2+';text-align: center;width:20%;" class="rbtd"><b>Developing</b><br>Some examples observes across the team<br>2</ion-col><ion-col bgcolor="'+color3+'" class="rbtd" style="background-color: '+color3+';text-align: center;width:20%;"><b>Accomplished</b><br>Multiple examples observed across the team<br>3</ion-col><ion-col style="background-color: '+color4+';text-align: center;width:20%;" bgcolor="'+color4+'" class="rbtd"><b>Exceeds</b><br>4</ion-col><ion-col bgcolor="black" style="background-color:black;text-align:center;color:white!important">Explain how team exceeds</ion-col>')


def addStrengths(item1, item2, item3):
    addToBuffer('  \
                <ion-item><ion-label>'+item1+'</ion-label> <ion-checkbox id="'+item1.split(" ")[0]+'" name="'+item1.split(" ")[0]+'" color="primary"></ion-checkbox></ion-item>\
\
    \
           <ion-item><ion-label>'+item2+'</ion-label><ion-checkbox id="'+item2.split(" ")[0]+'" name="'+item2.split(" ")[0]+'" color="primary"></ion-checkbox></ion-item> \
    \
         <ion-item><ion-label>'+item3+'</ion-label>      <ion-checkbox id="'+item3.split(" ")[0]+'" name="'+item3.split(" ")[0]+'" color="primary"></ion-checkbox> </ion-item>\
   ')





def writebuffer(div):
  if "mission" in div:
    global totalCalc
    totalCalc=totalCalc+"}}"
    addToBuffer("<div style='position:fixed; bottom:0px; width:100%;text-align:center;background-color: blue;z-index:1000;color:white;'>Points: <i>"+totalCalc+"</i> &nbsp; &nbsp; <ion-button color='secondary' (click)='reset()'>Reset</ion-button></div>")
  print("HTML")
  print(buffer)
  print("\n\n\nTS")
  print(buffer2)
  print("\n\n\nTS_NGINIT")
  print(buffer3)
  print("\n\n\nTS_RESET")
  print(buffer4)


versionNum = "1.0"
versionDay = str(4)
versionMonth = str(8)
versionYear = str(2020)
versionText = ""

langs = ['en:United States:English']

monthNames = []

translatorCredit = ""

yes = "Yes"
no = "No"
partly = "Partly"
completely = "Completely"
resetText = "Reset"
saveText = "Save"
savescoreText = "Save Score"
loadsaveText = "Load Score No."
deletesaveText = "Delete All Saved Scores"
importsaveText = "Import Shared Scores"
exportsaveText = "Share Scores"
signin = "Sign in with"
signout = "Sign out of"
GoogleCreate = "Create New Spreadsheet"
GoogleOpen = "Open Google Spreadsheet"
created = "Created"
savedto = "Saved to"
dateText = "Date/Time"
totalText = "Total Points"
savedText = "Saved"
loadedText = "Loaded"

monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
improvementText = "Score History"
scorerText = "Scorer"
timersText = "Timers"
savesText = "Saves"
startText = "Start"
stopText = "Stop"
pointsText = "Points"

sketchTitle = "Strategy Planner"
drawingsText = "Saved Drawings"
saveDrawingText = "Save Drawing"
deleteSavedDrawingsText = "Delete All Saved Drawings"
loadSavedDrawingText = "Load Saved Drawing"
exportSavedDrawingsText = "Share Drawings"
importSavedDrawingsText = "Import Shared Drawings"
exportPNGText = "Export Drawing as PNG"

doneText = "Completed"

timerText = "Timer:"
stopwatchText = "Stopwatch:"

undefinedText = "undefined"

revisionText = "RePLAY Scorer Version "
copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
tournamentText = "A version of this scorer with added features needed for a tournament can be found <a href='http://tournament.flltutorials.com/'>here</a>."

title = "FLL RePLAY Scorer"

missionNumbering = "M"

M00 = "Advantage"
M00a = "Does the team's Equipment fit in the Small Inspection Area?"

M01 = "Innovation Project"
M01a = "Is any part of the model touching either the RePLAY logo or the gray area around the bench?"
M01b = "The model must be made of at least two white LEGO pieces and measures at least as long as four LEGO studs in at least one direction."

M02 = "Step Counter"
M02a = "The bottom of the pointer is on"
M02b = "None"
M02c = "Magenta"
M02d = "Yellow"
M02e = "Blue"

M03 = "Slide"
M03a = "Is the first slide figure off the slide?"
M03b = "Is the second slide figure off the slide?"
M03c = "Is a slide figure completely in home?"
M03d = "Is a slide figure held completely off the mat by the heavy tire and is touching nothing else?"

M04 = "Bench"
M04a = "Is the bench down flat?"
M04b = "How many cubes are touching the mat in hopscotch spaces?"
M04c = "Is the backrest completely out of both of its holes?"

M05 = "Basketball"
M05a = "Is there is a cube in the crate?"
M05b = "Does the crate rest on the middle height’s white stopper?"
M05c = "Does the crate rest on the top height’s white stopper?"

M06 = "Pull-Up Bar"
M06a = "Has the robot passed completely through the pull-up bar’s upright frame at any time?"
M06b = "Does the pull-up bar hold 100% of the robot up off the mat at the end of the match?"

M07 = "Robot Dance"
M07a = "Is the robot’s controller is at least partly over the dance floor in a “dancing” motion at the end of the match?"
M07b = "Any silly or skilled repetitive action counts as dancing – do something fun! For M07, you cannot score this plus the “held up” score from M06 in the same match."

M08 = "Boccia"
M08a = "Have both share models sent only one cube anywhere onto the opposing field and those cubes color-match each other?"
M08b = "How many cubes are completely in your frame or target?"
M08c = "Is there at least one yellow cube completely in your target?"

M09 = "Tire Flip"
M09a = "Is the light (blue tread) tire white center up?"
M09b = "Is the heavy (black tread) tire white center up?"
M09c = "How many white-center-up tires are completely in the large target circle?"
M09d = "If the heavy tire crosses the red flip line at any time, even partly, it scores zero."

M10 = "Cell Phone"
M10a = "Is the cell phone white side up and resting on only the mat?"

M11 = "Treadmill"
M11a = "The robot has spinned the rollers so the pointer points to"
M11b = "None"
M11c = "Grey"
M11d = "Red"
M11e = "Orange"
M11f = "Yellow"
M11g = "Light Green"
M11h = "Dark Green"

M12 = "Row Machine"
M12a = "Is the free wheel completely outside the large circle?"
M12b = "Is the free wheel completely in the small circle"

M13 = "Weight Machine"
M13a = "The stopper is under the lever and lever setting is on"
M13b = "None"
M13c = "Blue"
M13d = "Magenta"
M13e = "Yellow"

M14 = "Health Units"
M14a = "How many health units are touching either the RePLAY logo or the gray area around the bench?"
M14b = "How many health units are looped over a pull-up bar post as shown – maximum of four – and touching no equipment?"

M15 = "Precision"
M15a = "How many Precision Tokens are left on the field?"
M15b = "0"
M15c = "1"
M15d = "2"
M15e = "3"
M15f = "4"
M15g = "5"
M15h = "6"

