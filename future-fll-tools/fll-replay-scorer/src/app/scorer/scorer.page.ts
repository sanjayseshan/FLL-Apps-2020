import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.page.html',
  styleUrls: ['./scorer.page.scss'],
})
export class ScorerPage implements OnInit {

  public folder: string = "Scorer";

  constructor(private activatedRoute: ActivatedRoute) {

     }

   
public advantage1Pts = 25;public advantage1 = 0;public advantage1disabled = false;public innovationProject1Pts = 20;public innovationProject1 = 0;public innovationProject1disabled = false;public stepCounter1Pts = 1;public stepCounter1 = 0;public stepCounter1disabled = false;public slide1Pts = 5;public slide1 = 0;public slide1disabled = false;public slide2Pts = 15;public slide2 = 0;public slide2disabled = false;public slide3Pts = 10;public slide3 = 0;public slide3disabled = false;public slide4Pts = 20;public slide4 = 0;public slide4disabled = false;public bench1Pts = 10;public bench1 = 0;public bench1disabled = false;public bench2Pts = 10;public bench2 = 0;public bench2disabled = false;public bench3Pts = 15;public bench3 = 0;public bench3disabled = false;public basketball1Pts = 15;public basketball1 = 0;public basketball1disabled = false;public basketball2Pts = 15;public basketball2 = 0;public basketball2disabled = false;public basketball3Pts = 25;public basketball3 = 0;public basketball3disabled = false;public pullUpBar1Pts = 15;public pullUpBar1 = 0;public pullUpBar1disabled = false;public pullUpBar2Pts = 30;public pullUpBar2 = 0;public pullUpBar2disabled = false;public robotDance1Pts = 20;public robotDance1 = 0;public robotDance1disabled = false;public boccia1Pts = 25;public boccia1 = 0;public boccia1disabled = false;public boccia2Pts = 5;public boccia2 = 0;public boccia2disabled = false;public boccia3Pts = 10;public boccia3 = 0;public boccia3disabled = false;public tireFlip1Pts = 10;public tireFlip1 = 0;public tireFlip1disabled = false;public tireFlip2Pts = 15;public tireFlip2 = 0;public tireFlip2disabled = false;public tireFlip3Pts = 5;public tireFlip3 = 0;public tireFlip3disabled = false;public cellPhone1Pts = 15;public cellPhone1 = 0;public cellPhone1disabled = false;public treadmill1Pts = 1;public treadmill1 = 0;public treadmill1disabled = false;public rowMachine1Pts = 15;public rowMachine1 = 0;public rowMachine1disabled = false;public rowMachine2Pts = 15;public rowMachine2 = 0;public rowMachine2disabled = false;public weightMachine1Pts = 1;public weightMachine1 = 0;public weightMachine1disabled = false;public healthUnits1Pts = 5;public healthUnits1 = 0;public healthUnits1disabled = false;public healthUnits2Pts = 10;public healthUnits2 = 0;public healthUnits2disabled = false;public precision1Pts = 1;public precision1 = 0;public precision1disabled = false;

  ngOnInit() {
    
    // this.scorer = this.activatedRoute.snapshot.paramMap.get('id');


    this.createbuttonenables('slide1','slide2');this.createbuttonenables('slide1','slide3');this.createbuttonenables('slide1','slide4');this.createsliderenables2('bench2','bench1');this.createbuttonconflict('basketball2','basketball3',0);this.createbuttonconflict('robotDance1','pullUpBar2',0);this.createsliderenables3('boccia2','boccia3',1);this.createbuttonenables('rowMachine1','rowMachine2');

    this.check_missions('none')

  }

  reset() {
this.advantage1Pts = 25;this.advantage1 = 0;this.advantage1disabled = false;this.innovationProject1Pts = 20;this.innovationProject1 = 0;this.innovationProject1disabled = false;this.stepCounter1Pts = 1;this.stepCounter1 = 0;this.stepCounter1disabled = false;this.slide1Pts = 5;this.slide1 = 0;this.slide1disabled = false;this.slide2Pts = 15;this.slide2 = 0;this.slide2disabled = false;this.slide3Pts = 10;this.slide3 = 0;this.slide3disabled = false;this.slide4Pts = 20;this.slide4 = 0;this.slide4disabled = false;this.bench1Pts = 10;this.bench1 = 0;this.bench1disabled = false;this.bench2Pts = 10;this.bench2 = 0;this.bench2disabled = false;this.bench3Pts = 15;this.bench3 = 0;this.bench3disabled = false;this.basketball1Pts = 15;this.basketball1 = 0;this.basketball1disabled = false;this.basketball2Pts = 15;this.basketball2 = 0;this.basketball2disabled = false;this.basketball3Pts = 25;this.basketball3 = 0;this.basketball3disabled = false;this.pullUpBar1Pts = 15;this.pullUpBar1 = 0;this.pullUpBar1disabled = false;this.pullUpBar2Pts = 30;this.pullUpBar2 = 0;this.pullUpBar2disabled = false;this.robotDance1Pts = 20;this.robotDance1 = 0;this.robotDance1disabled = false;this.boccia1Pts = 25;this.boccia1 = 0;this.boccia1disabled = false;this.boccia2Pts = 5;this.boccia2 = 0;this.boccia2disabled = false;this.boccia3Pts = 10;this.boccia3 = 0;this.boccia3disabled = false;this.tireFlip1Pts = 10;this.tireFlip1 = 0;this.tireFlip1disabled = false;this.tireFlip2Pts = 15;this.tireFlip2 = 0;this.tireFlip2disabled = false;this.tireFlip3Pts = 5;this.tireFlip3 = 0;this.tireFlip3disabled = false;this.cellPhone1Pts = 15;this.cellPhone1 = 0;this.cellPhone1disabled = false;this.treadmill1Pts = 1;this.treadmill1 = 0;this.treadmill1disabled = false;this.rowMachine1Pts = 15;this.rowMachine1 = 0;this.rowMachine1disabled = false;this.rowMachine2Pts = 15;this.rowMachine2 = 0;this.rowMachine2disabled = false;this.weightMachine1Pts = 1;this.weightMachine1 = 0;this.weightMachine1disabled = false;this.healthUnits1Pts = 5;this.healthUnits1 = 0;this.healthUnits1disabled = false;this.healthUnits2Pts = 10;this.healthUnits2 = 0;this.healthUnits2disabled = false;this.precision1Pts = 1;this.precision1 = 0;this.precision1disabled = false;
    this.ngOnInit()
  }

  public specialCasesComplete = 0

  specialCasesCheck(mission) {
    if (this.specialCasesComplete != 1) {
        this.specialCasesComplete = 1
    } else {return}

    console.log(this.healthUnits1 + this.healthUnits2)
    if (mission == "healthUnits2") {
        if (this.healthUnits1 + this.healthUnits2 > 8) {
            this.healthUnits1 = 8 - this.healthUnits2
            // recalc(window['healthUnits1' + 'inc'] * parseInt(document.getElementById('healthUnits1').value), "healthUnits1", parseInt(document.getElementById('healthUnits1').value))
        }
    } else if (mission == "healthUnits1") {
        if (this.healthUnits1 + this.healthUnits2 > 8) {
            this.healthUnits2 = 8 - this.healthUnits1
            // recalc(window['healthUnits2' + 'inc'] * parseInt(document.getElementById('healthUnits2').value), "healthUnits2", parseInt(document.getElementById('healthUnits2').value))
        }
    }


    if (this.slide1 && this.slide3 && this.slide4 && !this.slide2) {
        if (this.tireFlip3 > 1) {
          this.tireFlip3 = this.tireFlip3 - 1
            // recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
        }
    }

    var maxCubes = 18
    if (this.basketball1) {
        maxCubes--
    }
    if (this.boccia1) {
        maxCubes-=2
    }

    if (this.bench2 + this.boccia2 > maxCubes) {
        if (mission == "boccia2") {
            if (this.bench2 > 0) {
              this.bench2 = maxCubes - this.boccia2
                // recalc(window['bench2' + 'inc'] * parseInt(document.getElementById('bench2').value), "bench2", parseInt(document.getElementById('bench2').value))
            } else {
              this.boccia2 = maxCubes
                // recalc(window['boccia2' + 'inc'] * parseInt(document.getElementById('boccia2').value), "boccia2", parseInt(document.getElementById('boccia2').value))
            }
        } else {
          this.boccia2 = maxCubes - this.bench2
            // recalc(window['boccia2' + 'inc'] * parseInt(document.getElementById('boccia2').value), "boccia2", parseInt(document.getElementById('boccia2').value))
        }
    }

    var whiteTireMax = 0
    if (this.tireFlip1) {
        whiteTireMax += 1
    }
    if (this.tireFlip2) {
        whiteTireMax += 1
    }

    if (this.tireFlip3 > whiteTireMax) {
      this.tireFlip3 = whiteTireMax
        // recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    }

    if (whiteTireMax == 0) {
      this.tireFlip3 = 0
      this.tireFlip3disabled = true
        // $("#tireFlip3").val(0).slider("refresh");
        // $("#tireFlip3").slider('disable');
        // recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    } else {
        // $("#tireFlip3").slider('enable');
        this.tireFlip3disabled = false
    }
    this.specialCasesComplete = 0


    // if (document.getElementById("yestireFlip1").checked && document.getElementById("yestireFlip2").checked) {
    //     $("#tireFlip3").slider('enable');
    // } else {
    //     $("#tireFlip3").val(0).slider("refresh");
    //     $("#tireFlip3").slider('disable');
    //     recalc(window['tireFlip3' + 'inc'] * parseInt(document.getElementById('tireFlip3').value), "tireFlip3", parseInt(document.getElementById('tireFlip3').value))
    // }

}  
  
checkbuttonconflict(mission1, mission2, priority) {
  if (this[mission1] == true && this[mission2] == true) {
      if (priority != this[mission1]) {
          this[mission1] = false
      }
      if (priority != this[mission2]) {
        this[mission2 ]= false
      }
  }
}

public conflicts = []

public createbuttonconflict(conflict: string, mission: string, priority: number) {
  this.conflicts = this.conflicts.concat([
      [conflict, mission, priority]
  ])
}

public enables = []

createbuttonenables( mission: string,  enabled: string) {
  this.enables = this.enables.concat([
      [mission, enabled]
  ])
}



checkbuttonenables(mission, enabled) {
  if (this[mission] == true) {
      this[enabled+"disabled"] = false
  } else {
    //   $('#no' + enabled).checkboxradio('disable');
    //   $('#yes' + enabled).checkboxradio('disable');
    //   document.getElementById('yes' + enabled).checked = false
    //   document.getElementById('no' + enabled).checked = true
    this[enabled] = false 
      this[enabled+"disabled"] = true
      console.log("disable "+enabled)
      console.log(this[enabled+"disabled"])
    //   recalc(0, mission, 0)
  }
}

public enables2 = []

createsliderenables(mission, enabled, value) {
  this.enables2 = this.enables2.concat([
      [mission, enabled, value]
  ])
}
public enables4=[]

createsliderenables3(mission, enabled, value) {
  this.enables4 = this.enables4.concat([
      [mission, enabled, value]
  ])
}

checksliderenables(mission, enabled, value) {
  if (this[mission] = value) { 
    this[enabled+"disabled"] = false
  } else {
    this[enabled] = false
    this[enabled+"disabled"] = true

//       $('#no' + enabled).checkboxradio('disable');
//       $('#yes' + enabled).checkboxradio('disable');
//       document.getElementById('yes' + enabled).checked = false
//       document.getElementById('no' + enabled).checked = true
//       recalc(0, mission, 0)
  }
}


checksliderenables3(mission, enabled, value) {
  if (this[mission] >= value) { 
    this[enabled+"disabled"] = false
    //   $('#no' + enabled).checkboxradio('enable');
    //   $('#yes' + enabled).checkboxradio('enable');
  } else {
    this[enabled] = false
    this[enabled+"disabled"] = true
    //   $('#no' + enabled).checkboxradio('disable');
    //   $('#yes' + enabled).checkboxradio('disable');
    //   document.getElementById('yes' + enabled).checked = false
    //   document.getElementById('no' + enabled).checked = true
    //   recalc(0, enabled, 0)
  }
}

public enables3 = []

createsliderenables2(mission, enabled) {
  this.enables3 = this.enables3.concat([
      [mission, enabled]
  ])
}

checksliderenables2(mission, enables) {
  if (this[enables] == true) {
    this[mission+"disabled"] = false
    //   $("#" + mission).slider('enable');
  } else {
    this[mission] = 0
    this[mission+"disabled"] = true
    //   $("#" + mission).val(0).slider("refresh");
    //   $("#" + mission).slider('disable');
    //   recalc(0, mission, 0)
  }
}

check_missions(mission) {
  console.log(this.enables2)
  // alert("test")
  this.specialCasesCheck(mission)
      // checkDarkTheme()
  var conflictcount = 0;
  while (conflictcount < this.conflicts.length) {
      if (this.conflicts[conflictcount][2] == '') {
        this.checkbuttonconflict(this.conflicts[conflictcount][0], this.conflicts[conflictcount][1], mission)
      } else {
        this.checkbuttonconflict(this.conflicts[conflictcount][0], this.conflicts[conflictcount][1], this.conflicts[conflictcount][2])
      }
      conflictcount = conflictcount + 1
  }

  // enablecount = 0
  // while (enablecount < enables.length){
  //   thismission = enables[enablecount][1]
  //     $('#no'+thismission).checkboxradio('disable');
  //     $('#yes'+thismission).checkboxradio('disable');
  //   enablecount = enablecount + 1
  // }

  // enablecount = 0
  // while (enablecount < enables2.length){
  //   thismission = enables2[enablecount][1]
  //   $('#no'+thismission).checkboxradio('disable');
  //   $('#yes'+thismission).checkboxradio('disable');
  //   enablecount = enablecount + 1
  // }

  var enablecount = 0
  while (enablecount < this.enables.length) {
      this.checkbuttonenables(this.enables[enablecount][0], this.enables[enablecount][1])
      enablecount = enablecount + 1
  }

  enablecount = 0
  while (enablecount < this.enables2.length) {
    this.checksliderenables(this.enables2[enablecount][0], this.enables2[enablecount][1], this.enables2[enablecount][2])
      enablecount = enablecount + 1
  }

  enablecount = 0
  while (enablecount < this.enables3.length) {
    this.checksliderenables2(this.enables3[enablecount][0], this.enables3[enablecount][1])
      enablecount = enablecount + 1
  }

  enablecount = 0
  while (enablecount < this.enables4.length) {
    this.checksliderenables3(this.enables4[enablecount][0], this.enables4[enablecount][1], this.enables4[enablecount][2])
      enablecount = enablecount + 1
  }

  enablecount = 0
  while (enablecount < this.enables.length) {
      var thismission = this.enables[enablecount][1]
      if (this[thismission+"disabled"]) {
          this[thismission] = false
          this.recalc(0, thismission, 0)
              // $('yes'+thismission).checkboxradio("refresh");
              // $('no'+thismission).checkboxradio("refresh");
      }
      enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < this.enables2.length) {
      thismission = this.enables2[enablecount][1]
      if (this[thismission+"disabled"]) {
        this[thismission] = false
        this[thismission+"disabled"] = true

        this.recalc(0, thismission, 0)
              // $('yes'+thismission).checkboxradio("refresh");
              // $('no'+thismission).checkboxradio("refresh");
      }
      enablecount = enablecount + 1
  }
//   $("input[type='radio']").attr("checked", true).checkboxradio("refresh");
}


recalc(points, mission, saveValue) {

  // if (alt == 1 && points == 0) {
  //   savepts = 1
  // } else if (alt == 1 && points != 0) {
  //   savepts = points
  // } else if (alt > 1 && points != 0) {
  //   savepts = alt
  // } else {
  //   savepts = 0
  // }
  //var mission = 'hi'
//   window[mission] = points
//   window[mission + 'save'] = saveValue
//   specialCasesRecalc(mission)

//   counter = 0
//   allmission = 0
//   while (counter < all_mission.length) {
//       counter1 = 0
//       thismission = 0
//       while (counter1 < all_mission[counter][1].length) {
//           thismission = window[all_mission[counter][1][counter1]] + thismission
//               //alert(thismission)
//           counter1 = counter1 + 1
//               //		alert(allmission)
//       }
//       allmission = allmission + thismission
//       document.getElementById(all_mission[counter][0] + "pts").innerHTML = thismission
//       counter = counter + 1
//   }

//   document.getElementById('allpoints').innerHTML = allmission
//   specialCasesRecalc(mission)

//   var ranges = $("input[data-type='range']");
//   var radios = $("input[type='radio']");

//   ranges.slider("refresh");
//   radios.checkboxradio("refresh");

//   checkDarkTheme()

}




}
