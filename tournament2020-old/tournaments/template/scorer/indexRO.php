<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament ){
    header("location: ../login.php");
    exit;
}
if (!($_SESSION["role"] == "Tournament Director" || $_SESSION["role"] == "Referee" || $_SESSION["role"] == $_GET["team"])) {
  header("location: ../");
  exit;
}
?>


<?php
if (isset($_POST['teamNo']))
{
  // echo $_POST['teamNo'] . "<br>";
  // echo $_POST['roundNo'] . "<br>";
  // echo $_POST['store'] . "<br>";

  
}
?>

<script>
function tournamentload() {
    round = getParameterByName('round');
      team = getParameterByName('team');
      tourn = getParameterByName('tourn');
      filename = team +'-'+round+'.txt'
     loadsave(textFileToArray("../teams/" +team+ "/robotScores/" +round+ ".txt")[0].split(';')[1])

}
</script>

<!DOCTYPE html>
<html>

<head>

    <title>FLL RePLAY Scorer</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="color-scheme" content="light dark" />

    <script src="assets/js/jquery-1.11.3.min.js"></script>


    <script>
        $(document).bind('mobileinit', function() {
            $.mobile.changePage.defaults.changeHash = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
        });

        language = "en"
    </script>
    <script src="assets/js/highcharts.js"></script>
    <script src="assets/js/exporting.js"></script>
    <script src="assets/js/scorer.js"></script>
    <script src="assets/js/timers.js"></script>
    <script src="assets/js/saver.js"></script>
    <script src="assets/js/html.js"></script>
    <script src="assets/js/jquery.mobile-1.4.5.min.js"></script>

    <script type="text/javascript" src="assets/js/jqm-spinbox.min.js"></script>
    <link rel="manifest" href="assets/scorer.webmanifest">

    <link rel="stylesheet" href="assets/css/jquery.mobile-1.4.5.min.css">
    <!--    <link rel="stylesheet" href="assets/css/tournament.css"> -->
    <link rel="stylesheet" href="assets/css/jquery.mobile.icons.min.css" />
    <link rel="stylesheet" href="assets/css/scorer.min.css" />

    <div id="mobileCSS"></div>
    <script>
        window.mobileAndTabletCheck = function() {
            let check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        function detectMob() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];

            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }
        function detectIOS() {
            var standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );

            if( ios ) {
                if ( !standalone && safari ) {
                    return false
                } else if ( standalone && !safari ) {
                    return true
                } else if ( !standalone && !safari ) {
                    return true
                };
            } else {
                return false
            };
        }
//document.write(navigator.userAgent)
        if (mobileAndTabletCheck()) {
            document.getElementById("mobileCSS").innerHTML = "<style>.no-mobile { display: none;}</style>"
        } else {
            document.getElementById("mobileCSS").innerHTML = "<style>.no-mobile { display: inline;}</style>"
        }
        // alert(detectMob())
    </script>
    <style>
        .only-mobile {
            display: none;
        }
        
        .highcharts-button {
            display: none;
        }
        
        .only-print,
        .only-print * {
            display: none !important;
        }
        
        @media print {
            .no-print,
            .no-print * {
                display: none !important;
            }
            .only-print,
            .only-print * {
                display: block !important;
            }
            body {
                width: 800px;
                height: 100%;
            }
        }
        
        @page {
            size: A4 portrait;
            margin: 0.5cm;
        }
        
        a:link img {
            opacity: 1.0;
            filter: alpha(opacity=100);
            /* For IE8 and earlier */
            filter: alpha(opacity=60);
            /* For IE8 and earlier */
            transition: opacity .5s ease-in-out;
            -moz-transition: opacity .5s ease-in-out;
            -webkit-transition: opacity .5s ease-in-out;
        }
        
        a:hover img {
            opacity: 0.6;
            filter: alpha(opacity=60);
            /* For IE8 and earlier */
            transition: opacity .5s ease-in-out;
            -moz-transition: opacity .5s ease-in-out;
            -webkit-transition: opacity .5s ease-in-out;
        }
        
        table tr td {
            padding-left: 0px;
            padding-right: 0px;
            border-collapse: collapse;
        }
        
        #missionlist {
            width: auto;
            -webkit-column-width: 325px;
            -moz-column-width: 325px;
            column-width: 325px;
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 0;
            -moz-column-gap: 0;
            column-gap: 0;
        }
        
        .missionFmt {
            padding-right: 3;
            padding-left: 0;
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
        }
        
        * {
            text-shadow: none;
        }
    </style>
    <script src="assets/languages.js"></script>

    <script src="assets/js/language-detector.js">
    </script>


    <link rel="manifest" href="manifest.webmanifest">
    <meta name="theme-color" content="#1976d2">
</head>



<body id="wholeBody" onload="initpage()">

    <!-- start drawplan-->



    <!--end drawplan-->


    <!-- <img src="assets/images/ajax-loader.gif" id="loadingGif" style="background-color:white; width:50px; height: auto;position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;"> -->
    <div class="loader" id="loadingGif" style="position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;"></div>
    <style>
        .loader {
            border: 16px solid #f3f3f3;
            /* Light grey */
            border-top: 16px solid #3498db;
            /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
        }
        
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>

    <div id="contentload" style="display: none;">
        <!--display:none;-->
        <br><br><br>
        <table style="width:98%; text-align:center; margin-left:auto; margin-right:auto;border:none!important;">
            <tr>
                <td style="width:25%; text-align:left">
                    <script>
                        var page = '';
                        //              var page = window.location.href.split("?")[0].split("#")[0] + '?lang=';
                        var i;
                        for (i = 0; i < langs.length; i++) {
                            window[langs[i].split(':')[0].split('-')[0]] = page + langs[i].split(':')[0];
                        }
                        var i;
                        if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) { // DCR is buggy in MSIE, use classic switcher
                            var i;
                            for (i = 0; i < langs.length; i++) {
                                document.write('\
                                <a class="no-print no-mobile" data-ajax="false" href="?lang='+ window[langs[i].split(":")[0].split("-")[0]] +'" onclick="createCookie(\''+langs[i].split(":")[0]+'\');window.location.href="'+window[langs[i].split(":")[0].split("-")[0]]+'";setTimeout(function(){location.reload(true);},100)" style=" text-decoration: none">\
                                <img src="assets/images/icons/countries/small/'+langs[i].split(":")[1]+'.png" alt="'+langs[i].split(":")[2]+'" title="'+langs[i].split(":")[2]+'" width="26" height="26" border="0">\
                                </a>\
                                ')
                            }
                        } else {
                            for (i = 0; i < langs.length; i++) {
                                document.write('\
                                    <a class="no-print " data-ajax="false" href="" onclick="createCookie(\'' + langs[i].split(":")[0] + '\');language=\'' + window[langs[i].split(":")[0].split("-")[0]] + '\';switchLanguage();" style=" text-decoration: none">\
                                    <img src="assets/images/icons/countries/small/' + langs[i].split(":")[1] + '.png" alt="' + langs[i].split(":")[2] + '" title="' + langs[i].split(":")[2] + '" width="26" height="26" border="0">\
                                    </a>\
                                ')
                        }
                    }
                    </script>

                </td>

                <script>
                    function getParameterByName(name, url) {
                        if (!url) url = window.location.href;
                        name = name.replace(/[\[\]]/g, "\\$&");
                        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                            results = regex.exec(url);
                        if (!results) return null;
                        if (!results[2]) return '';
                        return decodeURIComponent(results[2].replace(/\+/g, " "));
                    }

                    if (getParameterByName('team') != null) {
                    document.write('<b style="font-size: 150%;">Team No. '+getParameterByName('team'))
                    document.write('<br>Round No. '+getParameterByName('round')+'</b>')
                    //document.write('<br>Tournament ID#: '+getParameterByName('tourn'))
                    }
                    </script>


                <td style="width:50%; font-size:24px; text-align:center">
                    <b id="title">FLL RePlay Scorer</b>
                </td>
                <td style="width:25%; font-size:12px; text-align:right">
                    <img alt="FLL..." style="border:1px solid #021a40;" src="assets/images/FLL.png" height="57"> <img alt="INTO ORBIT..." style="border:1px solid #021a40;" src="assets/images/replay.jpg" height="57"> <img alt="FLL Tutorials" style="border:1px solid #021a40;"
                        src="assets/images/flltutorials.png" width="139"><img class="only-mobile" alt="FLL Tutorials" style="border:1px solid #021a40;" src="assets/images/flltutorials.png" width="139">
                </td>
            </tr>
        </table>



        <!-- <div role="main" class="ui-content" style="padding-right:0; padding-left:0"> -->
        <div data-role="tabs">

            <div id="tabs-1">

                <form id="missions">
                    <div id="missionlist">

                    </div>

                    <script>
                        languageInit()
                    </script>
                    <script src="assets/missions.js"></script>
                </form>



                <div class="only-print" style="width:100%; background-color:#8aac4a; color: white; text-align: center;">
                    <i id="pointsTxt2">Points</i><i> </i><i id="allpoints2"> 0</i>
                </div>

                <div class="no-print" data-hide-during-focus="" data-tap-toggle="false" data-role="footer" style=" font-size: 120%; background-color:#8aac4a; color: white;" data-theme="a" data-position="fixed">
                    <h1 style="padding-top:0; padding-bottom:0"><i id="pointsTxt">Points</i><i>: </i><i id="allpoints">
                            0</i> &emsp; &emsp; <input id="resetTxt" type="button" value="Reset" class="ui-mini no-print" onclick="document.getElementById('missions').reset();loadsave(blanksave);check_missions();">

                      

                    </h1>
                    <script>if (detectIOS()){document.write("<br>")}</script>



                </div>
                

    


    </div>

    <noscript>Please enable JavaScript to continue using this application.</noscript>
    <div style="padding-left: 10px; " class="no-print">

        <!--  <text id="tournamentText">Tournament</text><br><br>-->

        <text id="revisionText">Scorer </text> <text id="versionText">v3.6.0</text>
        <!-- Scorer v3.5.0 -->
        <br>
        <br><text id="copyrightText">Copyright</text><br>
        <br>
        <text id="translatorCredit">Translated</text>
    </div>
    <br>
    <br>
    <br>
    </div>

</body>



<form action="" id="serverForm" method="post">
  <input type="hidden" id="roundNo" name="roundNo">
  <input type="hidden" id="teamNo" name="teamNo">
  <input type="hidden" id="store" name="store">

</form>
<script>
    round = getParameterByName('round');
      team = getParameterByName('team');
      tourn = getParameterByName('tourn');

  function savetoserver() {
    points = parseInt(document.getElementById('allpoints').innerHTML)
    getvar() //var store
    round = getParameterByName('round');
      team = getParameterByName('team');
      tourn = getParameterByName('tourn');

      document.getElementById("roundNo").value = round
      document.getElementById("teamNo").value = team

      // filename = team +'-'+round+'.txt'
      savedata = points+';'+store

      document.getElementById("store").value = savedata

      // document.getElementById('saveframe').src = encodeURI('/'+tourn+'/save.php?fname=' + filename+'&data='+savedata);
    // alert('Saved Score '+points+' points')
    document.getElementById("serverForm").submit()
  }
function textFileToArray(filename)
{
    var reader = (window.XMLHttpRequest != null )
               ? new XMLHttpRequest()
               : new ActiveXObject("Microsoft.XMLHTTP");
    reader.open("GET", filename, false );
    reader.send();
    return reader.responseText.split('\n'); //.split(/(\r\n|\n)/g);
}


</script>


<script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-65893558-1', 'auto');
    ga('send', 'pageview');
</script>

<div style="display:none" class="no-mobile">

    <a target="_blank" class="no-print" href="https://play.google.com/store/apps/details?id=com.ev3lessons.fllcityshaperscorer">
        <img id="googleplay" height="100" src="assets/google-play/en_get.svg"></a><br>

    <a target="_blank" class="no-print" href="https://apps.apple.com/app/fll-city-shaper-scorer/id1473760751?ls=1">
        <img id="appstore" height="68" style="padding: 15px" src="assets/app-store/en.svg"></a>


</div>

<style>
    @media (prefers-color-scheme: dark) {
        .timer {
            border: 10px solid #121212;
            border-collapse: collapse;
        }
        .ui-radio-off {
            background-color: #121212 !important;
            color: white !important;
            text-shadow: none !important;
        }
        .ui-btn {
            background-color: #121212 !important;
            color: white !important;
            text-shadow: none !important;
        }
        .ui-btn-active {
            background-color: #8aac4a !important;
            color: white !important;
            text-shadow: none !important;
        }
        .ui-radio-on {
            background-color: #8aac4a !important;
            color: white !important;
            text-shadow: none !important;
        }
        #timerChild {
            border: 10px solid white !important;
        }
        #stopwatchChild {
            border: 10px solid white !important;
        }
        #contentload {
            background-color: #121212 !important;
            color: white;
            text-shadow: none;
        }
        #wholeBody {
            background-color: #121212 !important;
        }
        .ui-popup {
            background-color: #121212 !important;
        }
        Table {
            border: 1px solid white !important;
        }
        Text {
            color: white !important;
            fill: white !important;
            text-shadow: none;
        }
        .timer {
            border: 10px solid white !important;
        }
        .ui-page {
            background-color: #121212 !important;
        }
        #loadingGif {
            background-color: #121212 !important;
        }
        #savesTitle {
            background-color: #121212 !important;
            color: white !important;
            text-shadow: none !important;
        }
        #saves {
            background-color: #121212 !important;
            color: white !important;
            text-shadow: none !important;
        }
    }
    
    .timer {
        border: 10px solid black;
    }
    
    .ui-mobile .ui-page-active {
        display: block;
        overflow: visible;
        overflow-x: visible !important;
    }
    /* .ui-shadow-inset {
    display: none !important;
  } */
    
    #tabs-3-popup {
        width: 90% !important;
        /*  left: 5% !important; */
        max-width: 90% !important;
        /*   top: 35.5px !important;*/
        margin: 10px !important;
    }
    
    #popupMap {
        margin: 0px !important;
        height: 100% !important;
        width: 600px !important;
    }
    
    .ui-icon-delete {
        padding: 5px !important;
        width: 1.75em;
        height: 1.75em;
        text-indent: -9999px;
        white-space: nowrap !important;
    }
    
    @media only screen and (max-width: 600px) {
        #tabs-3-popup {
            width: 100% !important;
            left: 0px !important;
            max-width: 100% !important;
            /*   top: 35.5px !important;*/
            margin: 0px !important;
        }
        #popupMap-popup {
            width: 100% !important;
            left: 0px !important;
            max-width: 100% !important;
            /*   top: 35.5px !important;*/
            margin: 0px !important;
        }
        #popupMap {
            margin: 0px !important;
            width: 100% !important;
        }
        .ui-popup {
            /* height: 100% !important; */
        }
        .ui-popup-container {
            /* height: 100% !important; */
        }
        #saveContent {
            margin-right: 10px !important;
        }
        .ui-icon-delete {
            padding: 10px !important;
            width: 1.75em;
            height: 1.75em;
            text-indent: -9999px;
            white-space: nowrap !important;
        }
    }
</style>
<div id="styleBlank"></div>
<script>
    function checkDarkTheme() {
        var ua = window.navigator.userAgent;
        var isIE = /MSIE|Trident/.test(ua);

        if (!isIE) {
            // Android fix for enabling dark mode, see native implementation in MainActivity.java
            if (window.navigator.userAgent.includes('AndroidDarkMode')) {
                document.getElementById("styleBlank").innerHTML = " <style>\
       .timer {\
            border: 10px solid #121212;\
            border-collapse: collapse;\
        }\
        .ui-radio-off {\
            background-color: #121212 !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
        .ui-btn {\
            background-color: #121212 !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
        .ui-btn-active {\
            background-color: #8aac4a !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
        .ui-radio-on {\
            background-color: #8aac4a !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
        #timerChild {\
            border: 10px solid white !important;\
        }\
        #stopwatchChild {\
            border: 10px solid white !important;\
        }\
        #contentload {\
            background-color: #121212 !important;\
            color: white;\
            text-shadow: none;\
        }\
        #wholeBody {\
            background-color: #121212 !important;\
        }\
        .ui-popup {\
            background-color: #121212 !important;\
        }\
        Table {\
            border: 1px solid white !important;\
        }\
        Text {\
            color: white !important;\
            fill: white !important;\
            text-shadow: none;\
        }\
        .timer {\
            border: 10px solid white !important;\
        }\
        .ui-page {\
            background-color: #121212 !important;\
        }\
        #loadingGif {\
            background-color: #121212 !important;\
        }\
        #savesTitle {\
            background-color: #121212 !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
        #saves {\
            background-color: #121212 !important;\
            color: white !important;\
            text-shadow: none !important;\
        }\
</style>"
                    // Apply dark theme or set theme css variables to dark
                    /*	  i = 0
                          while (i<document.getElementsByClassName("timer").length) {
                              document.getElementsByClassName("timer")[i].style.border = "10px solid #121212"
                              i=i+1
                          }
                          i = 0
                          while (i<document.getElementsByClassName("ui-radio-off").length) {
                              document.getElementsByClassName("ui-radio-off")[i].style.backgroundColor = "#121212"
                              document.getElementsByClassName("ui-radio-off")[i].style.color = "white"
                              document.getElementsByClassName("ui-radio-off")[i].style.textShadow = "none"
                              i=i+1
                          }
                          i = 0
                          while (i<document.getElementsByClassName("ui-btn").length) {
                              document.getElementsByClassName("ui-btn")[i].style.backgroundColor = "#121212"
                              document.getElementsByClassName("ui-btn")[i].style.color = "white"
                              document.getElementsByClassName("ui-btn")[i].style.textShadow = "none"
                              i=i+1
                          }
                          i = 0
                          while (i<document.getElementsByClassName("ui-btn-active").length) {
                              document.getElementsByClassName("ui-btn-active")[i].style.backgroundColor = "#8aac4a"
                              document.getElementsByClassName("ui-btn-active")[i].style.color = "white"
                              document.getElementsByClassName("ui-btn-active")[i].style.textShadow = "none"
                              i=i+1
                          }
                          i = 0
                          while (i<document.getElementsByClassName("ui-radio-on").length) {
                              document.getElementsByClassName("ui-radio-on")[i].style.backgroundColor = "#8aac4a"
                              document.getElementsByClassName("ui-radio-on")[i].style.color = "white"
                              document.getElementsByClassName("ui-radio-on")[i].style.textShadow = "none"
                              i=i+1
                          }  

                          document.getElementById("timerChild").style.border = "10px solid white !important"
                          document.getElementById("stopwatchChild").style.border = "10px solid white !important"
                          document.getElementById("contentload").style.backgroundColor = "#121212"
                          document.getElementById("contentload").style.color = "white"
                          document.getElementById("contentload").style.textShadow = "none"
                          document.getElementById("wholeBody").style.backgroundColor = "#121212"
                          i = 0
                          while (i<document.getElementsByClassName("ui-popup").length) {
                              document.getElementsByClassName("ui-popup")[i].style.backgroundColor = "#8aac4a"
                              i=i+1
                          }
                          */
                return true;
            } else {
                document.getElementById("styleBlank").innerHTML = ""
                return false
            }
        }
    }
</script>
<script>
    loaded = 0
    function initpage() {

        // if (window.localStorage.DRRPGoogleSheet != undefined) {
        //     document.getElementById('sheetId').value = window.localStorage.DRRPGoogleSheet;
        //     } else {
        // 	document.getElementById('sheetId').value = undefinedText;
        //     }


        if (language == 'he' || language == 'ar') {
            document.getElementById("wholeBody").style.textAlign = "right"
        } else {
            document.getElementById("wholeBody").style.textAlign = "left"

        }

        countrycode = language.split('-')[0]
        if (language == 'he') {
            countrycode = "iw"
        }

        // document.getElementById("appstore").src = "assets/app-store/" + language + ".svg"
        // document.getElementById("googleplay").src = "assets/google-play/" + countrycode + "_get.svg"

        document.getElementById('title').innerHTML = title
        document.getElementById('resetTxt').value = resetText
        $('#resetTxt').button('refresh');

        document.getElementById('pointsTxt').innerHTML = pointsText
        document.getElementById('pointsTxt2').innerHTML = pointsText + ": "


 
        // document.getElementById('saveGoogleBtn').innerHTML = savescoreText
        // document.getElementById('loadTextGoogle').innerHTML = loadsaveText


 

        // document.getElementById('signin-Google').innerHTML = signin
        // document.getElementById('signout-Google').innerHTML = signout
        // document.getElementById('GoogleCreate').innerHTML = GoogleCreate
        // document.getElementById('GoogleOpen').innerHTML = GoogleOpen
        // document.getElementById('googleText').innerHTML = googleSaveText
        // document.getElementById('localText').innerHTML = localSaveText

        // document.getElementById('isIE').innerHTML = isIE
        // document.getElementById('googleIntro').innerHTML = googleIntro
        // document.getElementById('pastSaves').innerHTML = pastSaves
        // document.getElementById('instructions').innerHTML = instructions
        // document.getElementById('instructionsA').innerHTML = instructionsA
        // document.getElementById('instructionsB').innerHTML = instructionsB
        // document.getElementById('instructionsC').innerHTML = instructionsC
        // document.getElementById('instructionsD').innerHTML = instructionsD
        // document.getElementById('instructionsE').innerHTML = instructionsE
        // document.getElementById('instructionsF').innerHTML = instructionsF
        // document.getElementById('instructionsG').innerHTML = instructionsG

        // document.getElementById('teamText').innerHTML = teamText
        // document.getElementById('roundText').innerHTML = roundText

    

        document.getElementById('revisionText').innerHTML = revisionText
        document.getElementById('copyrightText').innerHTML = copyrightText

        // document.getElementById('systemText').innerHTML = systemText

        // document.getElementById('idText').innerHTML = idText

        document.getElementById('versionText').innerHTML = versionText

        //	document.getElementById('tournamentText').innerHTML = tournamentText

        if (translatorCredit != "") {
            document.getElementById('translatorCredit').innerHTML = translatorCredit
        } else {
            document.getElementById('translatorCredit').className = "no-mobile"
            document.getElementById('translatorCredit').innerHTML = ""
        }

        //   if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        // document.getElementById('notIE').style.display = 'none'
        //   } else {
        // document.getElementById('isIE').style.display = 'none'
        //   }





        // blanksave = getvar()
        checkDarkTheme()
        if (loaded == 0) {
            loadsave(blanksave)
            loaded = 1
        }
        try {
            tournamentload()
        } catch {}

        document.getElementById('contentload').style.display = 'block'
        document.getElementById('loadingGif').style.display = 'none'




    }

    function switchLanguage() {
        document.getElementById('contentload').style.display = 'none'
        document.getElementById('loadingGif').style.display = 'inline'
        languageInit()
        initpage()
        showPastDraws()

        var variables = ""
        for (var name in this) {
            if (name[0] == "M" && name != "API_KEY") {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = window[name]
            }

            if (name.indexOf("yesText") != -1) {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = yes
            }

            if (name.indexOf("noText") != -1) {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = no
            }

            if (name.indexOf("partlyText") != -1) {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = partly
            }

            if (name.indexOf("completelyText") != -1) {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = completely
            }

            if (name.indexOf("mNum") != -1) {
                variables += name + "\n";
                console.log(name)
                document.getElementById(name).innerHTML = missionNumbering
            }

        }

        i = 0
        while (i < document.getElementsByTagName("select").length) {
            var myselect = $("select#" + document.getElementsByTagName("select")[i].id);
            myselect[0].selectedIndex = myselect[0].selectedIndex;
            myselect.selectmenu("refresh");
            i = i + 1
        }

    }

    initpage();



    // Query for the toggle that is used to change between themes

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>

    // Listen for changes to the prefers-color-scheme media query



    // Called by the media query to check/uncheck the toggle
</script>

</html>