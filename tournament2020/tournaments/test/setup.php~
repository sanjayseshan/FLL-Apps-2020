<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="css/accordian.css">

<link rel="stylesheet" href="w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 
<title>Setup Panel</title>
 
</head>
<body>
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

<i style="color: red;">* Required</i></p>
You are running Tournament Scoring System v<script>
function textFileToArray(filename) {
    var reader = (window.XMLHttpRequest != null ) 
               ? new XMLHttpRequest() 
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send();
    return reader.responseText.split(/\r\n|\n|\r/);  //split(/(\r\n|\n)/g) 
}
document.write(textFileToArray('version.txt')[0]);
  </script>
<br>
 <br>The current version of the Tournament Scoring System is v<script>
function textFileToArray(filename) {
    var reader = (window.XMLHttpRequest != null ) 
               ? new XMLHttpRequest() 
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send();
    return reader.responseText.split(/\r\n|\n|\r/);  //split(/(\r\n|\n)/g) 
}
document.write(textFileToArray('/version.txt')[0]);
  </script>. <!--If you are using anything earlier please upgrade using the <script>
   function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
   }
  
document.write('<a href="/upgrade.php#'+textFileToArray('/' + window.location.href.split('/')[3] + '/tournament.txt')[0]+'">Upgrade Assistant</a><br>');
  
 </script>-->
<br>
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

    // redirect to form again
    header(sprintf('Location: %s', $url));

printf('<b style="color: red">Teams have been saved</b><br><!--<a href="%s">Return</a>.-->', htmlspecialchars($url));
 
echo "";
}

// read the textfile
$text = file_get_contents($file);

?>

<!-- HTML form -->
<b>STEP 1: LIST OF TEAMS</b><br>
Instructions: Enter your list of teams attending this tournament. List the teams in the order you want them to appear on the scorer that the referees will use. Remember to hit the "Save" button after this step.
<br>Format: Team # - Team Name (eg. 51 - Droids Robotics)
<form action="" method="post">
      <textarea rows="20" cols="50" id="text" name="text"><?php echo htmlspecialchars($text) ?></textarea><br>
      <input id="teams" value="Save Teams" type="submit"/>
      <input type="reset" value="Cancel"/>
</form>
or.....<br>
<div>
 <label for="input-file">Upload teams:</label><br>
 <input type="file" id="input-file"><br>
File should be .csv with comma as the field delimeter. There should be no column headers. Format in excel should be: team #   team name.
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


<br>
<br>

<?php

// configuration
//$url2 = 'setup.php';
$file2 = 'rounds.txt';

// check if form has been submitted
if (isset($_POST['text2']))
   {
$file2 = str_replace("\r", "", $file2);
    // save the text contents
    file_put_contents($file2, $_POST['text2']);

    // redirect to form again
    header(sprintf('Location: %s', $url2));
  //  printf('<a href="%s">Return</a>.', htmlspecialchars($url));
//   exit();
    printf('<b style="color: red">Number of Rounds have been saved</b><br><!--<a href="%s">Return</a>.-->', htmlspecialchars($url));
}

// read the textfile
$text2 = file_get_contents($file2);

?>
<!-- HTML form --><b>STEP 2: NUMBER OF ROUNDS:</b><br>
Instructions: Pick the number of rounds you will have at this tournament. Hit the "Save" button after this step.<br>
<form action="" method="post">
<input type="number" rows="20" cols="50" id="text2" name="text2" value="<?php echo htmlspecialchars($text2) ?>">
<br>
<input value="Save Rounds" type="submit" />
<input value="Cancel" type="reset" />

</form>



<br>
<br>

<?php

// configuration
//$url2 = 'setup.php';
$file3 = 'roundsrb.txt';

// check if form has been submitted
if (isset($_POST['text20']))
   {
$file3 = str_replace("\r", "", $file3);
    // save the text contents
    file_put_contents($file3, $_POST['text20']);

    // redirect to form again
    header(sprintf('Location: %s', $url2));
  //  printf('<a href="%s">Return</a>.', htmlspecialchars($url));
//   exit();
    printf('<b style="color: red">Number of Judging Rounds have been saved</b><br><!--<a href="%s">Return</a>.-->', htmlspecialchars($url));
}

// read the textfile
$text20 = file_get_contents($file3);

?>
<!-- HTML form -->
<!--<b>NUMBER OF Judging ROUNDS:</b><br>
Instructions: Pick the number of rounds you will have at this tournament. Hit the "Save" button after this step.<br>
<form action="" method="post">
<input type="number" rows="20" cols="50" id="text20" name="text20" value="<?php echo htmlspecialchars($text20) ?>">
<br>
<input value="Save Judging Rounds" type="submit" />
<input value="Cancel" type="reset" />

</form>

-->



<?php
   if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      
      $expensions= array("jpg");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be less than 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"images/".$file_name);
         echo "Picture has been saved";
      }
      else{
         print_r($errors);
      }
   }
?>
<html>
   <body><br>
<b>STEP 3 (OPTIONAL): UPLOAD YOU TOURNAMENT'S OR FLL REGION'S LOGO</b><br>      
  If you do not have a picture, image will default to FIRST logo. Picture should be called logo.jpg and should be a square.<br>    <form action="" method="POST" enctype="multipart/form-data">
         <input type="file" name="image" />
       <br>  <input type="submit"/>
      </form>
      
   </body>
</html>

<br><b>STEP 4 (OPTIONAL): SETUP ACCOUNTS FOR VOLUNTEERS</b><br>
You can have an alternate user(s) for the head referee and referees. Use the <button onclick="window.location.href = 'createpassword.php?data=' + window.location.href.split('/')[3]">Create Other User(s)</button> wizard to add user(s) if you have not yet.
<br>
<br><b>STEP 5: RETURN TO MAIN PAGE</b><br>
Now that you have filled in your teams and number of rounds, your referees are ready to score! <br><button onclick="window.location.href = 'url.html'">Back to main page</button>
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
      $("#footer").load("footer.html"); 
    });
    </script>
     <div id="footer"></div>
  </div>
<script src='js/accordian.js'></script>

</body>
