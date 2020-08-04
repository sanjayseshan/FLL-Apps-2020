<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament || $_SESSION["role"] !== "Tournament Director"){
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
 
<title>Setup Panel</title>
 
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

  <h2>EV3Lessons Tournament Director's Setup Panel
</h2>
  </section><br><section> <div class="text-body" style="font-size: 14px;">

<i style="color: red;">* Required</i>

 <!--If you are using anything earlier please upgrade using the <script>
   function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
   }
  
document.write('<a href="/upgrade.php#'+textFileToArray('/' + window.location.href.split('/')[3] + '/tournament.txt')[0]+'">Upgrade Assistant</a><br>');
  
 </script>-->
<h2>Configuration<i style="color: red;"> *</i></h2>
<?php

// configuration
//$url = 'setup.php';
$file = 'teams.txt';

// check if form has been submitted
if (isset($_POST['text']))
{
    // save the text contents
    $file = str_replace("\r", "", $file);
    file_put_contents($file, $_POST['text']);
    $textAr = explode("\n",$_POST['text']);
    foreach ($textAr as $line) {
      // processing here. 
      $teamno = (int) explode(",",$line)[0];
      if (!file_exists("../teams/" . $teamno)) {
        exec("cp -pr ../teams/template ../teams/" . $teamno);
      }
      $teamuser = str_replace("\r", "", trim(explode(",",$line)[2]));
      file_put_contents("../userdata/" . $teamuser, $teamno);
    } 
    // redirect to form again
    //header(sprintf('Location: %s', $url));

printf('<b style="color: red">Teams have been saved</b><br><!--<a href="">Return</a>.-->');
 
echo "";
}

// read the textfile
$text = file_get_contents($file);

?>

<!-- HTML form -->
<b>STEP 1: LIST OF TEAMS</b><br>
Instructions: Enter your list of teams attending this tournament. List the teams in the order you want them to appear on the scorer that the referees will use. Remember to hit the "Save" button after this step.
<br>Format: Team No.,Team Name,coach email (eg. 51,Not the Droids You Are Looking For,team@droidsrobotics.org)
<form action="" method="post">
      <textarea rows="20" cols="50" id="text" name="text"><?php echo htmlspecialchars($text) ?></textarea><br>
      <input id="teams" value="Save Teams" type="submit"/>
      <input type="reset" value="Cancel"/>
</form>
or.....<br>
<div>
 <label for="input-file">Upload teams:</label><br>
 <input type="file" id="input-file"><br>
File should be .csv with comma as the field delimeter. There should be no column headers. Format in excel should be: team #   team name   coach/team email.
</div>

<script>
document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('text'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
n = 0;while (n != 500) {document.getElementById('text').value =  document.getElementById('text').value.replace(',',' - ');n = n+1}
  document.getElementById('teams').click()
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
</script>

<b>Release Rubrics/Scores to Teams</b><br>
Instructions: This cannot be undone. Once you release rubrics, teams will be able to view them.
<?php

// configuration
//$url = 'setup.php';
$fileREL = 'release.txt';

// check if form has been submitted
if (isset($_POST['release']))
{
    // save the text contents
    $fileR = str_replace("\r", "", $fileREL);
    file_put_contents($fileR,"null");
    echo "<b style='color: red'>Released Rubrics</b>";
   
}

// read the textfile
$text = file_get_contents($file);

?>
<form action="" method="post">
      <input type="hidden" name="release" id="release">
      <input id="teams" value="Release Rubrics" type="submit"/>
</form>

<br>
<?php

// configuration
//$url = 'setup.php';
$fileREL2 = 'release2.txt';

// check if form has been submitted
if (isset($_POST['release2']))
{
    // save the text contents
    $fileR = str_replace("\r", "", $fileREL2);
    file_put_contents($fileR,"null");
    echo "<b style='color: red'>Released Scores</b>";
   
}

// read the textfile
$text = file_get_contents($file);

?>
<form action="" method="post">
      <input type="hidden" name="release2" id="release2">
      <input id="teams2" value="Release Robot Scores" type="submit"/>
</form>


<br>
<br>


<br><b>STEP 2 (OPTIONAL): SETUP ACCOUNTS FOR VOLUNTEERS</b><br>
You can have an alternate user(s) for the head referee and referees. Use the <button onclick="window.location.href = 'createuser.php?data=' + window.location.href.split('/')[3]">Create Other User(s)</button> wizard to add user(s) if you have not yet.
<br>
<br><b>STEP 3: RETURN TO MAIN PAGE</b><br>
Now that you have filled in your teams and number of rounds, your referees are ready to score! <br><button onclick="window.location.href = '../'">Back to main page</button>
<br> 

  <br>
<!--
<br><br><br><br>
<br><b>DELETE TOURNAMENT</b><br>
<button onclick="window.location.href = '/delete.php?data=' + window.location.href.split('/')[3]">Delete This Tournament</button>
-->
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
