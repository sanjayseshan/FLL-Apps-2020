// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

specialCasesComplete = 0

function specialCasesCheck(mission) {
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
    } else {return}

    if (mission == "healthUnits2") {
        if (parseInt(document.getElementById("healthUnits1").value) + parseInt(document.getElementById("healthUnits2").value) > 8) {
            document.getElementById("healthUnits1").value = 8 - parseInt(document.getElementById("healthUnits2").value)
            recalc(window['healthUnits1' + 'inc'] * parseInt(document.getElementById('healthUnits1').value), "healthUnits1", parseInt(document.getElementById('healthUnits1').value))
        }
    } else if (mission == "healthUnits1") {
        if (parseInt(document.getElementById("healthUnits1").value) + parseInt(document.getElementById("healthUnits2").value) > 8) {
            document.getElementById("healthUnits2").value = 8 - parseInt(document.getElementById("healthUnits1").value)
            recalc(window['healthUnits2' + 'inc'] * parseInt(document.getElementById('healthUnits2').value), "healthUnits2", parseInt(document.getElementById('healthUnits2').value))
        }
    }


    if (document.getElementById("yesslide1").checked && document.getElementById("yesslide3").checked && document.getElementById("yesslide4").checked && !document.getElementById("yesslide2").checked) {
        if (parseInt(document.getElementById("tireFlip3").value) > 1) {
            document.getElementById("tireFlip3").value = parseInt(document.getElementById("tireFlip3").value) - 1
            recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
        }
    }

    maxCubes = 18
    if (document.getElementById("yesbasketball1").checked) {
        maxCubes--
    }
    if (document.getElementById("yesboccia1").checked) {
        maxCubes-=2
    }

    if (parseInt(document.getElementById("bench2").value) + parseInt(document.getElementById("boccia2").value) > maxCubes) {
        if (mission == "boccia2") {
            if (parseInt(document.getElementById("bench2").value) > 0) {
                document.getElementById("bench2").value = maxCubes - parseInt(document.getElementById("boccia2").value)
                recalc(window['bench2' + 'inc'] * parseInt(document.getElementById('bench2').value), "bench2", parseInt(document.getElementById('bench2').value))
            } else {
                document.getElementById("boccia2").value = maxCubes
                recalc(window['boccia2' + 'inc'] * parseInt(document.getElementById('boccia2').value), "boccia2", parseInt(document.getElementById('boccia2').value))
            }
        } else {
            document.getElementById("boccia2").value = maxCubes - parseInt(document.getElementById("bench2").value)
            recalc(window['boccia2' + 'inc'] * parseInt(document.getElementById('boccia2').value), "boccia2", parseInt(document.getElementById('boccia2').value))
        }
    }

    whiteTireMax = 0
    if (document.getElementById("yestireFlip1").checked) {
        whiteTireMax += 1
    }
    if (document.getElementById("yestireFlip2").checked) {
        whiteTireMax += 1
    }

    if (parseInt(document.getElementById("tireFlip3").value) > whiteTireMax) {
        document.getElementById("tireFlip3").value = whiteTireMax
        recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    }

    if (whiteTireMax == 0) {
        $("#tireFlip3").val(0).slider("refresh");
        $("#tireFlip3").slider('disable');
        recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    } else {
        $("#tireFlip3").slider('enable');
    }
    specialCasesComplete = 0


    // if (document.getElementById("yestireFlip1").checked && document.getElementById("yestireFlip2").checked) {
    //     $("#tireFlip3").slider('enable');
    // } else {
    //     $("#tireFlip3").val(0).slider("refresh");
    //     $("#tireFlip3").slider('disable');
    //     recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    // }

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
    if (specialCasesComplete != 1) {
        specialCasesComplete = 1
        if (document.getElementById("precision1").value == 1) {
            recalc(document.getElementById("precision1").value * 5, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 2) {
            recalc(document.getElementById("precision1").value * 5, 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 3) {
            recalc(document.getElementById("precision1").value * (20 / 3), 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 4) {
            recalc(document.getElementById("precision1").value * (30 / 4), 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 5) {
            recalc(document.getElementById("precision1").value * (9), 'precision1', document.getElementById("precision1").value);
        }
        if (document.getElementById("precision1").value == 6) {
            recalc(document.getElementById("precision1").value * (10), 'precision1', document.getElementById("precision1").value);
        }
        specialCasesComplete = 0
    }
}

var load2020 = (function() {
    blanksave = "advantage1|0,innovationProject1|0,stepCounter1|0,slide1|0,slide2|0,slide3|0,slide4|0,bench1|0,bench2|0,bench3|0,basketball1|0,basketball2|0,basketball3|0,pullUpBar1|0,pullUpBar2|0,robotDance1|0,boccia1|0,boccia2|0,boccia3|0,tireFlip1|0,tireFlip2|0,tireFlip3|0,cellPhone1|0,treadmill1|0,rowMachine1|0,rowMachine2|0,weightMachine1|0,healthUnits1|0,healthUnits2|0,precision1|0"

    // Override function in scoring system during the checking for button conflicts


    clearbuffer()

    // Draw the layout


    starttable('M00', "M00", 'M00.jpg', ['advantage1'], 1)
    createbutton("advantage1", 25, "M00a")
    endtable()

    starttable('M01', "M01", 'M01.jpg', ['innovationProject1'], 1)
    createbutton("innovationProject1", 20, "M01a")
    createcomment("M01b")
    endtable()

    starttable('M02', "M02", 'M02.jpg', ['stepCounter1'], 0)
    createdropdown("stepCounter1", ["M02b", "M02c", "M02d", "M02e"], [0, 10, 15, 20], "M02a")
    // createbutton("stepCounter1", 5 , "M02a")
    // createbutton("stepCounter2", 15 , "M02b")
    // createbutton("stepCounter3", 20 , "M02c")
    // createbuttonconflict("stepCounter1","stepCounter2",0)
    // createbuttonconflict("stepCounter2","stepCounter3",0)
    // createbuttonconflict("stepCounter1","stepCounter3",0)
    endtable()

    starttable('M03', "M03", 'M03.jpg', ['slide1', 'slide2', 'slide3', 'slide4'], 0) //1 = Note Present
    createbutton("slide1", 5, "M03a")
    createbutton("slide2", 15, "M03b")
    createbutton("slide3", 10, "M03c")
    createbutton("slide4", 20, "M03d")
    createbuttonenables("slide1", "slide2")

    // createbuttonconflict("slide1","slide2",0)
    createbuttonenables("slide1", "slide3")
    createbuttonenables("slide1", "slide4")
    endtable()

    starttable('M04', "M04", 'M04.jpg', ['bench1', 'bench2', 'bench3'], 0)
    createbutton("bench1", 10, "M04a")
    createrange("bench2", 10, 0, 4, 0, "M04b")
    createbutton("bench3", 15, "M04c")
    createsliderenables2("bench2", "bench1", 0)
    endtable()

    starttable('M05', "M05", 'M05.jpg', ['basketball1', 'basketball2', 'basketball3'], 0)
    createbutton("basketball1", 15, "M05a")
    createbutton("basketball2", 15, "M05b")
    createbutton("basketball3", 25, "M05c")
    createbuttonconflict("basketball2", "basketball3", 0)
    endtable()

    starttable('M06', "M06", 'M06.jpg', ['pullUpBar1', 'pullUpBar2'], 0)
    createbutton("pullUpBar1", 15, "M06a")
    createbutton("pullUpBar2", 30, "M06b")
    endtable()

    starttable('M07', "M07", 'M07.jpg', ['robotDance1'], 1)
    createbutton("robotDance1", 20, "M07a")
    createbuttonconflict("robotDance1", "pullUpBar2", 0)
    createcomment("M07b")
    endtable()

    starttable('M08', "M08", 'M08.jpg', ['boccia1', 'boccia2', 'boccia3'], 0)
    createbutton("boccia1", 25, "M08a")
    // createbutton("boccia2", 5, "M08b")
    createrange("boccia2", 5, 0, 18, 0, "M08b")
    createbutton("boccia3", 10, "M08c")
    createsliderenables3("boccia2", "boccia3", 1)
    endtable()

    starttable('M09', "M09", 'M09.jpg', ['tireFlip1', 'tireFlip2', 'tireFlip3'], 1)
    createbutton("tireFlip1", 10, "M09a")
    createbutton("tireFlip2", 15, "M09b")
    createrange("tireFlip3", 5, 0, 2, 0, "M09c")
    createcomment("M09d")
    endtable()

    starttable('M10', "M10", 'M10.jpg', ['cellPhone1'], 0)
    createbutton("cellPhone1", 15, "M10a")
    endtable()

    starttable('M11', "M11", 'M11.jpg', ['treadmill1'], 1)
    createdropdown("treadmill1", ["M11b", "M11c", "M11d", "M11e", "M11f", "M11g", "M11h"], [0, 5, 10, 15, 20, 25, 30], "M11a")
    // createbutton("tredmill1", 5,"M11a")
    // createbutton("tredmill2", 10,"M11b")
    // createbutton("tredmill3", 15,"M11c")
    // createbutton("tredmill4", 20,"M11d")
    // createbutton("tredmill5", 25,"M11e")
    // createbutton("tredmill6", 30,"M11f")
    // createbuttonconflict("tredmill1","tredmill2",0)
    // createbuttonconflict("tredmill1","tredmill3",0)
    // createbuttonconflict("tredmill1","tredmill4",0)
    // createbuttonconflict("tredmill1","tredmill5",0)
    // createbuttonconflict("tredmill1","tredmill6",0)
    // createbuttonconflict("tredmill2","tredmill3",0)
    // createbuttonconflict("tredmill2","tredmill4",0)
    // createbuttonconflict("tredmill2","tredmill5",0)
    // createbuttonconflict("tredmill2","tredmill6",0)
    // createbuttonconflict("tredmill3","tredmill4",0)
    // createbuttonconflict("tredmill3","tredmill5",0)
    // createbuttonconflict("tredmill3","tredmill6",0)
    // createbuttonconflict("tredmill4","tredmill5",0)
    // createbuttonconflict("tredmill4","tredmill6",0)
    // createbuttonconflict("tredmill5","tredmill6",0)
    endtable()

    starttable('M12', "M12", 'M12.jpg', ['rowMachine1', 'rowMachine2'], 1)
    createbutton("rowMachine1", 15, "M12a")
    createbutton("rowMachine2", 15, "M12b")
    createbuttonenables("rowMachine1", "rowMachine2")
    endtable()

    starttable('M13', "M13", 'M13.jpg', ['weightMachine1'], 0)
    createdropdown("weightMachine1", ["M13b", "M13c", "M13d", "M13e"], [0, 10, 15, 20], "M13a")
    // createbutton("weightMachine1", 10 , "M13a")
    // createbutton("weightMachine2", 15 , "M13b")
    // createbutton("weightMachine3", 20 , "M13c")
    endtable()

    starttable('M14', "M14", 'M14.jpg', ['healthUnits1', 'healthUnits2'], 0)
    createrange("healthUnits1", 5, 0, 8, 0, "M14a", '')
    createrange("healthUnits2", 10, 0, 4, 0, "M14b", '')
    endtable()

    starttable('M15', "M15", 'M15.jpg', ['precision1'], 0)
    createrange("precision1", 10, 0, 6, 0, "M15a", '')
    endtable()

    /*
    window.onload = function() {
    check_missions()
    recalc(0,"advantage1",0)
}
*/

writebuffer("missionlist")
})();
