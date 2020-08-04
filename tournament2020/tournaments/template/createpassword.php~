<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="css/accordian.css">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<title>Password Creator</title>

</head>
<body>
  <div style="max-width: 1024px;margin:0 auto;">
<!--    <script>
    $(function(){
      $("#header").load("header.html");
    });
    </script>
     <div id="header"></div>--><br>
  <section style="padding: 5px 5px 5px 15px;">

  <h2>Password Creator:</h2>
</section><br><section>
<div class="text-body" style="font-size: 20px;">
<?php

// configuration
$url = '';
//$file = 'tournaments.txt';

// check if form has been submitted
if (isset($_POST['usr']))
{
$myfile = fopen($_POST['usr'], "w");
$txt = md5($_POST['pas']);
   fwrite($myfile, $txt);
   $txt = "\n";
fwrite($myfile, $txt);
   $txt = $_POST['role'];
fwrite($myfile, $txt);
fclose($myfile);
    header(sprintf('Location: %s', $url));
    printf('<a href="%s">Add new user</a>.', htmlspecialchars($url));
printf('<br><a href="url.html#%s">View Tournament Dashboard</a>.', htmlspecialchars($_GET['data']));
exit();
}

// read the textfile

$text = file_get_contents($file);


?>
<p style="font-size: 150%;">

<!-- HTML form --><b>User Setup:
<br>
Tournament Director:</b> Create a user for the Tournament Director. This user will be able to access the Tourament Scorer designed for your tournament and the Setup page.<br>
<b>Head Referee:</b> Create a user for the Head Referee. This user will be able to access the only the Tournament Scorer and the Score Editor page.<br>
<b>Referee:</b> Create one user for all Referees. The referees will only be able to access only the Tournament Scorer page.<br>
<form action="" method="post">
Email:<input type="username" rows="20" cols="50" id="usr" name="usr" value="">
Password:<input type="password" rows="20" cols="50" id="pas" name="pas" value="">
<br>
Role:<select id="role" name="role">
  <option>Tournament Director</option>
  <option>Head Referee</option>
  <option>Referee</option>
<!--  <option>Head Judge</option>
  <option>Core Values Judge</option>
  <option>Project Judge</option>
  <option>Robot Design Judge</option>-->
  </select>
<br>
<input type="submit" />
<input type="reset" />
<br>


</p>

</form>
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