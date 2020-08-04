<div class="topbar" id="myTopbar" style="width:100%; height:35px; background-color:#0A122A; top:0;align-items: center;">
<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
// if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
//   if (!isset($_SESSION["admin"])) {
//     header("location: login.php");
//     exit;
//   }
// }
?>
  <i style="color:white; position: relative; margin:auto;padding: 10px;top:8px;">Tournament <?php echo htmlspecialchars($_SESSION["tournament"]. " "); ?></i>
  <script>

    document.getElementById('lang').value = language

    	q = window.location.search
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
    function changelang(val) {
	if (window.location.search == "") {
	    window.location.search = "?lang="+val
	} else {
	    window.location.search = window.location.search.split("&lang=")[0]+"&lang="+val+"&"+window.location.search.split(language+"&")[1]
	}
    }
      </script>
      
  <div style="text-align:right; color:white; position: relative; margin:auto;padding-right: 3px;top:-10px;"> Logged in as: 
  <?php 
  
  echo htmlspecialchars($_SESSION["username"]. " ");  echo htmlspecialchars("".$_SESSION["Jusername"]); 
  
 if (!isset($_SESSION["username"]) && !isset($_SESSION["Jusername"])) {
	if (strpos(getcwd(), 'participants') !== false) {
		echo "<a style='color:white' href='/login.php'>Login</a>";
	} else if (strpos(getcwd(), 'judges') !== false) {
		echo "<a style='color:white' href='/login.php'>Login</a>";
	} else {
		echo "<a  style='color:white' href='/login.php'>Login</a>";
	}
 } else {
	echo '; <a style="color:white" href="/logout.php"> Logout </a>';
 }
 
 ?>
   

	</div>

</div>