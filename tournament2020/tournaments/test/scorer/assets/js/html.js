// Modular HTML buttons 3.5.0
// Mostly compatible with scorers from v3.0.0 (2016). However, early scorers have a different special cases that were hard wired into the scorer and did not have a dynamic content replacer. Fully compatible with 2019+ DCR scorers (with an added buffer writer for 2019).
// Requires JQuery Mobile and JQuery

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

function createbutton(mission, points, description) {
    window[mission] = 0
    window[mission + 'save'] = 0
    window["yesText" + description] = 0
    window["noText" + description] = 0
    addToBuffer('<tr>\
<td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;" id="' + description + '"><!--<i class="only-print">__/' + points.toString() + '</i>-->\
  ' + window[description] + '\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center;">\
  <label for="yes' + mission + '" style="font-size: 12px;" id="yesText' + description + '">' + yes + '</label>\
  <input  type="radio" onclick="check_missions(\'' + mission + '\');recalc(' + points + ',\'' + mission + '\',1)" name="' + mission + '" value="true" id="yes' + mission + '" checked=false>\
  <label for="no' + mission + '" style="font-size: 12px;" id="noText' + description + '">' + no + '</label>\
  <input  type="radio" onclick="check_missions(\'' + mission + '\');recalc(0,\'' + mission + '\', 0)" name="' + mission + '"  value="false" id="no' + mission + '" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function create3button(mission, points, points2, description) {
    window[mission] = 0
    window[mission + 'save'] = 0
    window["completelyText" + description] = 0
    window["partiallyText" + description] = 0
    window["noText" + description] = 0
    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;" id="' + description + '">\
  ' + description + '\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center; font-size: 50%;">\
  <label for="completely' + mission + '" style="font-size: 12px;" id="completelyText' + description + '">Completely</label>\
  <input  type="radio" onclick="check_missions(\'' + mission + '\');recalc(' + points2 + ',\'' + mission + '\',2)" name="' + mission + '" value="completely" id="completely' + mission + '" checked=false>\
  <label for="partly' + mission + '" style="font-size: 12px;" id="partlyText' + description + '">Partly</label>\
  <input  type="radio" onclick="check_missions(\'' + mission + '\');recalc(' + points + ',\'' + mission + '\',1)" name="' + mission + '" value="partly" id="partly' + mission + '" checked=false>\
  <label for="no' + mission + '" style="font-size: 12px;" id="noText' + description + '">No</label>\
  <input  type="radio" onclick="check_missions(\'' + mission + '\');recalc(0,\'' + mission + '\', 0)" name="' + mission + '"  value="false" id="no' + mission + '" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function createcomment(description) {
    addToBuffer('<tr>\
  <td style="text-shadow: none;font-size: 90%; padding-left: 10px; padding-right: 5px; color: #990000" id="' + description + '">\
  ' + window[description] + '\
  </td>\
  </tr>')
}

function createrange(mission, increment, min, max, start, description) {
    window[mission] = 0
    window[mission + 'save'] = 0
    window[mission + 'inc'] = increment

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="' + description + '">\
  ' + window[description] + '	  </td>\
  </tr>\
  <tr>\
  <td >\
  <input type="range" increment="' + increment + '" data-highlight="true" data-theme="b" data-show-value="true" name="' + mission + '" id="' + mission + '" value="' + start + '" min="' + min + '" max="' + max + '" step="1" onchange="check_missions(\'' + mission + '\');recalc(this.value*' + increment + ',\'' + mission + '\',this.value);">\
  <p id="' + mission + 'Txt" style="color: red"></p>\
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
    window[mission + 'save'] = 0

    addToBuffer('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px;" id="' + description + '">\
  ' + window[description] + '	  </td>\
  </tr>\
  <tr>\
  <td >\
      <select onchange="check_missions(\'' + mission + '\');recalc(parseInt(this.value),\'' + mission + '\',$(\'select#select' + mission + '\')[0].selectedIndex)" name="' + mission + '" id="select' + mission + '" id="select-native-1"> ')        
        //  addToBuffer('<option value="0" id="'+description+'0"></option>')
    i = 0
    while (i < items.length) {        
        addToBuffer('<option  value="' + points[i] + '" id="' + items[i] + '">' + window[items[i]] + '</option>')
        i = i + 1
    }    
    addToBuffer('</select>\
  <p id="' + mission + 'Txt" style="color: red"></p>\
  </td>\
  </tr>')
}


function starttable(mission, title, image, children, extrarows) {
    x = 0

    if (mission == "A00") {
        missionDisp = ""
    } else {
        window["mNum" + title] = 0
        missionDisp = "<text id='mNum" + title + "'>" + missionNumbering + "</text>" + mission.split("M")[1] + " - "
    }
    //width="'+(window.innerWidth/columnCount-5)+'"
    element = 1 + 2 * children.length + extrarows
    all_mission = all_mission.concat([
        [mission, children]
    ])
    addToBuffer('\
  <div class="missionFmt">\
  <table style="width:100%; border: 1px solid black; border-collapse: collapse; " border="1">\
  <tr>\
    <td rowspan="' + element + '" width="60px"> <img src="assets/missions/' + image + '" width="58px"></td>\
    <td style="font-size: 110%; text-align: center; background-color: #489ebd; color: white;">\
  ' + missionDisp + ' <text id="' + title + '">' + window[title] + '</text>: ' + '\
      <i style="font-style: normal;" id="' + mission + 'pts">0</i>\
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
        addToBuffer('<td width="' + (100 / columnCount) + '%" style="padding-right: 2px; padding-left: 2px;" valign="top">')
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
        addToBuffer('<td width="' + (100 / columnCount) + '%" style="padding-right: 2px;" valign="top">')
    } else {}
}

//addToBuffer('hi')

function startRubric() {
    addToBuffer(' <table cellspacing="0">')
}

function startRow() {
    addToBuffer("<tr>")
}

function addSectionTitle(title) {
    addToBuffer('<td class="rbtd" rowspan="6">\
    <p class="s2" style="writing-mode: vertical-lr;text-orientation: mixed;transform: rotate(180deg);">' + title + '</p>\
    </td>')
}

function addSubSection(description, color) {
    addToBuffer('<td class="rbtd" style="border:1px solid black;color: black !important;" colspan="5" bgcolor="' + color + '">\
        ' + description + '\
    </td>')
}

function closeRow() {
    addToBuffer("</tr>")
}

function addOption(name, value, id) {
    addToBuffer('<td class="rbtd" style="border:1px solid black;">\
      <label>\
              <input class="rbitem" type="radio" name="' + name + '" id="' + name + id + '">' + value + ' \
      </label>\
    </td>')
}

function addComments(name) {
    addToBuffer('<td class="rbtd"><p style="writing-mode: vertical-lr;text-orientation: mixed;transform: rotate(180deg);">Comments:</p></td><td  colspan=5>\
      <textarea class="rbitem" id="text' + name + '" width="100%" height="100%"></textarea>\
    </td>')
}

function addLevels() {
    addToBuffer('<td></td><td></td><td class="rbtd" style="text-align: center;">Beginning</td><td style="text-align: center;" class="rbtd">Developing</td><td class="rbtd" style="text-align: center;">Accomplished</td><td style="text-align: center;" class="rbtd">Exemplary</td>')
}

function addStrengths(item1, item2, item3) {
    addToBuffer('<td class="rbtd"><p style="writing-mode: vertical-lr;text-orientation: mixed;transform: rotate(180deg);">Strengths:</p></td><td colspan="5">\
    <label>\
            <input class="rbitem" type="checkbox" id="' + item1.replace(/\s/g, "") + '" name="' + item1.replace(/\s/g, "") + '">' + item1 + '\
    </label>\
    <label>\
            <input class="rbitem" type="checkbox" id="' + item2.replace(/\s/g, "") + '" name="' + item2.replace(/\s/g, "") + '">' + item2 + '\
    </label>\
    <label>\
            <input class="rbitem" type="checkbox" id="' + item3.replace(/\s/g, "") + '" name="' + item3.replace(/\s/g, "") + '">' + item3 + '\
    </label>\
    </td>')
}