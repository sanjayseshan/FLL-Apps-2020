// This is where all the translations go for every language
// Language switcher v2.0 Dynamic Content Replacer

// For forwards compatibility with older versions of the scorer, just add "languageInit();version=versionText" at the end of this file.
// Note that the line "langs=[XXX]" has no effect in old versions of the scorer and will just be ignored. To update the language list in old versions, copy that line to the equivalent place in index.html

// Universal

versionNum = "1.6"
versionDay = 6
versionMonth = 8
versionYear = 2020
versionText = ""

//langs=['en:United States:English','pt:Brazil:Portugues','de:Germany:Deutsche','es:Spain:Español','sk:Slovakia:Slovenský','nl:Netherlands:Nederlands','el:Greece:ελληνικά','hu:Hungary:Magyar','he:Israel:עִבְרִית‎','fr:France:français']
langs = ['en:United States:English','es:Spain:Español','el:Greece:Ελληνικά','pt:Brazil:Portugues','nl:Netherlands:Nederlands']
//  langs=['en:United States:English','es:Spain:Español','pt:Brazil:Portugues','de:Germany:Deutsche','el:Greece:ελληνικά','tr:Turkey:Türk','ro:Romania:Română','nl:Netherlands:Nederlands','hu:Hungary:Magyar','it:Italy:Italiano']

monthNames = []

// Default Language (English/en)

function languageInit() {
	translatorCredit = ""

	yes = "Yes"
	no = "No"
	partly = "Partly"
	completely = "Completely"
	resetText = "Reset"
	saveText = "Save" // As verb
	saveNText = "Save" // As noun
	savescoreText = "Save Score"
	loadsaveText = "Load Score No."
	deletesaveText = "Delete All Saved Scores"
	importsaveText = "Import Shared Scores"
	exportsaveText = "Share Scores"
	signin = "Sign in with"
	signout = "Sign out of"
	GoogleCreate = "Create New Spreadsheet"
	GoogleOpen = "Open Google Spreadsheet"
	created = "Created"
	savedto = "Saved to"
	dateText = "Date/Time"
	totalText = "Total Points"
	savedText = "Saved"
	loadedText = "Loaded"

	monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	improvementText = "Score History"
	scorerText = "Scorer"
	timersText = "Timers"
	savesText = "Saves"
	startText = "Start"
	stopText = "Stop"
	pointsText = "Points"

	sketchTitle = "Strategy Planner"
	drawingsText = "Saved Drawings"
	saveDrawingText = "Save Drawing"
	deleteSavedDrawingsText = "Delete All Saved Drawings"
	loadSavedDrawingText = "Load Saved Drawing"
	exportSavedDrawingsText = "Share Drawings"
	importSavedDrawingsText = "Import Shared Drawings"
	exportPNGText = "Export Drawing as PNG"

	doneText = "Completed"

	timerText = "Timer:"
	stopwatchText = "Stopwatch:"

	undefinedText = "undefined"

	revisionText = "RePLAY Scorer Version "
	copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
	tournamentText = "A version of this scorer with added features needed for a tournament can be found <a href='http://tournament.flltutorials.com/'>here</a>."

	title = "FLL RePLAY Scorer"

	missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

	M00 = "Advantage"
	M00a = "Does the team's Equipment fit in the Small Inspection Area?"

	M01 = "Innovation Project"
	M01a = "Is any part of the model touching either the RePLAY logo or the gray area around the bench?"
	M01b = "The model must be made of at least two white LEGO pieces and measures at least as long as four LEGO studs in at least one direction."

	M02 = "Step Counter"
	M02a = "The bottom of the pointer is on"
	M02b = "None"
	M02c = "Magenta"
	M02d = "Yellow"
	M02e = "Blue"

	M03 = "Slide"
	M03a = "Is the first slide figure off the slide?"
	M03b = "Is the second slide figure off the slide?"
	M03c = "Is a slide figure completely in home?"
	M03d = "Is a slide figure held completely off the mat by the heavy tire and is touching nothing else?"

	M04 = "Bench"
	M04a = "Is the bench down flat?"
	M04b = "How many cubes are touching the mat in hopscotch spaces?"
	M04c = "Is the backrest completely out of both of its holes?"

	M05 = "Basketball"
	M05a = "Is there is a cube in the crate?"
	M05b = "Does the crate rest on the middle height’s white stopper?"
	M05c = "Does the crate rest on the top height’s white stopper?"

	M06 = "Pull-Up Bar"
	M06a = "Has the robot passed completely through the pull-up bar’s upright frame at any time?"
	M06b = "Does the pull-up bar hold 100% of the robot up off the mat at the end of the match?"

	M07 = "Robot Dance"
	M07a = "Is the robot’s controller at least partly over the dance floor in a “dancing” motion at the end of the match?"
	M07b = "Any silly or skilled repetitive action counts as dancing – do something fun! For M07, you cannot score this plus the “held up” score from M06 in the same match."

	M08 = "Boccia"
	M08a = "Have both share models sent only one cube anywhere onto the opposing field and those cubes color-match each other?"
	M08b = "How many cubes are completely in your frame or target?"
	M08c = "Is there at least one yellow cube completely in your target?"

	M09 = "Tire Flip"
	M09a = "Is the light (blue tread) tire white center up?"
	M09b = "Is the heavy (black tread) tire white center up?"
	M09c = "How many white-center-up tires are completely in the large target circle?"
	M09d = "If the heavy tire crosses the red flip line at any time, even partly, it scores zero."

	M10 = "Cell Phone"
	M10a = "Is the cell phone white side up and resting on only the mat?"

	M11 = "Treadmill"
	M11a = "The robot has spinned the rollers so the pointer points to"
	M11b = "None"
	M11c = "Grey"
	M11d = "Red"
	M11e = "Orange"
	M11f = "Yellow"
	M11g = "Light Green"
	M11h = "Dark Green"

	M12 = "Row Machine"
	M12a = "Is the free wheel completely outside the large circle?"
	M12b = "Is the free wheel completely in the small circle"

	M13 = "Weight Machine"
	M13a = "The stopper is under the lever and lever setting is on"
	M13b = "None"
	M13c = "Blue"
	M13d = "Magenta"
	M13e = "Yellow"

	M14 = "Health Units"
	M14a = "How many health units are touching either the RePLAY logo or the gray area around the bench?"
	M14b = "How many health units are looped over a pull-up bar post as shown – maximum of four – and touching no equipment?"

	M15 = "Precision"
	M15a = "How many Precision Tokens are left on the field?"


	if (language == "es") {
		translatorCredit = "Traducido a Español por Sanjay Seshan"

		yes = "Sí"
		no = "No"
		partly = "Parcialmente"
		completely = "Completamente"
		resetText = "Reiniciar"
		saveText = "Guardar"
		savescoreText = "Guardar Puntación"
		loadsaveText = "Cargar Puntación No."
		deletesaveText = "Eliminar Todos los Guardados"
		importsaveText = "Importar Puntaciones Compartidos"
		exportsaveText = "Compartir Puntaciones"
		created = "Hecho"
		savedto = "Guardado a"
		dateText = "Fecha/Tiempo"
		totalText = "Total Puntos"
		savedText = "Guardado"
		loadedText = "Cargado"

		monthNames = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Augusto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		improvementText = "Historia de Guardados"
		scorerText = "Marcador"
		timersText = "Temporizadoes"
		savesText = "Guardados"
		startText = "Empezar"
		stopText = "Parar"
		pointsText = "Puntos"

		sketchTitle = "Planificador de estrategia"
		drawingsText = "Dibujos guardados"
		saveDrawingText = "Guardar dibujo"
		deleteSavedDrawingsText = "Eliminar todos los dibujos"
		loadSavedDrawingText = "Cargar dibujo guardado"
		exportSavedDrawingsText = "Compartir dibujos guardados"
		importSavedDrawingsText = "Importar dibujos compartidos"
		exportPNGText = "Exportar dibujo como PNG"

		doneText = "Completado"

		timerText = "Temporizador:"
		stopwatchText = "Parar Reloj:"

		undefinedText = "Sin definido"

		revisionText = "Marcador RePLAY versión "
		copyrightText = "Los derechos de autor (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Un versión de este marcador con más carictaristicas para un torneo puede se encontrado a <a href='http://tournament.flltutorials.com/'>here</a>."

		title = "Marcador de FLL RePLAY"

		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

		M00 = "Bonificación por Inspección del Equipamiento"
		M00a = "¿Cabe todo vuestro equipamiento en la zona de inspección menor?"

		M01 = "Proyecto de Innovación"
		M01a = "¿Hay alguna parte del modelo que toca el logo RePLAY o el área gris alrededor del banco?"
		M01b = "El modelo es construido con, al menos, dos piezas LEGO y mide, como mínimo, cuatro espigas LEGO de largo en, al menos, una dirección."

		M02 = "Contador de Pasos"
		M02a = "La parte baja del puntero está sobre el color "
		M02b = "Nada"
		M02c = "Magenta"
		M02d = "Amarillo"
		M02e = "Azul"

		M03 = "Tobogán"
		M03a = "¿Está la primera figura fuera del tobogán?"
		M03b = "¿Está la segunda figura fuera del tobogán?"
		M03c = "¿Está una figura del tobogán completamente en casa?"
		M03d = "¿Está una figura del tobogán aguantada completamente por la rueda pesada sin tocar el tapete y no está tocando nada más?"

		M04 = "Banco"
		M04a = "¿Está el banco bajado?"
		M04b = "¿Cuántas cubos están en los espacios de la rayuela?" 
		M04c = "¿Está el respaldo del banco compleatamente fuera de ambos orificios?"

		M05 = "Baloncesto"
		M05a = "¿Hay un cubo dentro del cajón?"
		M05b = "¿Reposa el cajón sobre el tope blanco a media altura del poste?"
		M05c = "¿Reposa el cajón reposa sobre el tope blanco a máxima altura del poste?"

		M06 = "Larguero"
		M06a = "¿Pasa el robot completamente a través del larguero en cualquier momento?"
		M06b = "¿Aguanta el larguero el 100% del robot alzado sin tocar el tapete al final de la partida?"

		M07 = "Danza del Robot"
		M07a = "¿Está al menos parte del controlador del robot sobre la pista de baile en un movimiento de “danza” al final de la partida?"
		M07b = "¡Cualquier acción repetitiva, graciosa o ridícula, cuenta como danza - haced algo divertido! No podéis conseguir esta puntuación de ‘danzando’ (M07) y la de “colgado” (M06) en la misma partida."

		M08 = "Boccia"
		M08a = "¿Han ambos compartidores de bochas enviado solo un cubo a cualquier parte del terreno opuesto y ambos cubos son del mismo color?"
		M08b = "¿Cuántas cubos están completamente en vuestro campo o diana?" 
		M08c = "¿Hay por lo menos un cubo armarillo completamente dentro de vuestro diana?"

		M09 = "Voltear Neumáticos"
		M09a = "¿Está el neumático ligero (con banda de rodadura azul) con el centro blanco arriba?"
		M09b = "¿Está el neumático pesado (con banda de rodadura negra) con el centro blanco arriba?"
		M09c = "¿Cuántas neumáticos con el centro blanco arriba completamente dentro del círculo grande?"
		M09d = "Si el neumático pesado cruza la linia roja de voleteando, se marca cero."

		M10 = "Teléfono Móvil"
		M10a = "¿Está el teléfono móvil con vuestro cara blanca boca arriba y descansa solo sobre el tapete?"

		M11 = "Cinta de Correr"
		M11a = "El robot ha girado los rodillos así que el puntero indica"  
		M11b = "Nada"
		M11c = "Gris"
		M11d = "Rojo"
		M11e = "Naranja"
		M11f = "Armarillo"
		M11g = "Verde claro"
		M11h = "Verde oscuro"

		M12 = "Máquina de Remo"
		M12a = "¿Está la rueda libre compleramente fuera del círculo grande?" 
		M12b = "¿Está la rueda libre compleramente fuera del círculo pequeño?"

		M13 = "Máquina de Pesas"
		M13a = "El tope está debajo de la palanca y la posición de la palanca es"
		M13b = "Nada"
		M13c = "Azul"
		M13d = "Magenta"
		M13e = "Amarillo"

		M14 = "Porciones de Salud"
		M14a = "¿Cuántas porciones de salud están tocando el logo RePLAY o el área gris alredador del banco?" 
		M14b = "¿Cuántas porciones de salud están colgadas sobre un poste del larguero - máximo de cuatro - y sin contacto con equipamiento?"

		M15 = "Precisión"
		M15a = "¿Cuántas testigos de precisión quedan en el terreno de juego?"


	
	


	} else if (language == "el") {
		translatorCredit = " Translated into Greek by Michail Marinakis – Mεταφράστηκε στα ελληνικά από τον Μιχάλη Μαρινάκη"

		yes = "Ναι"
		no = "Όχι"
		partly = "Μερικώς"
		completely = "Εντελώς"
		resetText = "Επαναφορά"
		saveText = "Αποθήκευση"
		savescoreText = "Αποθήκευση Βαθμολογίας"
		loadsaveText = "Φόρτωση Αποθηκευμένης Βαθμολογίας:"
		deletesaveText = " Διαγραφή Όλων των Βαθμολογιών "
		importsaveText = "Εισαγωγή Βαθμολογιών"
		exportsaveText = "Εξαγωγή Βαθμολογιών"
		signin = " Σύνδεση με"
		signout = " Έξοδος"
		GoogleCreate = "Δημιουργία Νέου Λογιστικού Φύλλου"
		GoogleOpen = "Άνοιγμα Google Spreadsheet"
		created = "Δημιουργήθηκε"
		savedto = "Αποθηκεύτηκε σε"
		dateText = "Ημερομηνία/Ώρα"
		totalText = "Συνολική Βαθμολογία"
		savedText = "Αποθηκεύτηκε"
		loadedText = "Φορτώθηκε"
		
		monthNames =["Μήνας", "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
		improvementText = "Score History"
		scorerText = "Καταγραφή Βαθμολογίας"
		timersText = "Χρονόμετρα"
		savesText = "Αποθηκεύσεις"
		startText = "Έναρξη"
		stopText = "Παύση"
		pointsText = "Βαθμοί"
		
		sketchTitle = "Σχεδιαστής Στρατηγικής"
		drawingsText = "Αποθηκευμένα Σχέδια"
		saveDrawingText = "Αποθήκευση Σχεδίου"
		deleteSavedDrawingsText = "Διαγραφή ΟΛΩΝ των αποθηκευμένων σχεδίων"
		loadSavedDrawingText = "Εισαγωγή Αποθηκευμένου Σχεδίου"
		exportSavedDrawingsText = "Εξαγωγή Σχεδίου"
		importSavedDrawingsText = "Εισαγωγή Αποθηκευμένου Σχεδίου"
		exportPNGText = "Εξαγωγή Σχεδίου σε μορφή PNG"
		
		doneText = "Ολοκλήρωση"
		
		timerText = " Χρόνος:"
		stopwatchText = " Χρονόμετρο:"
		
		undefinedText = "δεν καθορίζεται"
		
		revisionText = "RePLAY Scorer Έκδοση "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Μία έκδοση με δυνατότητες και λειτουργείες που απαιτούνται σε ένα event μπορείτε να βρείτε εδώ <a href='http://tournament.flltutorials.com/'>here</a>."
		
		title = "FLL RePLAY Βαθμολογία"
		
		missionNumbering = "Α" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bonus Επιθεώρησης Εξοπλισμού"
		M00a = "Όλος σας ο Εξοπλισμός χωράει στην Μικρή Περιοχή Επιθεώρησης"
		
		M01 = "Project Καινοτομίας"
		M01a = " Αγγίζει κάποιο τμήμα του το λογότυπο RePLAY ή τη γκρι περιοχή γύρω από τον πάγκο;"
		M01b = " Είναι κατασκευασμένο από τουλάχιστον δύο λευκά κομμάτια LEGO και μετρά τουλάχιστον όσο τέσσερα σημεία LEGO σε τουλάχιστον μία κατεύθυνση."
		
		M02 = "Μετρητής Βημάτων"
		M02a = " ο κάτω δείκτης είναι:"
		M02b = "σε κανένα χρώμα"
		M02c = "στη ματζέντα"
		M02d = "στο κίτρινο"
		M02e = "στο μπλε"
		
		M03 = "Τσουλήθρα"
		M03a = "Μία φιγούρα είναι εκτός της τσουλήθρας"
		M03b = "Και οι δύο φιγούρες είναι εκτός της τσουλήθρας"
		M03c = "Μία φιγούρα είναι πλήρως στην Βάση"
		M03d = "Μία φιγούρα υποστηρίζεται μόνο από τον μεγάλο τροχό, δεν είναι σε επαφή με το Mat και δεν ακουμπά τίποτα άλλο"
		
		M04 = "Πάγκος"
		M04a = "Ο πάγκος είναι κάτω"
		M04b = "Πόσοι κύβοι υπάρχουν σε χώρους κουτσού και αγγίζουν το Mat;"
		M04c = "Η πλάτη του καθίσματος είναι εντελώς έξω από τις δύο οπές της"
		
		M05 = "Μπάσκετ"
		M05a = "Υπάρχει κύβος στην μπασκέτα"
		M05b = "η μπασκέτα στηρίζεται στην λευκή ασφάλεια του μεσαίου ύψους"
		M05c = "η μπασκέτα στηρίζεται στην λευκή ασφάλεια του μέγιστου ύψους"
		
		M06 = "Μονόζυγο"
		M06a = "Το ρομπότ πέρασε εντελώς μέσα από το όρθιο πλαίσιο του μονόζυγου κάποια στιγμή"
		M06b = "Το μονόζυγο υποστηρίζει και κρατά το 100% του ρομπότ πάνω από το Mat στο τέλος του αγώνα"
		
		M07 = "Χορός Ρομπότ"
		M07a = "Ο ελεγκτής του ρομπότ βρίσκεται τουλάχιστον εν μέρει πάνω από την πίστα χορού σε κίνηση «χορού» στο τέλος του αγώνα"
		M07b = " Κάθε επαναλαμβανόμενη δράση θεωρείται χορός - κάντε κάτι διασκεδαστικό! Για την Α07, δεν μπορείτε να το σκοράρετε συν το σκορ «κρέμασμα» από την Α06 στον ίδιο αγώνα."
		
		M08 = "Boccia"
		M08a = "Και οι δύο εκτοξευτές έχουν στείλει μόνο έναν κύβο οπουδήποτε στο αντίπαλο πεδίο και αυτοί οι κύβοι ταιριάζουν χρωματικά μεταξύ τους"
		M08b = "Πόσοι κύβοι υπάρχουν εντελώς μέσα στο πλαίσιο ή στο στόχο σας"
		M08c = "Υπάρχει τουλάχιστον ένας κίτρινος κύβος εντελώς στον στόχο σας"
		
		M09 = "Αναστροφή Ελαστικών"
		M09a = "Το ελαφρύ (μπλε) ελαστικό είναι με το λευκό κέντρο προς τα πάνω"
		M09b = "Το βαρύ ελαστικό (μαύρο) είναι με το λευκό προς τα πάνω"
		M09c = "Πόσα ελαστικά με το λευκό κέντρο προς τα πάνω βρίσκονται εντελώς στον μεγάλο κύκλο στόχο"
		M09d = "Εάν το βαρύ ελαστικό διασχίσει την κόκκινη γραμμή ανά πάσα στιγμή, ακόμη και εν μέρει, σκοράρει μηδέν."
		
		M10 = "Κινητό Τηλέφωνο"
		M10a = "Το κινητό ακουμπά μόνο το Mat και η άσπρη πλευρά είναι προς τα πάνω"
		
		M11 = "Διάδρομος"
		M11a = "Το ρομπότ περίστρεψε τους κυλίνδρους και αυτοί δείχνουν:"
		M11b = "Κανένα"
		M11c = "Γκρι"
		M11d = "Κόκκινο"
		M11e = "Πορτοκαλί"
		M11f = "Κίτρινο"
		M11g = "Λαχανί"
		M11h = "Πράσινο"
		
		M12 = "Εργόμετρο"
		M12a = "Η Ελεύθερη Ρόδα είναι εντελώς έξω από τον μεγάλο κύκλο"
		M12b = " Η Ελεύθερη Ρόδα είναι εντώς του μικρού κυκλού "
		
		M13 = "Μηχανή Βάρους"
		M13a = "Η ασφάλεια βρίσκεται κάτω από το μοχλό και η ρύθμιση μοχλού είναι:"
		M13b = "σε κανένα"
		M13c = "στο μπλε"
		M13d = "στη ματζέντα"
		M13e = "στο κίτρινο"
		
		M14 = "Μονάδες Υγείας"
		M14a = "Πόσες Μονάδες Υγείας είναι σε επαφή με το λογότυπο RePLAY ή τη γκρι περιοχή γύρω από τον πάγκο"
		M14b = "Πόσες Μονάδες Υγείας είναι κρεμασμένες στο μονόζυγο – μέγιστο τέσσερις – και δεν είναι σε επαφή με εξοπλισμό"
		
		M15 = "Ακρίβεια"
		M15a = "Πόσες Μάρκες Ακριβείας υπάρχουν στο Field;"
		
		
	}  else if (language == "pt") { 
		translatorCredit = "Translated into Portuguese by Lucas Colonna and Anderson Harayashiki Moreira"

		yes = "Sim"
		no = "Não"
		partly = "Parcialmente"
		completely = "Completamente"
		resetText = "Reiniciar"
		saveText = "Salvar"
		savescoreText = "Salvar Pontuação"
		loadsaveText = "Carregar Pontuação:"
		deletesaveText = "Apagar Pontuações Salvas"
		importsaveText = "Importar Arquivo"
		exportsaveText = "Exportar Arquivo"
		signin = "Entrar como"
		signout = "Sair"
		GoogleCreate = "Criar Nova Planilha"
		GoogleOpen = "Abrir Planilha do Google"
		created = "Criado"
		savedto = "Salvo em"
		dateText = "Data/Horário"
		totalText = "Pontuação Total"
		savedText = "Salvo"
		loadedText = "Carregado"
		
		monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		improvementText = "Histórico de Pontuação"
		scorerText = "Pontuador"
		timersText = "Tempo"
		savesText = "Salvar"
		startText = "Iniciar"
		stopText = "Parar"
		pointsText = "Pontos"
		
		sketchTitle = "Planejador de Estratégia"
		drawingsText = "Desenhos Salvos"
		saveDrawingText = "Salvar Desenho"
		deleteSavedDrawingsText = "Apagar Todos os Desenhos Salvos"
		loadSavedDrawingText = "Carregar Desenho Salvo"
		exportSavedDrawingsText = "Compartilhar Desenhos"
		importSavedDrawingsText = " Importar Desenhos Compartilhados"
		exportPNGText = "Exportar Desenho como .PNG"
		
		doneText = "Completo"
		
		timerText = "Temporizador:"
		stopwatchText = "Cronômetro:"
		
		undefinedText = "Indefinido"
		
		revisionText = "Pontuador RePLAY versão "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = " Uma versão desse pontuador com recursos para torneios pode ser encontrada em <a href='http://tournament.flltutorials.com/'>aqui</a>."
		
		title = "Pontuador FLL RePLAY"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bônus de Inspeção de Equipamentos"
		M00a = "Todos os seus equipamentos couberam no espaço de inspeção pequeno?"
		
		M01 = "Projeto de Inovação"
		M01a = "Está, pelo menos com uma de suas partes, em contato com a logo RePLAY ou a área cinza ao redor do banco?"
		M01b = "É formado por pelo menos duas peças LEGO brancas e mede, pelo menos, quatro pinos de um bloco LEGO em uma das direções."
		
		M02 = "Contador de Passos"
		M02a = "O ponteiro inferior está em"
		M02b = "Nenhum"
		M02c = "Magenta"
		M02d = "Amarelo"
		M02e = "Azul"
		
		M03 = "Escorregador"
		M03a = "Um boneco está fora do escorregador?"
		M03b = "O segundo boneco está fora do escorregador?"
		M03c = "Um boneco do escorregador está na área do robô?"
		M03d = "Um dos bonecos está completamente fora do tapete, sobre o pneu pesado, sem estar tocando em mais nada?"
		
		M04 = "Banco"
		M04a = "O banco está completamente abaixado?"
		M04b = "O banco está completamente abaixado e há cubos tocando o tapete nos espaços da amarelinha?"
		M04c = "O encosto está completamente removido dos seus buracos de encaixe?"
		
		M05 = "Basquetebol"
		M05a = "Há um cubo dentro do caixote?"
		M05b = "O caixote está apoiado sobre a trava branca no meio do poste?"
		M05c = "O caixote está apoiado sobre a trava branca na parte de cima do poste?"
		
		M06 = "Barra Fixa"
		M06a = " O robô passou completamente sob a estrutura da barra fixa a qualquer momento?"
		M06b = " A barra fixa está segurando 100% do robô fora do tapete no final do round?"
		
		M07 = "Dança do Robô"
		M07a = " O controlador do robô está, pelo menos parcialmente, sobre a pista de dança, movendo-se como se estivesse fazendo uma \"dança\" no final do round?"
		M07b = " Qualquer ação repetitiva boba ou que demonstre habilidade conta como se fosse uma dança - façam algo divertido! Não é possível marcar pontos pela M07 e pelo robô \"pendurado\" da M06 no mesmo round."
		
		M08 = "Bocha"
		M08a = "O modelo lançador de cada equipe enviou apenas um cubo para qualquer lugar da arena adversária e os cubos são da mesma cor um do outro?"
		M08b = "Há cubos completamente dentro da sua quadra ou alvo?"
		M08c = "Há pelo menos um cubo amarelo completamente dentro do seu alvo?"
		
		M09 = "Tombamento de Pneu"
		M09a = "O pneu leve (banda azul) está com a parte central branca virada para cima?"
		M09b = "O pneu pesado (banda preta) está com a parte central branca virada para cima?"
		M09c = "Quantos pneus com a parte central branca virada para cima estão completamente dentro do círculo alvo grande?"
		M09d = "Se o pneu pesado cruzar a linha vermelha a qualquer momento, mesmo que parcialmente, a pontuação será zero"
		
		M10 = "Telefone Celular"
		M10a = "O lado branco do telefone celular está virado para cima, apoiado somente sobre o tapete?"
		
		M11 = "Esteira"
		M11a = "O robô girou os roletes de modo que o ponteiro aponte para o"
		M11b = "Nenhum"
		M11c = "Cinza"
		M11d = "Vermelho"
		M11e = "Laranja"
		M11f = "Amarelo"
		M11g = "Verde claro"
		M11h = "Verde escuro"
		
		M12 = "Máquina de Remo"
		M12a = "A roda está completamente fora do círculo grande?"
		M12b = "A roda está completamente dentro do círculo pequeno?"
		
		M13 = "Aparelho de ginástica"
		M13a = "A trava está embaixo da alavanca e o ajuste da alavanca está no"
		M13b = "Nenhum"
		M13c = "Azul"
		M13d = "Magenta"
		M13e = "Amarelo"
		
		M14 = "Unidades de Saúde"
		M14a = "Quantas unidades de saúde estão tocando a logo RePLAY ou a área cinza ao redor do banco?"
		M14b = "Quantas unidades de saúde estão com a argola pendurada em uma das barras verticais da barra fixa, como ilustrado - quatro no máximo - e sem tocar em nenhum equipamento?"
		
		M15 = "Discos de Precisão"
		M15a = "Quantos discos de precisão estão na arena?"
		
		

	} else if (language == "nl") {
		translatorCredit = "Translated into Dutch by Irene Hulsen"

		yes = "Ja"
		no = "Nee"
		partly = "Gedeeltelijk"
		completely = "Volledig"
		resetText = "Reset"
		saveText = "Opslaan" // As verb
		saveNText = "Opslaan" // As noun
		savescoreText = "Score opslaan"
		loadsaveText = "Laad scorenr."
		deletesaveText = "Verwijder alle opgeslagen scores"
		importsaveText = "Importeer gedeelde scores"
		exportsaveText = "Deel scores"
		created = "Gemaakt"
		savedto = "Opgeslagen naar"
		dateText = "Datum/Tijd"
		totalText = "Totaal aantal punten"
		savedText = "Opgeslagen"
		loadedText = "Geladen"
		
		monthNames = ["", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		improvementText = "Score geschiedenis"
		scorerText = "Scorer"
		timersText = "Timers"
		savesText = "Opgeslagen"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Punten"
		
		sketchTitle = "FLL RePLAY strategieplanner"
		drawingsText = "Opgeslagen tekeningen"
		saveDrawingText = "Tekening opslaan"
		deleteSavedDrawingsText = "Verwijder alle opgeslagen tekeningen"
		loadSavedDrawingText = "Laad opgeslagen tekening"
		exportSavedDrawingsText = "Deel tekeningen"
		importSavedDrawingsText = "Importeer gedeelde tekeningen"
		exportPNGText = "Exporteer tekening als PNG"
		
		doneText = "Voltooid"
		
		timerText = "Timer:"
		stopwatchText = "Stopwatch:"
		
		undefinedText = "niet gedefinieerd"
		
		revisionText = "RePLAY scorer versie "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		tournamentText = "Een versie van deze scorer met extra functies die nodig zijn voor een toernooi is te vinden op <a href='http://tournament.flltutorials.com/'></a>."
		
		title = "FLL RePLAY scorer"
		
		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)
		
		M00 = "Bonus"
		M00a = "Past alle uitrusting van het team in de kleine inspectieruimte?"
		
		M01 = "Innovatieproject"
		M01a = "Raakt een deel van het model het RePLAY logo aan of het grijze gebied rond de bank?"
		M01b = "Het model moet gemaakt zijn van tenminste twee witte LEGO onderdelen en minimaal vier LEGO noppen meten in minstens één richting."
		
		M02 = "Stappenteller"
		M02a = "De onderkant van de aanwijzer staat op"
		M02b = "Geen"
		M02c = "Magenta"
		M02d = "Geel"
		M02e = "Blauw"
		
		M03 = "Glijbaan"
		M03a = "Is het eerste glijbaanfiguur van de glijbaan af?"
		M03b = "Is het tweede glijbaanfiguur van de glijbaan af?"
		M03c = "Is een glijbaanfiguur volledig in THUIS?"
		M03d = "Wordt een glijbaanfiguur volledig van de mat gehouden door de zware band en raakt het niets anders?"
		
		M04 = "Bank"
		M04a = "Ligt de bank plat?"
		M04b = "Hoeveel blokjes raken de mat in de hinkelbaanruimtes?"
		M04c = "Is de rugleuning volledig uit beide gaten?"
		
		M05 = "Basketbal"
		M05a = "Is er een blokje in de krat?"
		M05b = "Steunt de krat op de middelste witte stop?"
		M05c = "Steunt de krat op de bovenste witte stop?"
		
		M06 = "Optrekstang"
		M06a = "Is de robot op een bepaald moment volledig voorbij het rechtopstaande frame van de opstrekstang gegaan?"
		M06b = "Houdt de opstrekstang 100% van de robot van de mat aan het einde van de wedstrijd?"
		
		M07 = "Robotdans"
		M07a = "Staat de controller van de robot aan het einde van de wedstrijd tenminste gedeeltelijk over de dansvloer in een “dansende” beweging?"
		M07b = "Elke gekke of gedurfde herhalende actie telt als dansen – doe iets leuks! Je kunt in dezelfde wedstrijd niet scoren voor M07 en het “omhoog houden” van M06."
		
		M08 = "Boccia"
		M08a = "Hebben beide deelmodellen slechts één blokje ergens op het tegenoverliggende veld neergelegd en hebben die blokjes dezelfde kleur?"
		M08b = "Hoeveel blokjes zijn volledig in jullie frame of doel?"
		M08c = "Is er tenminste 1 geel blokje volledig in jullie doel?"
		
		M09 = "Banden omdraaien"
		M09a = "Is de lichte (blauwe) band omgedraaid, wit naar boven?"
		M09b = "Is de zware (zwarte) band omgedraaid, wit naar boven?"
		M09c = "Hoeveel omgedraaide banden, wit naar boven, zijn volledig in de grote doelcirkel?"
		M09d = "Als de zware band op enig moment de rode markeringslijn passeert, zelfs gedeeltelijk, dan scoort hij nul punten."
		
		M10 = "Mobieltje"
		M10a = "Is het mobieltje omgedraaid met de witte kant naar boven en rust het alleen op de mat?"
		
		M11 = "Loopband"
		M11a = "De robot heeft de rollen gedraaid, zodat de wijzer wijst naar"
		M11b = "Geen"
		M11c = "Grijs"
		M11d = "Rood"
		M11e = "Oranje"
		M11f = "Geel"
		M11g = "Lichtgroen"
		M11h = "Donkergroen"
		
		M12 = "Roeimachine"
		M12a = "Is het losse wiel volledig buiten de grote cirkel?"
		M12b = "Is het losse wiel volledig in de kleine cirkel?"
		
		M13 = "Gewichtsapparaat"
		M13a = "De stop is onder de hendel en de hendel is ingesteld op"
		M13b = "Geen"
		M13c = "Blauw"
		M13d = "Magenta"
		M13e = "Geel"
		
		M14 = "Gezondsheidsunits"
		M14a = "Hoeveel gezondheidsunits raken het RePLAY logo aan of het grijze gebied rond de bank?"
		M14b = "Hoeveel gezondsheidsunits zijn gelust aan een paal van de opstrekstang, zoals afgebeeld – maximaal vier – en raken geen uitrusting aan?"
		
		M15 = "Precisie"
		M15a = "Hoeveel precisietekens zijn er op de het veld overgebleven?"		

	}


	versionText = versionNum + " - " + versionDay + " " + monthNames[versionMonth] + " " + versionYear


	improvement = improvementText

	window.monthNames = monthNames
}

languageInit()
version = versionText
