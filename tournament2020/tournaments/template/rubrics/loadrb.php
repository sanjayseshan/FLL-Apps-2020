<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament || !($_SESSION["role"] == "Tournament Director" || $_SESSION["role"] == "Judge")){
    header("location: ../login.php");
    exit;
}
?>

<head>
<link rel="stylesheet" type="text/css" href="../style.css">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="../css/accordian.css">

<link rel="stylesheet" href="../w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 
<title>Rubric Manager</title>
 
</head>
<body><script>
        $(function() {
            $("#topbar").load("../../../topbar.php");
        });
    </script>
    <div id="topbar"></div><br>
  <div style="max-width: 1024px;margin:0 auto;">
    <script> 
    $(function(){
      $("#header").load("header.html"); 
    });
    </script>
     <div id="header"></div><br>
  <section style="padding: 5px 5px 5px 15px;">

  <h2>Rubric Manager</h2>
  </section><br><section> <div class="text-body" style="font-size: 12px;">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>



<center><html>
  <head>
<!-- <meta http-equiv="refresh" content="10;">-->
<script type="text/javascript" src="/gs_sortable.js"></script>
<script type="text/javascript">
dir = window.location.hash.substring(1);

function textFileToArray(filename) {
    var reader = (window.XMLHttpRequest != null ) 
               ? new XMLHttpRequest() 
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send();
    return reader.responseText.split(/\r\n|\n|\r/);  //split(/(\r\n|\n)/g) 
}
// col = parseInt(textFileToArray("rounds.txt")[0]) + 1;
col = 3+1;
/*
tsort = ['my_table', 's'];
f = 1;
while (f < col) {
    tsort.push('i');
    f++;
}
  */
  
//  var TSort_Data = tsort;
//  f = 0;
//  var TSort_Initial =  new Array (''+f+'D');
//  tsRegister();

  

  teamlist = textFileToArray("../admin/teams.txt");
function fileExists(file_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', file_url, false);
    http.send();

    return http.status != 404;

}
  function gentable(teamin) {
      tourn = window.location.href.split('/')[5]
      fwteam = teamin.split(',')[0];
      team = teamin.split(',')[0] + " - " + teamin.split(',')[1]
      document.write('<tr>');
      c = 1;
      document.write('  <td>'+team+'</td>');
      // while (c < col) {
      if (fileExists("../teams/" +fwteam+ "/robotScores/rb-rp-s.txt") == true) {
        // console.log("../teams/" +fwteam+ "/robotScores/" +c+ ".txt")
        teamscore = textFileToArray("../teams/" +fwteam+ "/robotScores/rb-rp-s.txt")[0].split(';')[0];
          // teamscore = "X";
      } else {
          teamscore = "0";
      }
      //document.write(' <td id="'+fwteam+'-'+c+'"><a href="/scorer/index.html?tourn='+tourn+'&team='+fwteam+'&round='+c+'">'+String(teamscore)+'</a></td>');
      document.write(' <td id="'+fwteam+'-'+c+'"><button style="background-color:lightblue;width:100%; height:60px; font-size:40px;" onclick="window.parent.location.href = \'project.php?tourn='+tourn+'&team='+fwteam+'&round='+c+'\'">'+String(teamscore)+'</button></td>');

      if (fileExists("../teams/" +fwteam+ "/robotScores/rb-rd-s.txt") == true) {
        // console.log("../teams/" +fwteam+ "/robotScores/" +c+ ".txt")
        teamscore = textFileToArray("../teams/" +fwteam+ "/robotScores/rb-rd-s.txt")[0].split(';')[0];
          // teamscore = "X";
      } else {
          teamscore = "0";
      }
      //document.write(' <td id="'+fwteam+'-'+c+'"><a href="/scorer/index.html?tourn='+tourn+'&team='+fwteam+'&round='+c+'">'+String(teamscore)+'</a></td>');
      document.write(' <td id="'+fwteam+'-'+c+'"><button style="background-color:lightblue;width:100%; height:60px; font-size:40px;" onclick="window.parent.location.href = \'robot.php?tourn='+tourn+'&team='+fwteam+'&round='+c+'\'">'+String(teamscore)+'</button></td>');


      if (fileExists("../teams/" +fwteam+ "/robotScores/rb-cv-s.txt") == true) {
        // console.log("../teams/" +fwteam+ "/robotScores/" +c+ ".txt")
        teamscore = textFileToArray("../teams/" +fwteam+ "/robotScores/rb-cv-s.txt")[0].split(';')[0];
          // teamscore = "X";
      } else {
          teamscore = "0";
      }
      //document.write(' <td id="'+fwteam+'-'+c+'"><a href="/scorer/index.html?tourn='+tourn+'&team='+fwteam+'&round='+c+'">'+String(teamscore)+'</a></td>');
      document.write(' <td id="'+fwteam+'-'+c+'"><button style="background-color:lightblue;width:100%; height:60px; font-size:40px;" onclick="window.parent.location.href = \'corevalues.php?tourn='+tourn+'&team='+fwteam+'&round='+c+'\'">'+String(teamscore)+'</button></td>');

      
	// c++;
  //     }
      document.write('</tr>');
  }
</script>
  </head>
  <body>
<!--      <h1>EV3Lessons Tournament Scoring System -> Load Scorer -> v<script>
function textFileToArray(filename) {
    var reader = (window.XMLHttpRequest != null )
               ? new XMLHttpRequest()
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send();
    return reader.responseText.split(/\r\n|\n|\r/);  //split(/(\r\n|\n)/g)
}
document.write(textFileToArray('/version.txt')[0]);
      </script>

</h1>
    <br>-->
    <br>
    <table style='width:100%;font-size:20px;border-collapse: collapse;'  border="1" id="my_table">
      <thead>
	<tr style="background-color: lime"><td>
		 Team Name
	  </td><script>
n = 1;
	    // while (n < col) {
	  document.write(' <td>Project</td><td>Robot Design</td><td>Core Values</td>');
// n++;
	  //  }
	   </script>

<!--	   <td>High Score</td>-->
    </tr></thead>
<script>
n = 0;
while (n < teamlist.length) {
	   gentable(teamlist[n]);
   n++;
}
</script>
    </table>
 <script>
//language = window.location.hash.substring(1);
/*
   scores = textFileToArray("/"+dir+"/scores.txt");
scores.sort();
x = 1;
lastteam = '';
thisteam = '';
lastpoints = 0;
thispoints = 0;
count = scores.length;
while (x < count) {
RoundId = scores[x].split(', ')[0].split(' ')[0] + scores[x].split(', ')[1];
	   Points = scores[x].split(', ')[2].split(' ')[0];
	   thisteam = scores[x].split(', ')[0].split(' ')[0];
	   thispoints = parseInt(Points);
if (thisteam == lastteam) {
	   if (thispoints > lastpoints) {
document.getElementById(scores[x].split(', ')[0].split(' ')[0] + String(col-1)).innerHTML = thispoints;
     }
     } else {
document.getElementById(scores[x].split(', ')[0].split(' ')[0] + String(col-1)).innerHTML = thispoints;
     }
	   lastteam =  scores[x].split(', ')[0].split(' ')[0];
lastpoints = parseInt(scores[x].split(', ')[2].split(' ')[0]);
	   x = x + 1;
	   document.getElementById(RoundId).innerHTML = Points;
     }
*/ 
 </script>

  </body>
</html>
</center>
</div>

</section>
<br>
    <script> 
    $(function(){
      $("#footer").load("../footer.html"); 
    });
    </script>
     <div id="footer"></div>
  </div>
<script src='js/accordian.js'></script>

</body>
