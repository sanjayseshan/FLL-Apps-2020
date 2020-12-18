// Modular HTML buttons 3.4.0 Dynamic Content Replacer

all_mission = []

buffer = ""

function clearbuffer() {
    buffer = ""
}

function writebuffer(element) {
    document.getElementById(element).innerHTML = buffer
}

function addToBuffer(data) {
    buffer = buffer + data
}

function createbutton(mission,points,description){
    window[mission] = 0
    window[mission+'save'] = 0
    window["yesText"+description] = 0
    window["noText"+description] = 0
    addToBuffer('<tr>\
<td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;" id="'+description+'"><!--<i class="only-print">__/'+points.toString()+'</i>-->\
  '+description+'\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center;">\
  <label for="yes'+mission+'" style="font-size: 12px;" id="yesText'+description+'">Yes</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points+',\''+mission+'\',1)" name="'+mission+'" value="true" id="yes'+mission+'" checked=false>\
  <label for="no'+mission+'" style="font-size: 12px;" id="noText'+description+'">No</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc(0,\''+mission+'\', 0)" name="'+mission+'"  value="false" id="no'+mission+'" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function create3button(mission,points,points2,description){
    window[mission] = 0
    window[mission+'save'] = 0
    window["completelyText"+description] = 0
    window["partiallyText"+description] = 0
    window["noText"+description] = 0
    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;" id="'+description+'">\
  '+description+'\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center; font-size: 50%;">\
  <label for="completely'+mission+'" style="font-size: 12px;" id="completelyText'+description+'">Completely</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points2+',\''+mission+'\',2)" name="'+mission+'" value="completely" id="completely'+mission+'" checked=false>\
  <label for="partly'+mission+'" style="font-size: 12px;" id="partlyText'+description+'">Partly</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points+',\''+mission+'\',1)" name="'+mission+'" value="partly" id="partly'+mission+'" checked=false>\
  <label for="no'+mission+'" style="font-size: 12px;" id="noText'+description+'">No</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc(0,\''+mission+'\', 0)" name="'+mission+'"  value="false" id="no'+mission+'" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function createcomment(description){
    addToBuffer('<tr>\
  <td style="text-shadow: none;font-size: 90%; padding-left: 10px; padding-right: 5px; color: #990000" id="'+description+'">\
  '+description+'\
  </td>\
  </tr>')
}

function createrange(mission, increment, min, max, start, description) {
    window[mission] = 0
    window[mission+'save'] = 0
    window[mission+'inc'] = increment

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="'+description+'">\
  '+description+'	  </td>\
  </tr>\
  <tr>\
  <td >\
  <input type="range" increment="'+increment+'" data-highlight="true" data-theme="b" data-show-value="true" name="'+mission+'" id="'+mission+'" value="'+start+'" min="'+min+'" max="'+max+'" step="1" onchange="check_missions(\''+mission+'\');recalc(this.value*'+increment+',\''+mission+'\',this.value);">\
  <p id="'+mission+'Txt" style="color: red"></p>\
  </td>\
  </tr>')
    // if (start > 0) {
	// $(document).ready(function() {
	//     recalc(increment*start,mission,start)
	// });
    // }
}


function createdropdown(mission, items, points, description) {
    window[mission] = 0
    window[mission+'save'] = 0

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="'+description+'">\
  '+description+'	  </td>\
  </tr>\
  <tr>\
  <td >\
      <select onclick="check_missions(\''+mission+'\');recalc(parseInt(this.value),\''+mission+'\',$(\'select#select'+mission+'\')[0].selectedIndex)" name="'+mission+'" id="select'+mission+'" id="select-native-1"> ')
            addToBuffer('<option value="0" id="'+description+'0"></option>')
        i = 0
        while (i<items.length) {
            addToBuffer('<option  value="'+points[i]+'" id="'+items[i]+'">'+items[i]+'</option>')
            i=i+1
        } 
      addToBuffer('</select>\
  <p id="'+mission+'Txt" style="color: red"></p>\
  </td>\
  </tr>')
}


function starttable(mission, title, image, children, extrarows){
    x = 0

    if (mission == "A00") {
	missionDisp = ""
    }
    else {
	window["mNum"+title] = 0
	missionDisp = "<text id='mNum"+title+"'>missionNumbering</text>" + mission.split("M")[1] + " - "
    }
    //width="'+(window.innerWidth/columnCount-5)+'"
    element = 1 + 2*children.length + extrarows
    all_mission = all_mission.concat([[mission,children]])
    addToBuffer('\
  <div class="missionFmt">\
  <table style="width:100%; border: 1px solid black; border-collapse: collapse; " border="1">\
  <tr>\
    <td rowspan="'+element+'" width="60px"> <img src="assets/missions/'+image+'" width="58px"></td>\
    <td style="font-size: 110%; text-align: center; background-color: green; color: white;">\
  '+missionDisp+' <text id="'+title+'">'+title+'</text>: '+'\
      <i style="font-style: normal;" id="'+mission+'pts">0</i>\
    </td>\
  </tr>\
  ')
}

function endtable() {
    addToBuffer('</tr></td></table></div>')
}

function startrow(width) {
    if (window.innerWidth > width) {
	//alert(screen.width)
	//alert(width)
	addToBuffer('<td width="'+(100/columnCount)+'%" style="padding-right: 2px; padding-left: 2px;" valign="top">')
    }
}
function endrow(width) {
    if (window.innerWidth < width) {
	//alert('activate')
	addToBuffer('</td>')
    }
}

//Legacy column manager
function breakrow(minwidth, maxwidth) {
    if (window.innerWidth > minwidth && window.innerWidth < maxwidth) {
	addToBuffer('</td>')
	addToBuffer('<td width="'+(100/columnCount)+'%" style="padding-right: 2px;" valign="top">')
    } else {
    }
}

//addToBuffer('hi')

function startRubric() {
    addToBuffer(' <table cellspacing="0">')
}

function endRubric() {
    addToBuffer(' </table>')
}

function startRow() {
    addToBuffer("<tr>")
}

function addSectionTitle(title) {
    addToBuffer('<td class="rbtd" > \
    <p class="s2" style="">'+title+'</p>\
    </td>')
}

rbchildren = []
ssecct = 0
function addSubSection(description, color, children) {
    addToBuffer('<td class="rbtd" style="height:40px;border:1px solid black;color: black !important;" colspan="4" bgcolor="'+color+'">\
      <div style="display: flex;"><div style="margin-left:5px;flex: 0 0 95%;">  '+description+'   </div> <div style="text-align:right;color:red;flex:1;margin-right:5px;">  <b style="text-align:right; color:red" id="'+ssecct+description.split(" ")[0]+'"></b>  </div>    \
    </td>')
    rbchildren.push([ssecct+description.split(" ")[0],children])
    ssecct = ssecct+1
}

function closeRow() {
    addToBuffer("</tr>")
}

function addOption(name, value, id) {
    addToBuffer('<td class="rbtd" style="border:1px solid black;">\
      <label for="'+name+id+'" class="ui-btn ui-radio-off"><span class="ui-btn-text">'+value+'</span> </label>\
              <input data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-icon="null" data-iconpos="null" data-theme="c" onclick="rubricCalc()" value="'+id+'" class="rbitem" type="radio" name="'+name+'" id="'+name+id+'">\
    </td>')
}

function addCVOption(name, value, id) {
    addToBuffer('<td class="rbtd" style="text-align:center;align-items:center;border:1px solid black;">\
      \
            <label> <input onclick="rubricCalc()" value="'+id+'" class="rbitem" type="radio" name="'+name+'" id="'+name+id+'"></label>\
    </td>')
}

function addFreeOption(name, id) {
    addToBuffer('<td class="rbtd" style="border:1px solid black;">\
    <label for="'+name+id+'" class="ui-btn ui-radio-off">      <textarea class="rbitem" id="text'+name+'" cols="50" height="100%"></textarea>\
    </label>\
    \
    \
              <input onclick="rubricCalc()" value="'+id+'" class="rbitem" type="radio" name="'+name+'" id="'+name+id+'">\
    </td>')
}


function addCVFree(name, id) {
    addToBuffer('<td class="rbtd" rowspan="2" style="border:1px solid black;">\
    <textarea class="rbitem" id="text'+name+'" cols="50" height="100%"></textarea>\
    </td>')
}

function addComments(name) {
    addToBuffer('<tr><td  style="text-align:center;" colspan="4"><b><br>Feedback Comments</b></td></tr><tr><td style="text-align:center;" colspan="2">Great Job:</td><td style="text-align:center;" colspan="2">Think about:</td></tr><tr><td  colspan=2>\
      <textarea class="rbitem" id="text'+name+'1" width="100%" height="100%"></textarea>\
    </td><td  colspan=2>\
    <textarea class="rbitem" id="text'+name+'2" width="100%" height="100%"></textarea>\
  </td></tr>')
}

function addLevels(color1,color2,color3,color4) {
    addToBuffer('<td bgcolor="'+color1+'" class="rbtd" style="text-align: center;font-weight: bold;">Beginning<br>1</td><td bgcolor="'+color2+'" style="text-align: center;font-weight: bold;" class="rbtd">Developing<br>2</td><td bgcolor="'+color3+'" class="rbtd" style="text-align: center;font-weight: bold;">Accomplished<br>3</td><td style="text-align: center;font-weight: bold;" bgcolor="'+color4+'" class="rbtd">Exceeds<br>4<br><i>How has the team exceeded?</i></td>')
}



function addCVLevels(color1,color2,color3,color4) {
    addToBuffer('<td bgcolor="'+color1+'" class="rbtd" style="text-align: center;width:20%;"><b>Beginning</b><br>Minimal examples observed across the team<br>1</td><td bgcolor="'+color2+'" style="text-align: center;width:20%;" class="rbtd"><b>Developing</b><br>Some examples observes across the team<br>2</td><td bgcolor="'+color3+'" class="rbtd" style="text-align: center;width:20%;"><b>Accomplished</b><br>Multiple examples observed across the team<br>3</td><td style="text-align: center;width:20%;" bgcolor="'+color4+'" class="rbtd"><b>Exceeds</b><br>4</td><td bgcolor="black" style="text-align:center;color:white!important">Explain how team exceeds</td>')
}

function addStrengths(item1, item2, item3, item4) {
    addToBuffer('    <fieldset data-role="controlgroup">    <td colspan="5">\
<input class="rbitem" type="checkbox" id="'+item1.split(" ")[0]+'" name="'+item1.split(" ")[0]+'">\
<label for="'+item1.split(" ")[0]+'">'+item1+'</label>\
    <label for="'+item2.split(" ")[0]+'">\
    '+item2+'\
            <input class="rbitem" type="checkbox" id="'+item2.split(" ")[0]+'" name="'+item2.split(" ")[0]+'">    </label>\
    \
    <label for="'+item3.split(" ")[0]+'">'+item3+'\
            <input class="rbitem" type="checkbox" id="'+item3.split(" ")[0]+'" name="'+item3.split(" ")[0]+'">    </label>\
    \
    \
    </fieldset>    ')
}