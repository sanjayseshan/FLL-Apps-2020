
from html import *
import html

clearbuffer()


starttable('M00', "M00", 'M00.jpg', ['advantage1'], 1)
createbutton("advantage1", 25, "M00a")
endtable()

starttable('M01', "M01", 'M01.jpg', ['innovationProject1'], 1)
createbutton("innovationProject1", 20, "M01a")
createcomment("M01b")
endtable()

starttable('M02', "M02", 'M02.jpg', ['stepCounter1'], 0)
createdropdown("stepCounter1", ["M02b", "M02c", "M02d", "M02e"], [0, 10, 15, 20], "M02a")

endtable()

starttable('M03', "M03", 'M03.jpg', ['slide1', 'slide2', 'slide3', 'slide4'], 0)
createbutton("slide1", 5, "M03a")
createbutton("slide2", 15, "M03b")
createbutton("slide3", 10, "M03c")
createbutton("slide4", 20, "M03d")
createbuttonenables("slide1", "slide2")
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
endtable()

starttable('M12', "M12", 'M12.jpg', ['rowMachine1', 'rowMachine2'], 1)
createbutton("rowMachine1", 15, "M12a")
createbutton("rowMachine2", 15, "M12b")
createbuttonenables("rowMachine1", "rowMachine2")
endtable()

starttable('M13', "M13", 'M13.jpg', ['weightMachine1'], 0)
createdropdown("weightMachine1", ["M13b", "M13c", "M13d", "M13e"], [0, 10, 15, 20], "M13a")
endtable()

starttable('M14', "M14", 'M14.jpg', ['healthUnits1', 'healthUnits2'], 0)
createrange("healthUnits1", 5, 0, 8, 0, "M14a")
createrange("healthUnits2", 10, 0, 4, 0, "M14b")
endtable()

starttable('M15', "M15", 'M15.jpg', ['precision1'], 0)
# createrange("precision1", 10, 0, 6, 0, "M15a")
createdropdown("precision1", ["M15b", "M15c", "M15d", "M15e", "M15f", "M15g", "M15h"], [0, 5, 10, 20, 30, 45, 60], "M13a")
endtable()

writebuffer("missionlist")