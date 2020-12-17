// This is where all the translations go for every language
// Language switcher v2.0 Dynamic Content Replacer

// For forwards compatibility with older versions of the scorer, just add "languageInit();version=versionText" at the end of this file.
// Note that the line "langs=[XXX]" has no effect in old versions of the scorer and will just be ignored. To update the language list in old versions, copy that line to the equivalent place in index.html

// Universal

versionNum = "1.0"
versionDay = 4
versionMonth = 8
versionYear = 2020
versionText = ""

//langs=['en:United States:English','pt:Brazil:Portugues','de:Germany:Deutsche','es:Spain:Español','sk:Slovakia:Slovenský','nl:Netherlands:Nederlands','el:Greece:ελληνικά','hu:Hungary:Magyar','he:Israel:עִבְרִית‎','fr:France:français']
langs = ['en:United States:English']
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
	saveText = "Save"
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


	if (language == "pt" || language == "pt-br") {
		translatorCredit = "Traduzido para Português (Brasil) por Anderson Harayashiki Moreira"

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
		teamText = "Time"
		roundText = "Round"
		dateText = "Data/Tempo"
		totalText = "Pontuação Total"
		savedText = "Salvo"
		loadedText = "Carregado"
		googleSaveText = "Planilha Google"
		localSaveText = "Armazenamento do Navegador Local(Padrão)"
		isIE = " O armazenamento no sistema Google é incompatível com o Microsoft Internet Explorer. Você pode escolher outro navegador ou continuar utilizando o Sistema de salvamento Legacy (clique acima)"

		googleIntro = "Você pode salvar suas pontuações em uma planilha do Google. Isso ajuda você a acompanhar o progresso durante a temporada. Veja as instruções na parte inferior da página."
		pastSaves = " Pontuações Anteriores"
		instructions = "Instruções"
		instructionsA = "Os principais passos para usar o sistema de salvamento são:"
		instructionsB = '1. Faça login na sua conta do Google. Você pode receber um aviso "Este app não foi verificado". Se assim for, clique em "Avançado" e depois "Acessar flltutorials.com (não seguro)"'
		instructionsC = '2. Se você não criou uma planilha no passado - clique em "Criar Nova Planilha"'
		instructionsD = '3. Se você criou uma planilha no passado, verifique se o campo ID da planilha do Google está preenchido e não "undefined". Se você deseja compartilhar uma planilha entre dispositivos, é necessário inserir esse ID manualmente.'
		instructionsE = '4. Sempre que quiser salvar uma pontuação, clique em "Salvar Pontuação". Isso atualizará a planilha com a pontuação e data atuais.'
		instructionsF = '5. Se você desejar inspecionar sua planilha e editá-la, clique em "Abrir Planilha do Google". Se você precisar do ID da planilha do Google, ela estará na URL da sua planilha quando você a abrir.'
		instructionsG = '6. Você também pode recuperar uma pontuação passada específica no marcador, entrando com o número de salvamento com os botões "+" e "-" e, em seguida, clicando no botão "Carregar Pontuação:"'

		monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		improvementText = "Evolução"
		scorerText = "Marcador"
		timersText = "Temporizadores"
		savesText = "Salvamentos"
		startText = "Iniciar"
		stopText = "Parar"
		pointsText = "Pontos"

		systemText = "Sistema de Salvamento: "

		timerText = "Temporizador:"
		stopwatchText = "Cronômetro:"

		idText = "ID Planilha Google: "
		undefinedText = "indefinido"

		revisionText = "Marcador CITY SHAPER Versão "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "Marcador CITY SHAPER"

		A00 = "Vantagem"
		A00a = "O equipamento do time cabe na Área de Inspeção Pequena?"
		A00b = "5 pontos adicionados a cada missão de 1 a 13 e um adicional de 5 para a M02."

		M01 = "Lugares elevados"
		M01a = "O Robô está <b>Apoiado</b> sobre a ponte?"
		M01b = "Quantas Bandeiras estão claramente levantadas a qualquer altura, somente pelo Robô"

		M02 = "Guindaste"
		M02a = "O módulo Azul está claramente em uma posição mais baixa que a posição inicial?"
		M02b = "O módulo Azul está <b>Independente</b> e <b>Apoiado</b> sobre outro módulo Azul?"
		M02c = "O modulo de baixo está completamente dentro do círculo azul?"

		M03 = "Drone de inspeção"
		M03a = "O Drone de Inspeção está <b>Apoiado</b> sobre o eixo (A) na Ponte?"

		M04 = "Design para os animais"
		M04a = "O morcego está <b>Apoiado</b> pelo galho (B) da Árvore?"

		M05 = "Casa na árvore"
		M05a = "Quantos módulos estão <b>Independentes</b> e <b>Apoiados</b> pelos Galhos Grandes da Árvore?"
		M05b = "Quantos módulos estão <b>Independentes</b> e <b>Apoiados</b> pelos Galhos Pequenos da Árvore?"

		M06 = "Engarrafamento"
		M06a = "O Engarrafamento está levantado, e sua parte móvel está <b>Independente</b> e <b>Apoiada</b> apenas pela própria articulação da estrutura?"

		M07 = "Balanço"
		M07a = "O Balanço está solto?"

		M08 = "Elevador"
		M08a = "As partes móveis do Elevador estão <b>Independentes</b> e <b>Apoiadas</b> apenas pela própria articulação da estrutura com o carro azul para baixo?"
		M08b = " As partes móveis do Elevador estão <b>Independentes</b> e <b>Apoiadas</b> apenas pela própria articulação da estrutura em equilíbrio?"

		M09 = "Fator de Segurança"
		M09a = "Quantas vigas azuis foram derrubadas?"
		M09b = "O Edifício Teste está <b>Independente</b> e <b>Apoiado</b> somente pelas vigas azuis?"

		M10 = "Construção em Aço"
		M10a = "A Estrutura em Aço está em pé e <b>Independente</b> e <b>Apoiada</b> somente pela própria articulação da estrutura?"

		M11 = "Arquitetura Inovadora"
		M11a = "A estrutura está <b>Completamente</b> dentro de algum Círculo?"
		M11b = " A estrutura está <b>Parcialmente</b> em algum Círculo?"
		M11c = "A estrutura criada pela equipe, deve ser claramente maior que o Módulo de Construção Azul e construída usando apenas blocos LEGO brancos."

		M12 = "Planeje & Construa"
		M12a = "Quantos Círculos possuem ao menos um modulo da mesma cor <b>Completamente</b> Dentro, e Tocando o Tapete?"
		M12b = "Se existirem Pilhas <b>Independentes</b> que estejam pelo menos <b>Parcialmente</b> dentro de qualquer Círculo, qual a soma de todas as alturas juntas?"
		M12c = " O Círculo Azul não é Parte da Missão 12. Uma Pilha corresponde a um ou mais Módulos de Construção, o nível 1 deve estar completamente dentro e tocando o Tapete. Os níveis superiores também devem estar tocando no nível inferior completamente)."

		M13 = "Melhorias de Sustentabilidade"
		M13a = "Quantas melhorias (painéis solares, jardim no teto, isolamento) estão <b>Independente</b> e <b>Apoiadas</b> sobre uma Pilha que está pelo menos parcialmente dentro de qualquer Círculo?"

		M14 = "Precisão"
		M14a = "Quantos discos de precisão foram deixados no campo?"



	} else if (language == "de") {
		translatorCredit = "Übersetzung von Tim Waibel (Team Cassapeia)"

		yes = "Ja"
		no = "Nein"
		partly = "Teilweise"
		completely = "Vollständig"
		resetText = "Zurücksetzen"
		saveText = "Speichern"
		savescoreText = "Punktzahl speichern"
		loadsaveText = "Punktzahl laden:"
		deletesaveText = "Gespeicherte Punktzahlen laden"
		importsaveText = "Datei importieren"
		exportsaveText = "Datei exportieren"
		signin = "Anmelden mit"
		signout = "Abmelden aus"
		GoogleCreate = "Neues Google Spreadsheet erstellen "
		GoogleOpen = "Google Spreadsheet öffnen"
		created = "Erstellt"
		savedto = "Gespeichert unter"
		teamText = "Team"
		roundText = "Runde"
		dateText = "Datum/Uhrzeit"
		totalText = "Gesamtpunktzahl"
		savedText = "Gespeichert"
		loadedText = "Geladen"
		googleSaveText = "Google Sheets"
		localSaveText = "Festplatte (Standard)"
		isIE = "In Google speichern funktioniert nicht im Internet Explorer. Du kannst entweder einen anderen Browser benutzen oder auf der Festplatte speichern (siehe oben)."

		googleIntro = "Du kannst deine Punktzahlen in einem Google Spreadsheet speichern. Das hilft Dir, deinen Fortschritt während der Saison zu verfolgen. Für eine Anleitung an das Ende der Seite scrollen."
		pastSaves = "Gespeicherte Punktzahlen"
		instructions = "Anleitung"
		instructionsA = "Die Hauptschritte beim Speichern und Laden von Punktzahlen sind:"
		instructionsB = '1. Melde Dich in Deinem Google-Account an. Evtl. Erhältst Du eine Warnung “diese App ist nicht verifiziert”. Falls das der Fall ist, klicke auf “Erweitert” und fahre dann “Fortfahren (unsicher)”.'
		instructionsC = '2. Falls Du noch kein Spreadsheet erstellt hast, klicke auf “Neues Spreadsheet erstellen”.'
		instructionsD = '3. Falls Du schon ein Spreadsheet erstellt hast, überprüfe, dass das Feld für die Google Sheet ID ausgefüllt ist und nicht “undefiniert”. Falls Du das Spreadsheet auf verschiedenen Geräten verwenden möchtest, must Du diese ID manuell eingeben.'
		instructionsE = '4. Um eine Punktzahl zu speichern, klicke auf “Punktzahl speichern”. Dies wird die aktuelle Punktzahl und das aktuelle Datum in das Spreadsheet eintragen.'
		instructionsF = '5. Um Dein Spreadsheet zo öffnen und zu editieren, klicke auf “Google Spreadsheet öffnen”. Die Google Sheet ID ist Teil der URL des geöffneten Spreadsheets.'
		instructionsG = '6. Du kannst bestimmte Punktzahlen auch laden, indem du die ID der Punktzahl mit den “+” und “-“ Buttons einstellst und dann auf “Punktzahl laden” klickst.'

		monthNames = ["", "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
		improvementText = "Verbesserung"
		scorerText = "Punkterechner"
		timersText = "Zeitnehmer"
		savesText = "Punktzahlen"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Punkte"

		systemText = "Speicherort: "

		timerText = "Timer:"
		stopwatchText = "Stoppuhr:"

		idText = "Google Sheet ID: "
		undefinedText = "undefiniert"

		revisionText = "CITY SHAPER Punkterechner Version "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "CITY SHAPER Punkterechner"

		missionNumbering = "A"

		A00 = "Bonus"
		A00a = "Passt das komplette Material des Teams in die kleine Inspektionszone?"
		A00b = "5 Zusatzpunkte für jede (teilweise) gelöste Aufgabe 1-13 und nochmal 5 Punkte für Aufgabe 2."

		M01 = "Brücke"
		M01a = "<b>Trägt</b> die Brücke den Roboter?"
		M01b = "Wie viele Flaggen sind eindeutig – nur durch den Roboter – beliebig weit gehisst?"

		M02 = "Kran"
		M02a = "Ist die hängende blaue Wohneinheit eindeutig und beliebig weit weg von der grauen Seilführung an der Kranspitze abgesenkt?"
		M02b = " Ist die hängende blaue Wohneinheit <b>eigenständig</b> und wird von einer anderen blauen Wohneinheit <b>getragen</b>?"
		M02c = "Ist die untere Wohneinheit vollständig im blauen Kreis?"

		M03 = "Inspektionsdrohne"
		M03a = "Wird die Inspektionsdrohne von der Achse (A) an der Brücke <b>getragen</b>?"

		M04 = "Lebensraum für Tiere"
		M04a = "Wird die Fledermaus vom Ast (B) des Baums <b>getragen</b>?"

		M05 = "Baumhaus"
		M05a = "Wie viele Wohneinheiten sind <b>eigenständig</b> und werden von den großen Ästen des Baums <b>getragen</b>?"
		M05b = " Wie viele Wohneinheiten sind <b>Eigenständig</b> und werden von den kleinen Ästen des Baums <b>getragen</b>?"

		M06 = "Stau"
		M06a = "Ist der Stau angehoben, wobei der bewegliche Teil <b>eigenständig</b> ist und nur von seinen Scharnieren <b>getragen</b> wird?"

		M07 = "Schaukel"
		M07a = "Ist die Schaukel ausgeklinkt?"

		M08 = "Aufzug"
		M08a = "Sind die beweglichen Teile des Aufzugs <b>eigenständig</b>, nur von ihren Scharnieren <b>getragen</b> und die blaue Kabine befindet sich unten?"
		M08b = " Sind die beweglichen Teile des Aufzugs <b>eigenständig</b>, nur von ihren Scharnieren <b>getragen</b> und der Aufzug ist ausbalanciert?"

		M09 = "Testgebäude"
		M09a = "Wie viele Träger sind mindestens zur Hälfte herausgeschlagen?"
		M09b = "Das Testgemäude muss <b>eigenständig</b> sein und nur von den blauen Trägern <b>Getragen</b> warden."

		M10 = "Stahlbau"
		M10a = "Steht die Stahlkonstruktion <b>eigenständig</b> und wird dabei nur von ihren Scharnieren <b>getragen</b>?"

		M11 = "Innovative Architektur"
		M11a = "Ist die Konstruktion <b>vollständig</b> in einem beliebigen Kreis?"
		M11b = "Ist die Konstruktion <b>teilweise</b> in einem beliebigen Kreis?"
		M11c = "Die Konstruktion muss von eurem Team gestaltet sein und eindeutig größer al seine blaue Wohneinheit sein. Sie darf nur aus den Legoteilen aus Beutel 10 bestehen. "

		M12 = "Entwerfen & Bauen"
		M12a = "In wie vielen Kreisen befindet sich mindestens eine farblich passende Wohneinheit <b>vollständig</b> und steht flach auf der Spielfeldmatte?"
		M12b = "Falls es <b>eigenständige</b> Stapel gibt, die sich mindestens <b>teilweise</b> in einem beliebigen Kreis befinden, was ist die Summe all ihrer Etagen?"
		M12c = "Der blaue Kreis ist nicht Teil von Aufgabe 12. Ein Stapel ist eine oder mehrere Wohneinheiten, deren unterste Etage flach auf der Spielfeldmatte liegt und jede höhere Etage liegt flach auf der darunterliegenden Etage."

		M13 = "Nachhaltigkeit "
		M13a = "Wie viele Nachrüstungen (Solarmodule, Dachgarten, Isolierung) sind <b>eigenständig</b> und warden von einem Stapel <b>getragen</b>, der mindestens teilweise in einem beliebigen Kreis steht?"

		M14 = "Präzision"
		M14a = "Wie viele Präzisionsmarken befinden sich noch auf dem Spielfeld?"

	} else if (language == "nl") {
		translatorCredit = "Vertaald in het Nederlands door Irene Hulsen"

		yes = "Ja"
		no = "Nee"
		partly = "Gedeetelijk"
		completely = "Volledig"
		resetText = "Reset"
		saveText = "Opslaan"
		savescoreText = "Score opslaan"
		loadsaveText = "Score laden:"
		deletesaveText = "Verwijder scores"
		importsaveText = "Importeer bestand"
		exportsaveText = "Exporteer bestand"
		signin = "Aanmelden met"
		signout = "Uitloggen"
		GoogleCreate = "Nieuwe spreadsheet maken"
		GoogleOpen = "Google spreadsheet openen"
		created = "Gemaakt"
		savedto = "Opgeslagen in"
		teamText = "Team"
		roundText = "Ronde"
		dateText = "Datum/Tijd"
		totalText = "Totaal aantal punten"
		savedText = "Opgeslagen"
		loadedText = "Geladen"
		googleSaveText = "Google sheets"
		localSaveText = "Lokale browser opslag (standard)"
		isIE = "Google-opslagsysteem is niet compatibel met Microsoft Internet Explorer. Je kunt naar een andere browser overschakelen of doorgaan met het oude opslagsysteem (klik hierboven)"

		googleIntro = "Je kunt je scores bewaren in een Google spreadsheet. Dit helpt je de voortgang gedurende het seizoen bij te houden. Zie instructies onderaan de pagina."
		pastSaves = "Opgeslagen scores"
		instructions = "Instructies"
		instructionsA = " De belangrijkste stappen om het opslagsysteem te gebruiken zijn:"
		instructionsB = '1. Meld je aan met je Google account. Je kunt de waarschuwing "Deze app is niet geverifieerd" krijgen. Indien dit het geval is, klik op "Geavanceerd" en vervolgens op "Ga naar FLL Scorer(onveilig)"'
		instructionsC = '2. Indien je nog geen spreadsheet hebt gemaakt – klik op "Nieuwe spreadsheet maken".'
		instructionsD = '3. Indien je al een spreadsheet hebt gemaakt, moet je ervoor zorgen dat je het Google Sheet ID hebt ingevoerd (niet "undefined"). Indien je de spreadsheet op meerdere apparaten wilt gebruiken, moet je dit ID handmatig invoeren.'
		instructionsE = '4. Elke keer als je een score wilt opslaan, klik je op "Score opslaan" - de spreadsheet wordt bijgewerkt met de huidige score en datum.'
		instructionsF = '5. Indien je de spreadsheet wilt bekijken en bewerken, klik je op "Google Spreadsheet openen". Indien je het Google-spreadsheet-ID nodig hebt, vind je deze in de URL van de geopende spreadsheet.'
		instructionsG = '6. Je kunt ook een specifieke oude score ophalen in de scorer door het opslagnummer in te voeren met de "+" en "-" knoppen en dan te klikken op de "Score laden:" knop'

		monthNames = ["", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		improvementText = "Verbetering"
		scorerText = "Scorer"
		timersText = "Timers"
		savesText = "Opgeslagen scores"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Punten"

		systemText = "Opslag systeem: "

		timerText = "Timer:"
		stopwatchText = "Stopwatch:"

		idText = "Google Sheet ID: "
		undefinedText = "undefined"

		revisionText = "CITY SHAPER Scorer Versie "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "CITY SHAPER Scorer"

		A00 = "Voordeel"
		A00a = " Past de uitrusting van het team in het kleine inspectiegebied?"
		A00b = "5 extra punten per voltooide missie(M01-M13), en nog eens 5 extra punten voor missie M02."

		M01 = "Verhoogde plaatsen"
		M01a = " Wordt de robot <b>ondersteund</b> door de brug?"
		M01b = "Hoeveel vlaggen zijn duidelijk op enige afstand opgeheven, alleen door de robot"

		M02 = "Kraan"
		M02a = "Is de aangehaakte blauwe unit duidelijk verlaagd op enige afstand van het geleidegat?"
		M02b = "Is de aangehaakte blauwe unit <b>onafhankelijk</b> en  <b>ondersteund</b> door een andere blauwe unit?"
		M02c = "Is niveau 1 volledig in de blauwe cirkel?"

		M03 = "Inspectiedrone"
		M03a = "Wordt de inspectiedrone <b>ondersteund</b> door de as (A) van de brug?"

		M04 = "Ontwerp voor dieren in het wild"
		M04a = "Wordt de vleermuis <b>ondersteund</b> door de bruine tak (B) aan de boom?"

		M05 = "Boomhut"
		M05a = "Aantal units <b>onafhankelijk</b> en <b>ondersteund</b> door de grote takken van de boom?"
		M05b = " Aantal units <b>onafhankelijk</b> en <b>ondersteund</b> door de kleine takken van de boom?"

		M06 = "File"
		M06a = "Staat de file omhoog, is zijn bewegende deel <b>onafhankelijk</b> en alleen <b>ondersteund</b> door zijn scharnieren?"

		M07 = "Schommel"
		M07a = "Is de schommel vrijgegeven?"

		M08 = "Lift"
		M08a = "De bewegende delen van de lift zijn <b>onafhankelijk</b> en alleen <b>ondersteund</b> door zijn scharnieren in de positie: blauwe wagen omlaag."
		M08b = "De bewegende delen van lift zijn <b>onafhankelijk</b> en alleen <b>ondersteund</b> door zijn scharnieren in de positie: in evenwicht."

		M09 = "Veiligheidsfactor"
		M09a = "Hoeveel balken zijn ten minste halverwege omgeduwd?"
		M09b = "Het testgebouw moet <b>onafhankelijk</b> zijn en alleen  <b>ondersteund</b> worden door de blauwe balken."

		M10 = "Staalconstructie"
		M10a = "Staat de staalconstructie, <b>onafhankelijk</b> en alleen <b>ondersteund</b> door zijn scharnieren?"

		M11 = "Innovatieve architectuur"
		M11a = "Is de constructie <b>volledig</b> in een willekeurige cirkel?"
		M11b = "Is de constructie <b>gedeeltelijk</b> in een willekeurige cirkel?"
		M11c = "De constructie moet door het team zijn ontworpen, duidelijk groter zijn dan een blauwe unit en gebouwd zijn van de teams LEGO stenen uit zakje 10."

		M12 = "Ontwerp & bouw"
		M12a = " In hoeveel cirkels bevindt zich ten minste één unit van dezelfde kleur, <b>volledig</b> in en vlak op de mat?"
		M12b = "Als er <b>onafhankelijke</b> stapels zijn die zich ten minste <b>gedeeltelijk</b> in een willekeurige cirkel bevinden, wat is dan de som van al hun hoogten?"
		M12c = "De blauwe cirkel maakt geen deel uit van missie 12. Een stapel is één of meer gebouwunits waarbij niveau 1 de mat vlak raakt, en hogere niveaus het onderliggende niveau vlak raken."

		M13 = "Duurzaamheid upgrades"
		M13a = "Hoeveel upgrades (zonnepanelen, daktuin, isolatie) zijn <b>onafhankelijk</b> en <b>ondersteund</b> op een stapel welke zich ten minste gedeeltelijk in een willekeurige cirkel bevindt?"

		M14 = "Precisie"
		M14a = "Hoeveel precisie tekens zijn er op het veld gebleven?"

	} else if (language == "es") {
		translatorCredit = "Traducido al español por Antonio Zumaquero, entrenador, mentor y juez FLL en España"

		yes = "Sí"
		no = "No"
		partly = "Parcialmente"
		completely = "Completamente"
		resetText = "Reiniciar"
		saveText = "Guardar"
		savescoreText = "Guardar Puntuación"
		loadsaveText = "Cargar Puntuación:"
		deletesaveText = "Eliminar Puntuaciones Guardadas"
		importsaveText = "Importar Archivo"
		exportsaveText = "Exportar Archivo"
		signin = "Iniciar sesión como"
		signout = "Desconectarse de"
		GoogleCreate = "Crear Nueva Hoja de Cálculo"
		GoogleOpen = "Abrir Hoja de Cálculo de Google"
		created = "Creada"
		savedto = "Guardada como"
		teamText = "Equipo"
		roundText = "Ronda"
		dateText = "Fecha/Hora"
		totalText = "Puntuación Total"
		savedText = "Guardada"
		loadedText = "Cargada"
		googleSaveText = "Hojas de Google (probando)"
		localSaveText = "Almacenamiento en Navegador Local (Por defecto)"
		isIE = "El sistema de guardado de Google no es compatible con Microsoft Internet Explorer. Puede cambiar a otro navegador o continuar usando el sistema de guardado local (haga clic arriba)."

		googleIntro = "Puede guardar sus puntuaciones en una hoja de cálculo de Google. Esto le ayuda a mantener un registro del progreso durante la temporada. Vea las instrucciones en la parte inferior de la página."
		pastSaves = "Anteriormente Guardadas"
		instructions = "Instrucciones"
		instructionsA = "Los pasos clave para usar el sistema de guardado son:"
		instructionsB = '1. Inicie sesión en su cuenta de Google. Puede recibir una advertencia de "Esta aplicación no está verificada". Si es así, haga clic en "Avanzado" y luego en "Ir a Marcador FLL (FLL Scorer) (inseguro)"'
		instructionsC = '2. Si no ha creado una hoja de cálculo anteriormente, haga clic en "Crear nueva hoja de cálculo"'
		instructionsD = '3. Si creó una hoja de cálculo anteriormente, asegúrese de que el campo ID de la hoja de Google esté completo y no esté "indefinido". Si desea compartir una hoja de cálculo entre dispositivos, debe introducir esta identificación manualmente.'
		instructionsE = '4. Cada vez que desee guardar una puntuación, haga clic en "Guardar puntuación"; esto actualizará la hoja de cálculo con la puntuación y la fecha actuales.'
		instructionsF = '5. Si desea inspeccionar su hoja de cálculo y editarla, haga clic en "Abrir hoja de cálculo de Google". Si alguna vez necesita el ID de la hoja de Google, se encuentra en la URL de su hoja de cálculo cuando la abra.'
		instructionsG = '6. También puede recuperar una puntuación anterior específica en el marcador al introducir el número de guardado con los botones "+" y "-" y luego hacer clic en el botón "Cargar guardada:"'

		monthNames = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		improvementText = "Mejora"
		scorerText = "Marcador"
		timersText = "Temporizadores"
		savesText = "Guardadas"
		startText = "Iniciar"
		stopText = "Parar"
		pointsText = "Puntos"
		sketchTitle = "Strategy Planner"
		drawingsText = "Drawings"
		saveDrawingText = "Save Drawing"
		deleteSavedDrawingsText = "Delete All Saved Drawings"
		loadSavedDrawingText = "Load Saved Drawing"
		exportSavedDrawingsText = "Export Saved Drawings"
		importSavedDrawingsText = "Import Saved Drawings"
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
		M01a = "Has any part of it touching either the RePLAY logo or the gray area around the bench?"
		M01b = "Is made of at least two white LEGO pieces. Measures at least as long as four LEGO studs in at least one direction."
	
		M02 = "Step Counter"
		M02a = "If the bottom of the pointer is on"
		M02b = "magenta"
		M02c = "amarillo"
		M02d = "azul"
	
		M03 = "Slide"
		M03a = "If only one slide figure is off the slide"
		M03b = "If both slide figures are off the slide"
		M03c = "If a slide figure is completely in home"
		M03d = "If a slide figure is held completely off the mat by the heavy tire and is touching nothing else"
	
		M04 = "Bench"
		M04a = "If the bench is down flat"
		M04b = "If the bench is down flat and there are cubes touching the mat in hopscotch spaces"
		M04c = "If the backrest is completely out of both of its holes"
	
		M05 = "Basketball"
		M05a = "If there is a cube in the crate"
		M05b = "If the crate rests on the middle height’s white stopper"
		M05c = "If the crate rests on the top height’s white stopper"
	
		M06 = "Pull-Up Bar"
		M06a = "If the robot passes completely through the pull-up bar’s upright frame at any time"
		M06b = "If the pull-up bar holds 100% of the robot up off the mat at the end of the match"
	
		M07 = "Robot Dance"
		M07a = "If the robot’s controller is at least partly over the dance floor in a “dancing” motion at the end of the match"
		M07b = "Any silly or skilled repetitive action counts as dancing – do something fun! For M07, you cannot score this plus the “held up” score from M06 in the same match."
	
		M08 = "Boccia"
		M08a = "If both share models have sent only one cube anywhere onto the opposing field and those cubes color-match each other"
		M08b = "If there are cubes completely in your frame or target"
		M08c = "If there is at least one yellow cube completely in your target"
	
		M09 = "Tire Flip"
		M09a = "If the light (blue tread) tire is white center up"
		M09b = "If the heavy (black tread) tire is white center up"
		M09c = "If white-center-up tires are completely in the large target circle"
	
		M10 = "Cell Phone"
		M10a = "If the cell phone is white side up and resting on only the mat"
	
		M11 = "Treadmill"
		M11a = "If the robot spins the rollers so the pointer points to grey"
		M11b = "If the robot spins the rollers so the pointer points to red"
		M11c = "If the robot spins the rollers so the pointer points to orange"
		M11d = "If the robot spins the rollers so the pointer points to yellow"
		M11e = "If the robot spins the rollers so the pointer points to light green"
		M11f = "If the robot spins the rollers so the pointer points to dark green"
	
		M12 = "Row Machine"
		M12a = "Completely outside the large circle"
		M12b = "Completely in the small circle"
	
		M13 = "Weight Machine"
		M13a = "If the stopper is under the lever and lever setting is blue"
		M13b = "If the stopper is under the lever and lever setting is magenta"
		M13c = "If the stopper is under the lever and lever setting is yellow"
	
		M14 = "Health Units"
		M14a = "If health units are touching either the RePLAY logo or the gray area around the bench"
		M14b = "If health units are looped over a pull-up bar post as shown – maximum of four – and touching no equipment"
	
		M15 = "Precision"
		M15a = "How many Precision Tokens are left on the field?"
	
	
	


	} else if (language == "sk") {
		yes = "Áno"
		no = "Nie"
		pointsText = "Skóre"
		resetText = "Reset"
		partly = "Čiastočne"
		completely = "Celkom"
		monthNames = ["", "január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "December"];
		improvementText = "Improvement"
		saveText = "Uložiť"
		savescoreText = "Uložiť skóre"
		loadaveText = "Načítať uložiť"
		deletesaveText = "Odstrániť šetrí"
		importaveText = "Importovať"
		exportaveText = "Exportovať uloženie"
		scorerText = "Scorer"
		timersText = "Časovače"
		savesText = "Uloží"
		startText = "Štart"
		stopText = "Stop"


	} else if (language == "hu") {

		yes = "Igen"
		no = "Nem"
		partly = "Részlegesen"
		completely = "Teljesen"
		resetText = "Törlés"
		saveText = "Mentés"
		savescoreText = "Pontok mentése"
		loadsaveText = "Mentés betöltése:"
		deletesaveText = "Mentés törlése"
		importsaveText = "Mentés importálása"
		exportsaveText = "Mentés exportálása"
		signin = "Bejelentkezés: "
		signout = "Kijelentkezés"
		GoogleCreate = "Új Google Spreadsheet készítése"
		GoogleOpen = "Google Spreadsheet megnyitása"
		created = "Elkészítve"
		savedto = "Mentve: "
		teamText = "Csapat"
		roundText = "Kör"
		dateText = "Dátum/Idő"
		totalText = "Össz pontszám"
		savedText = "Mentve"
		loadedText = "Betöltve"
		googleSaveText = "Google Sheets"
		localSaveText = "Helyi böngésző tárhelye"
		isIE = "A Google mentési rendszer nem kompatibilis a Microsoft Internet Explorerrel. Átválthatsz egy másik böngészőre vagy folytathatod a böngésző tárhelyébe mentéssel (kattints fent)"
		systemText = "Mentés helye"

		googleIntro = "Pontjaidat Google Spreadsheetbe tudod menteni. Ez segít neked figyelemmel kísérni a fejlődésedet az év közben. Az instrukciókat az oldal alján találod."
		pastSaves = "Előző mentések"
		instructions = "Instrukciók"
		instructionsA = "A legfőbb lépések a mentés használatához a következőek:"
		instructionsB = '1. Lépj be a Google fiókodba. Lehet, hogy kapsz egy "Ez az app nem megbízható" figyelmeztetést. Ebben az esetben nyomj a "Haladó beállítások"-ra majd menj az  "FLL Scorer (nem biztonságos)" elemhez'
		instructionsC = '2. Ha még nem hoztál létre Google Spreadsheet-et akkor nyomj a "Új Google Spreadsheet létrehozása"-ra'
		instructionsD = '3. Ha a múltban már létrehoztál egyet, legyél biztos abban, hogy a Google Sheet ID mező ki van töltve és nem "meghatározatlan". Ha meg akarsz osztani Google Spreadsheet-et eszközök között, ezt az ID-t manuálisan kell begépelned.'
		instructionsE = '4. Bármikor, amikor el akarsz menteni pontszámot, nyomj a "Pontok mentése" gombra – ez fríssíti a Google Spreadsheet-et a ponttal és a dátummal ellátva.'
		instructionsF = '5. Ha szeretnéd megnézni, vagy szerkeszteni a Spreadsheet-et, nyomj rá a "Google Spreadsheet megnyitása" gombra. Ha szükséged van a Google Spreadsheet ID-ra, ezt a megnyitott Google Spreadsheet URL-ben találod meg.'
		instructionsG = '6. Vissza tudsz hozni egy előző mentést azzal, ha kiválasztod a mentés számát a "+" és "-" gombokkal, majd a "Mentés betöltése:" gombra kattintasz.'


		monthNames = ["", "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
		improvementText = "Javítás"
		scorerText = "Pontozó"
		timersText = "Időmérők"
		savesText = "Mentések"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Pontok"

		timerText = "Visszaszámláló:"
		stopwatchText = "Stopper:"


		idText = "Google Sheet ID: "
		undefinedText = "meghatározatlan"


		translatorCredit = "Az appot magyarra fordította: a Tövis&ASAP csapat."



	} else if (language == "el") {
		translatorCredit = "Translated into Greek by Michail Marinakis – Mεταφράστηκε στα ελληνικά από τον Μιχάλη Μαρινάκη"

		yes = "Ναι"
		no = "Όχι"
		partly = "Μερικώς"
		completely = "Εντελώς"
		resetText = "Επαναφορά"
		saveText = "Αποθήκευση"
		savescoreText = "Αποθήκευση Βαθμολογίας"
		loadsaveText = "Φόρτωση Αποθηκευμένης Βαθμολογίας:"
		deletesaveText = "Διαγραφή Βαθμολογιών"
		importsaveText = "Εισαγωγή Βαθμολογιών"
		exportsaveText = "Εξαγωγή Βαθμολογιών"
		signin = "Σύνδεση"
		signout = "Έξοδος"
		GoogleCreate = "Δημιουργία Νέου Λογιστικού Φύλλου"
		GoogleOpen = "Άνοιγμα Google Spreadsheet"
		created = "Δημιουργήθηκε"
		savedto = "Αποθηκεύτηκε σε"
		teamText = "Ομάδα"
		roundText = "Γύρος"
		dateText = "Ημερομηνία/Ώρα"
		totalText = "Τελική Βαθμολογία"
		savedText = "Αποθηκεύτηκε"
		loadedText = "Φορτώθηκε"
		googleSaveText = "Φύλλα Google"
		localSaveText = "Αποθήκευση Προγράμματος Περιήγησης (Default)"
		isIE = "Το σύστημα αποθήκευση της Google δεν είναι συμβατό με το πρόγραμμα περιήγησης “Internet Explorer” της Microsoft. Μπορείτε είτε να αλλάξετε πρόγραμμα περιήγησης είτε να συνεχίσετε χρησιμοποιώντας το σύστημα αποθήκευσης της εφαρμογής (Πατήστε παρακάτω)"
		systemText = "Αποθήκευση Συστήματος: "

		googleIntro = "Μπορείτε να αποθηκεύσετε τις βαθμολογίες σας στα Φύλλα Google. Αυτό σας βοηθά να ελέγχετε την πρόοδο σας καθ’ όλη την πορεία σας στην σεζόν City Shaper. Δείτε τις οδηγίες στο τέλος της σελίδας."
		pastSaves = "Παλαιότερες Βαθμολογίες"
		instructions = "Οδηγίες"
		instructionsA = "Τα βήματα που πρέπει να ακολουθήσετε για να αποθηκεύεται τις βαθμολογίες σας είναι τα εξής:"
		instructionsB = '1. Συνδεθήτε με τον Λογαριασμό Google σας. Μπορεί να λάβετε την ειδοποίση "Mη πιστοποιημένη εφαρμογή". Εάν την λάβετε, πατήστε "Ρυθμίσεις για Προχωρημένους - Advanced" και μετά "Μετάβαση στο FLL Scorer (μη ασφαλές)"'
		instructionsC = '2. Εάν δεν έχετε δημιουργήσει λογιστικό φύλλο στο παρελθόν πατήστε "Δημιουργία νέου Λογιστικού Φύλλου"'
		instructionsD = '3. Εάν έχετε δημιουργήσει Λογιστικό Φύλλο στο παρελθόν, βεβαιωθήτε ότι το ID του Λογιστικού φύλλου έχει συμπληρωθεί και δεν είναι κενό". Εάν θέλετε να βλέπετε το λογιστικό φύλλο σε άλλη συσκευή, πρέπει να εισάγεται το ID χειροκίνητα.'
		instructionsE = '4. Κάθε φορά που θέλετε να αποθηκεύσετε την βαθμολογία σας, πατήστε "Αποθήκευση Βαθμολογίας" - αυτό θα αποθηκεύσει την νέα σας βαθμολογία στο λογιστικό φύλλο με την τρέχουσα ημερομηνία και ώρα'
		instructionsF = '5. Εάν θέλετε να επεξεργαστείτε ή να δείτε το λογιστικό φύλλο, πατήστε "Άνοιγμα Φύλλων Google". Εάν χρειαστείτε το ID σας. - βρίσκεται στο URL του λογιστικού φύλλου σας όταν το ανοίγεται.'
		instructionsG = '6. Μπορείτε να ανακτήσετε/να εισάγεται την παλιά σας βαθμολογία στο scorer εισάγοντας τον αριθμό αποθήκευσης με τα κουμπιά "+" και "-" and και μετά να πατήσετε το κουμπί "Ανάκτηση Αποθηκευμένης Βαθμολογίας:" '

		monthNames = ["Μήνας", "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
		improvementText = "Πρόοδος"
		scorerText = "Καταγραφή Βαθμολογίας"
		timersText = "Χρονόμετρα"
		savesText = "Αποθηκεύσεις"
		startText = "Έναρξη"
		stopText = "Παύση"
		pointsText = "Βαθμοί"

		timerText = "Χρόνος:"
		stopwatchText = "Χρονόμετρο:"

		idText = "Google Sheet ID: "
		undefinedText = "δεν καθορίζεται"

		revisionText = "CITY SHAPER Scorer Έκδοση "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "CITY SHAPER Βαθμολογία"

		A00 = "Πλεονέκτημα"
		A00a = "Όλος ο Εξοπλισμός χωράει στην Μικρή Περιοχή"
		A00b = "5 Πόντοι για τις αποστολές 1-13 και ακόμα 5 πόντοι για την Αποστολή 2."

		M01 = "Υπερυψωμένα Σημεία"
		M01a = "Το ρομπότ <b>υποστηρίζεται</b> από την γέφυρα"
		M01b = "Πόσες σημαίες είναι υψωμένες σε οποιαδήποτε απόσταση, αποκλειστικά από το ρομπότ;"

		M02 = "Γερανός"
		M02a = "Το μπλέ διαμέρισμα του γερανού είναι ξεκάθαρα κατεβασμένο από το σημείο οδηγό"
		M02b = "Είναι το μπλέ διαμέρισμα του γερανού <b> ανεξάρτητο </b> και <b>υποστηρίζεται</b> από ένα άλλο μπλέ διαμέρισμα;"
		M02c = "Tο πρώτο επίπεδο είναι μέσα στον κύκλο."

		M03 = " Drone Επιθεώρησης"
		M03a = " Το Drone Επιθεώρησης <b>υποστηρίζεται</b> από τον άξονα (A) της γέφυρας;"

		M04 = "Σχεδιασμός για την Άγρια Ζωή"
		M04a = "Η νυχτερίδα <b>υποστηρίζεται</b> από το καφέ κλαδί (B) του δέντρου"

		M05 = "Δεντρόσπιτο"
		M05a = "Πόσα Διαμερίσματα είναι <b>Ανεξάρτητα</b> και <b>υποστηρίζονται</b> από τα Μεγάλα Κλαδιά του δέντρου;"
		M05b = " Πόσα Διαμερίσματα είναι <b>Ανεξάρτητα</b> και <b>υποστηρίζονται</b> από τα Μικρά Κλαδιά του δέντρου;"

		M06 = "Μποτιλάρισμα"
		M06a = " Είναι ο δρόμος με την κυκλοφοριακή συμφόρηση είναι σηκωμένος, <b>Ανεξάρτητος</b> και <b>υποστηρίζεται</b> μόνο από τους μεντεσέδες του;"

		M07 = "Κούνια"
		M07a = "Είναι η κούνια ελεύθερη;"

		M08 = "Ανελκυστήρας Αυτοκινήτων"
		M08a = "Είναι όλα τα τμήματα του ανελκυστήρα <b>Ανεξάρτητα</b> και <b>υποστηρίζονται</b> μόνο από τους μεντεσέδες με και το μπλέ όχημα είναι κάτω;"
		M08b = " Είναι όλα τα τμήματα του ανελκυστήρα <b>Ανεξάρτητα</b> και <b>υποστηρίζονται</b> μόνο από τους μεντεσέδες σε θέση ισορροπίας;"

		M09 = "Παράγοντας Ασφαλείας"
		M09a = " Πόσοι μπλέ δοκοί έχουν κατέβει έστω μέχρι την μέση;"
		M09b = "Το κτήριο δοκιμών είναι <b>Ανεξάρτητο</b> και <b>υποστηρίζεται</b> μόνο από τις μπλέ δοκούς"

		M10 = "Ατσάλινα Θεμέλια"
		M10a = " Είναι τα ατσάλινα θεμέλια <b>Ανεξάρτητα</b> και η κατασκευή <b>υποστηρίζεται</b> μόνο από την βάση της;"


		M11 = "Καινοτόμος Αρχιτεκτονική"
		M11a = "Είναι η κατασκευή <b>εντελώς</b> μέσα σε οποιοδήποτε Κύκλο;"
		M11b = " Είναι η κατασκευή <b>μερικώς</b> μέσα σε οποιοδήποτε Κύκλο;"
		M11c = " Η κατασκευή πρέπει να είναι μεγαλύτερη από ένα μπλέ διαμέρισμα και κατασκευασμένη μόνο από λευκά LEGO bricks του Bag 10; "

		M12 = "Σχεδίασε και χτίσε"
		M12a = " Πόσοι κύκλοι έχουν τουλάχιστον ένα διαμέρισμα με αντίστοιχο χρώμα το οποίο ακουμπά πάνω στο χαλί και είναι <b> εντελώς </b> μέσα στον κύκλο;"
		M12b = " Υπάρχουν <b>Ανεξάρτητες</b> δομές τουλάχιστον <b>μερικώς</b> μέσα σε οποιοδήποτε κύκλο; Ποιο είναι το άθροισμα του ύψους τους σε διαμερίσματα;"
		M12c = "Ο μπλε κύκλος δεν είναι μέρος της αποστολής 12. Μια δόμη είναι ένα ή περισσότερα διαμερίσματα που το επίπεδο 1 ακουμπά ίσιο στο χαλί και οποιοδήποτε άλλο επίπεδο ακουμπά το αποκάτω επίπεδο."

		M13 = "Ανανάθμιση της βιωσιμότητας"
		M13a = "Πόσες αναβαθμίσεις βιωσιμότητας (ηλιακοί συλλέκτες, κήπος οροφής, μόνωση) είναι <b>Ανεξάρτητες</b> και <b>Υποστηρίζονται</b> μόνο από μία δομή και είναι τουλάχιστον μερικώς μέσα σε οποιοδήποτε κύκλο;"

		M14 = "Ακρίβεια"
		M14a = " Πόσες μάρκες ακρίβειας έχουν απομείνει στην πίστα;"

	} else if (language == "fr") {
		yes = "Oui"
		no = "Non"
		partly = "Partiellement"
		completely = "Complètement"
		pointsText = "Points"
		resetText = "Redémarrer"

		monthNames = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
		improvementText = "Amélioration"
		saveText = "Enregistrer"
		savescoreText = "Enregistrer le score"
		loadsaveText = "Charger Enregistrer"
		deleteaveText = "Supprimer les sauvegardes"
		importsaveText = "Importer enregistrer"
		exportsaveText = "Exporter enregistrer"
		scorerText = "Scorer"
		timersText = "Timers"
		saveText = "Sauve"
		startText = "Démarrer"
		stopText = "Stop"



	} else if (language == "he") {
		yes = "כן"
		no = "לא"
		partly = "חלקית"
		completely = "לגמרי"
		pointsText = "נקודות"
		resetText = "אפס"


		monthNames = ["", "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
		improvementText = "שיפור"
		saveText = "שמור"
		savescoreText = "שמור ציון"
		loadsaveText = "טען שמירה"
		deletesaveText = "מחק שמירת"
		importsaveText = "ייבוא שמור"
		exportsaveText = "ייצוא שמירה"
		scorerText = "מלך השערים"
		timersText = "טיימרים"
		savesText = "שומר"
		startText = "התחל"
		stopText = "עצור"





	} else if (language == "tr") {
		yes = "Evet"
		no = "Hayır"
		partly = "Kısmen"
		completely = "Tamamen"
		resetText = "Temizle"
		saveText = "Kaydet"
		savescoreText = "Skoru Kaydet"
		loadsaveText = "Yükle Kaydet:"
		deletesaveText = "Sil Kayıtlar"
		importsaveText = "İçe Aktar Kaydet"
		exportsaveText = "Dışa Aktar Kaydet"
		signin = "Şununla Giriş yap"
		signout = "Oturumu kapat"
		GoogleCreate = " Yeni E-Tablo Oluştur "
		GoogleOpen = " Google E-Tablo Aç "
		created = "Oluşturuldu"
		savedto = "Şuraya Kaydet"
		teamText = "Takım"
		roundText = "Tur"
		dateText = "Tarih/Saat"
		totalText = "Toplam Puan"
		savedText = "Kaydedildi"
		loadedText = "Yüklendi"
		googleSaveText = " Google E-Tablolar"
		localSaveText = " Yerel Tarayıcı Deposu (Varsayılan)"
		isIE = " Google kaydetme sistemi Microsoft Internet Explorer ile uyumsuz. Başka bir tarayıcıya geçebilir veya eski kaydetme sistemini kullanarak devam edebilirsiniz (yukarıyı tıklayın)"

		googleIntro = " Puanlarınızı bir Google E-tablosuna kaydedebilirsiniz. Bu, sezon boyunca ilerlemeyi takip etmenize yardımcı olur. Sayfanın altındaki talimatları görün."
		pastSaves = "Geçmiş kayıtlar"
		instructions = "Talimatlar"
		instructionsA = " Kaydetme sistemini kullanmanın temel adımları şunlardır:"
		instructionsB = '1. Google hesabınıza giriş yapın. "Bu uygulama doğrulanmadı" uyarısı alabilirsiniz. Eğer öyleyse, "Gelişmiş" ve ardından "FLL Scorer`a (güvensiz) git" e tıklayın.'
		instructionsC = '2. Geçmişte bir e-tablo oluşturmadıysanız - "Yeni E-Tablo Oluştur" u tıklayın.'
		instructionsD = '3. Geçmişte bir e-tablo oluşturduysanız, Google Etiket Kimliği alanının doldurulmadığından ve "tanımsız" olmadığından emin olun. E-tabloyu cihazlar arasında paylaşmak isterseniz, bu kimliği manuel olarak girmeniz gerekir.'
		instructionsE = '4. Bir skoru kaydetmek istediğiniz zaman, "Puanı Kaydet" i tıklayın - bu, e-tabloyu geçerli puan ve tarihle güncelleyecektir. '
		instructionsF = '5. E-tablonuzu incelemek ve düzenlemek istiyorsanız "Google E-tabloyu Aç" a tıklayın. Google Sayfa Kimliği`ne ihtiyacınız varsa - açtığınızda, e-tablonuzun URL`sinde bulunur.'
		instructionsG = '6. Ayrıca "+" ve "-" tuşlarına basarak kaydetme numarasını girip "Load Save:" (Kaydet): butonuna basarak belirli bir skoru skorerde alabilirsiniz.'


		monthNames = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
		improvementText = "Gelişme"
		scorerText = "Puanlayıcı"
		timersText = "Zaman Ölçümü"
		savesText = "Kayıtlar"
		startText = "Başla"
		stopText = "Dur"
		pointsText = "Puanlar"

		systemText = "Sistem Tasarrufu:"

		timerText = "Zamanlayıcı:"
		stopwatchText = "Kronometre:"


		translatorCredit = " Uygulamanın Türkçe çevirisi www.robotum.net kurucusu, Yücel Tekin tarafından yapılmıştır."

	} else if (language == "it") {
		translatorCredit = "Tradotto in italiano da Giuseppe Comis"

		yes = "Si"
		no = "No"
		partly = "Parzialmente"
		completely = "Completamente"
		resetText = "Reset"
		saveText = "Salva"
		savescoreText = "Salva Punteggio"
		loadsaveText = "Carica Punteggio:"
		deletesaveText = "Cancella i punteggi salvati"
		importsaveText = "Importa File Salvato"
		exportsaveText = "Esporta File"
		signin = "Accedi con"
		signout = "Esci"
		GoogleCreate = "Crea un nuovo Foglio Google"
		GoogleOpen = "Apri un Foglio Google"
		created = "Creato"
		savedto = "Salvato in"
		teamText = "Squadra"
		roundText = "Round"
		dateText = "Data/Ora"
		totalText = " Punteggio Totale"
		savedText = "Salvato"
		loadedText = "Caricato"
		googleSaveText = "Fogli Google"
		localSaveText = "Salva in Locale (Default)"
		isIE = "Il sistema di salvataggio di Google non è compatibile con Microsoft Internet Explorer. Puoi passare a un altro browser o continuare utilizzando il sistema di salvataggio legacy (fai clic sopra)"

		googleIntro = "Puoi salvare i tuoi punteggi su un foglio di lavoro Google. Questo ti aiuta a tenere traccia dei progressi nel corso della stagione. Vedi le istruzioni in fondo alla pagina."
		pastSaves = "Salvataggi Precedenti"
		instructions = "Istruzioni"
		instructionsA = "I passaggi chiave per l'utilizzo del sistema di salvataggio sono:"
		instructionsB = '1. Accedi al tuo account Google. È possibile che venga visualizzato un avviso "Questa app non è verificata". In tal caso, fai clic su "Avanzate" e poi "Vai a FLL Scorer (non sicuro)" '
		instructionsC = '2. Se non hai creato precedentemente alcun foglio di lavoro, fai clic su "Crea nuovo foglio di lavoro"'
		instructionsD = '3. Se precedentemente hai creato un foglio di lavoro, assicurati che il campo ID del Foglio di Google sia compilato e non "indefinito". Se desideri condividere un foglio di calcolo tra dispositivi, devi inserire questo ID manualmente.'
		instructionsE = '4. Ogni volta che vuoi salvare un punteggio, fai click su "Salva Punteggio" – questo aggiornerà il Foglio Google con l’attuale punteggio e data'
		instructionsF = '5. Se desideri controllare il foglio di lavoro e modificarlo, fai clic su "Apri foglio di lavoro Google ". Se dovessi avere bisogno dell`ID foglio di Google, si trova nell`URL del foglio di lavoro quando lo apri.'
		instructionsG = '6. Puoi anche recuperare uno specifico punteggio precedente nel segnapunti inserendo il numero di salvataggio con i pulsanti "+" e "-" e facendo clic sul pulsante "Carica salvataggio:" '

		monthNames = ["", "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
		improvementText = "Miglioramento"
		scorerText = "Segnapunti"
		timersText = "Timer"
		savesText = "Salvataggi"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Punti"

		systemText = "Sistema di salvataggio:"

		timerText = "Timer:"
		stopwatchText = "Cronometro:"

		idText = "Google Sheet ID: "
		undefinedText = "Indefinito"

		revisionText = "CITY SHAPER Scorer Version "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "CITY SHAPER Scorer"

		A00 = "Punti aggiuntivi"
		A00a = "Il robot e l'attrezzatura del team si adattano all'area di ispezione piccola?"
		A00b = "5 punti aggiunti a ciascuna missione 1-13 e altri 5 a M02."

		M01 = "Luoghi Elevati"
		M01a = "Il Robot è <b>Sostenuto</b> dal Ponte?"
		M01b = "Quante bandiere sono chiaramente sollevate a qualsiasi altezza, solo dal robot?"

		M02 = "Gru"
		M02a = "L'unità blu agganciata è chiaramente abbassata a qualsiasi distanza dal foro guida?"
		M02b = "L'unità blu agganciata è <b>Indipendente</b> e <b>Sostenuta</b> da un’altra Unità Blu?"
		M02c = "Il Livello 1 è Completamente nel Cerchio Blu?"

		M03 = "Drone d’Ispezione"
		M03a = "Il Drone d’Ispezione è <b>Sostenuto</b> dall’assale (A) sul ponte?"

		M04 = "Design per la fauna selvatica"
		M04a = "Il Pipistrello è <b>Sostenuto</b> dal ramo marrone (B) sull’Albero?"

		M05 = "Casa sull'albero"
		M05a = "Quante Unità sono <b>Indipendenti</b> e <b>Sostenute</b> dai rami grandi dell'albero?"
		M05b = " Quante Unità sono <b>Indipendenti</b> e <b>Sostenute</b> dai rami piccoli dell’albero?"

		M06 = "Ingorgo stradale"
		M06a = "L’ingorgo stradale è stato sollevato, la sua parte mobile è <b>Indipendente</b> e <b>Sostenuta</b> solo dai suoi cardini?"

		M07 = "Altalena"
		M07a = "L'altalena è stata rilasciata?"

		M08 = "Ascensore"
		M08a = "Le parti mobili dell’Ascensore sono <b>Indipendenti</b> e <b>Sostenute</b> solo dai loro cardini con la Cabina Blu in basso?"
		M08b = " Le parti mobili dell’Ascensore sono <b>Indipendenti</b> e <b>Sostenute</b> solo dai loro cardini in posizione bilanciata?"

		M09 = "Fattore sicurezza"
		M09a = "Quanti pilastri sono stati tolti almeno per metà?"
		M09b = " L'edificio di prova deve essere <b>Indipendente</b> e <b>Sostenuto</b> solo dai pilastri blu"

		M10 = "Costruzione in acciaio"
		M10a = "La Struttura in Acciaio è in posizione verticale, ed è <b>Indipendente</b> e <b>Sostenuta</b> solo dai suoi cardini?"

		M11 = "Architettura Innovativa"
		M11a = "La Struttura è <b>Completamente</b> in un cerchio qualsiasi?"
		M11b = "La Struttura è <b>Parzialmente</b> in un cerchio qualsiasi?"
		M11c = "La struttura deve essere progettata dalla squadra e chiaramente più grande di un'unità di costruzione blu. Deve essere costruita con i mattoncini LEGO in possesso della squadra nella busta 10."

		M12 = "Progetta e costruisci"
		M12a = "Quanti cerchi hanno almeno una corrispondenza fra i colori delle unità <b>Completamente</b> Dentro, e poggiate sul Tappeto?"
		M12b = "Se ci sono Stack <b>Indipendenti</b> almeno <b>Parzialmente</b> in qualunque cerchio, qual è la somma di tutte le loro altezze?"
		M12c = "Il cerchio Blu non è una parte della Missione 12. Uno Stack è una o più Unità di Costruzione col primo livello che tocca il Tappeto, e tutti gli altri livelli che toccano il livello sottostante ad essi."

		M13 = "Miglioramenti alla Sostenibilità"
		M13a = "Quanti Miglioramenti (pannelli solari, giardini pensili, isolamenti) sono <b>Indipendenti</b> e <b>Sostenuti</b> su uno Stack che si trovi almeno in parte in un Cerchio qualsiasi?"

		M14 = "Precisione"
		M14a = "Quanti Gettoni di Precisione sono rimasti sul campo?"

	} else if (language == "eu") {

		translatorCredit = "Euskaratuta Anartz San Juan-engatik Edurobotic FIRST LEGO League-en taldekidea"

		yes = "Bai"
		no = "Ez"
		partly = "Partzialki"
		completely = "Guztiz"
		resetText = "Berrabiarazi"
		saveText = "Gorde"
		savescoreText = "Puntuaketa Gorde"
		loadsaveText = "Puntuaketa Kargatu:"
		deletesaveText = "Ezabatu Gordetakoak"
		importsaveText = "Inportatu Gordetakoa"
		exportsaveText = "Exportatu gordetakoa"
		signin = "Sartu honekin"
		signout = "Deskonektatu hemendik"
		GoogleCreate = "Sortu Kalkulu orri berri bat"
		GoogleOpen = "Zabaldu Google kalkulu orri bat"
		created = "Sortuta"
		savedto = "Gordeta nola"
		teamText = "Taldea"
		roundText = "Erronda"
		dateText = "Data/Ordua"
		totalText = "Emaitza totala"
		savedText = "Gordeta"
		loadedText = "Kargatuta"
		googleSaveText = "Googleren orriak"
		localSaveText = "Nabigatzaile Lokaleko Almazenamendua (Lehenespenez)"
		isIE = " Googleren gordetze sistema ez da bateragarria Internet Explorerrekin. Nabigatzailez aldatu dezakezu edo heredatutako gordetze sistema erabiltzen jarrai dezakezu (klikatu goian)"

		googleIntro = "Zure puntuazioak Google-ren kalkulu horri batean gorde ditzakezu. Honek denboraldi osoan zehar egin dituzun aurrerapenak gordetzen lagundu zaitzake. Ikusi argibideak orriaren behealdean."
		pastSaves = "Lehendik gordeta"
		instructions = "Argibideak"
		instructionsA = "Gordetze sistema erabiltzeko pausoak hauek dira:"
		instructionsB = '1. Hasi saioa zure Google kontuarekin. Beharbada "Aplikazio hau ez dago egiaztatua oharra jaso dezakezu. Hori gertatzen bada, klikatu "Aurreratua" eta orduan "FLL Zenbatzailera joan (ez segurua)"'
		instructionsC = '2. Lehenagotik ez baduzu kalkulu orri bat sortu klikatu "Sortu Kalkulu Orri Berria"'
		instructionsD = '3. Lehenagotik kalkulu orri bat sortu baduzu, ziurtatu zaitez kalkulu orriko ID eremua beteta dagoela eta ez "mugagabea". Orria beste gailu batzuekin partekatu nahi baduzu, identifikazio hori eskuz idatzi behar duzu.'
		instructionsE = '4. Puntuaketa bat gorde nahi duzun bakoitzean, klikatu "Gorde Puntuaketa" honek kalkulu orriak gaurkotuko ditu puntuazio eta data berriarekin.'
		instructionsF = '5. Zure kalkulu orria ikuskatu eta editatu nahi baduzu, sakatu "Zabaldu Google-ren Kalkulu Orriak". Uneren batean kalkulu orriaren ID-a behar baduzu, zure kalkulu orriaren URL-an aurkitu dezakezu.'
		instructionsG = '6. Aintzinako puntuazio jakin bat ere berreskuratu dezakezu zenbatzailean "+" eta "-" botoiekin gordetze zenbakia ipiniz eta gero "Kargatu Gordetakoa:" sakatuz'

		monthNames = ["", "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua",
			"Iraila", "Urria", "Azaroa", "Abendua"];
		improvementText = "Hobespena"
		scorerText = "Zenbatzailea"
		timersText = "Kronometroa"
		savesText = "Gordetakoak"
		startText = "Hasi"
		stopText = "Gelditu"
		pointsText = "Puntuak"

		systemText = "Gordetze sistema: "

		timerText = "Denbora zenbatzailea:"
		stopwatchText = "Kronografoa:"

		idText = "Google Orriaren ID-a: "
		undefinedText = "zehaztugabea "

		revisionText = "Zenbatzaile errebisioa CITY SHAPER"
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"

		title = "CITY SHAPER Zenbatzailea"

		missionNumbering = "M" // i.e. honela erakusten da: M01, M02, etc. ("Mission"-en lehenengo hizkia zure hizkuntzan)

		A00 = "Abantaila"
		A00a = "Ekipamendua inspekzio zona txikian sartzen da?"
		A00b = "5 puntu gehitzen dira 1-13 misioetara eta 5 gehiago M02era."

		M01 = "Pieza Garaiak"
		M01a = "Ba al dago errobota zubiarengatik <b>Eutsita</b>?"
		M01b = "Zenbat bandera daude nabarmen altxatuta bakarrik errobotari esker?"

		M02 = "Garabia"
		M02a = "Ba al dago zintzilikatuta dagoen modulu urdina nabarmen jaitsita edozein distantziara garabiaren zulotik?"
		M02b = "Ba al dago zintzilikatuta dagoen modulu urdina <b>Independientea</b> eta beste modulu urdin batengatik <b>Eutsita</b>?"
		M02c = "Ba al dago lehenengo maila guztiz zirkulu urdinaren barruan?"

		M03 = "Ikuskatzeko Drone-a"
		M03a = "Ba al dago ikuskatzeko drone-a (A) ardatzagatik <b>Eutsita</b> zubian?"

		M04 = "Faunarako Diseinua"
		M04a = "Ba al dago saguzarra (B) adarrarengatik <b>Eutsita</b> zuhaitzean?"

		M05 = "Zuhaitzeko Etxea"
		M05a = "Zenbat modulu dira <b>Independiente</b> eta Zuhaitzaren Adar Handiengatik <b>Eutsita</b> daude?"
		M05b = "Zenbat modulu dira <b>Independiente</b> eta Zuhaitzaren Adar Txikiengatik <b>Eutsita</b> daude?"

		M06 = "Trafiko Trabatzea"
		M06a = "Ba al dago Trafiko Trabatzea altxatuta eta bere parte mugikorra <b>Independientea</b> da eta bakarrik bere bandengatik <b>Eutsita</b>?"

		M07 = "Kulunka"
		M07a = "Askatuta al dago kulunka?"

		M08 = "Karga-jasogailua"
		M08a = "Ba al daude karga-jasogailuaren parte mugikorrak   <b>Independiente</b> eta bakarrik bere bandengatik <b>Eutsita</b> eta Kotxe Urdinaren posizioan daude behean?"
		M08b = "Ba al daude karga-jasogailuaren parte mugikorrak <b>Independiente</b> eta bakarrik bere bandengatik <b>Eutsita</b> eta Orekatze posizioan daude?"

		M09 = "Segurtasun Eragilea"
		M09a = "Zenbat laza bidetik kendu dira gutxienez bide erdirarte?"
		M09b = "Eraikin pilotua <b>Independientea</b> da eta laza urdinengatik bakarrik <b>Eutsita</b> dago"

		M10 = "Altzairu eraikuntza"
		M10a = "Ba al dago altzairuzko egitura altxatuta eta <b>Independientea</b> da eta bere bandengatik <b>Eutsita</b> dago?"

		M11 = "Arkitektura Berriztatzailea"
		M11a = "Egitura borobil baten barruan <b>Guztiz</b> sartuta dago?"
		M11b = "Egitura borobil baten barruan <b>Partzialki</b> sartuta dago?"
		M11c = "Egitura taldeak diseinatutakoa izan behar da eta modulu urdin bat baino handiagoa izan behar da. Hamargarren poltsako LEGO piezekin egindakoa izan behar da."

		M12 = "Diseinua eta Eraikuntza"
		M12a = "Zenbat zirkuluk dute gutxienez modulu bat zeinen koloreak zirkuluarekin bat egiten duten eta <b>Guztiz</b> barruan daude eta tapetearekin kontaktu planoan?"
		M12b = "Baldin eta multzo <b>Independienteak</b> badaude gutxienez <b>Partzialki</b> edozein zirkuluren barruan, zein da haien guztien altueraren batuketaren emaitza?"
		M12c = "Zirkulu urdina ez da hamabigarren misioaren parte. Multzo bat da noiz modulu batek edo gehiagok zeinen lehenengo mailak tapetea ukitzen duen era plano batean eta edozein goreneko maila lehenengo mailaren gainean era plano batean daudenean"

		M13 = "Iraunkortasun Gaurkotzea"
		M13a = "Zenbat gaurkotze (eguzki panelak, sabai berdeak, isolatzeak) daude <b>Independiente</b> eta edozein zirkuluren barruan (gutxienez partzialki) dagoen multzo batengatik <b>Eutsita</b>?"

		M14 = "Zehaztasuna"
		M14a = "Zenbat zehaztasun lekuko daude joko lurrazalean?"

	} else if (language == "ro") {
		translatorCredit = "Traducerea și adaptarea în limba română realizată de Ștefan RĂDULESCU @ Asociația pentru educație STEM creativă (CRESTEM). Copyright (c) " + versionYear + ". www.crestem.org"

		yes = "Da"
		no = "Nu"
		partly = "Parțial"
		completely = "Complet"
		resetText = "Resetați"
		saveText = "Salvați"
		savescoreText = "Salvați scorul"
		loadsaveText = "Încărcați scorul:"
		deletesaveText = "Ștergeți scorurile salvate"
		importsaveText = "Importați fișierul"
		exportsaveText = "Exportați fișierul"
		signin = "Conectați-vă cu"
		signout = "Deconectați-vă din"
		GoogleCreate = "Creați o foaie de calcul nouă"
		GoogleOpen = "Deschideți foaia de calcul Google"
		created = "Creat"
		savedto = "Salvat în"
		teamText = "Echipa"
		roundText = "Runda"
		dateText = "Data/Ora"
		totalText = "Total puncte"
		savedText = "Salvat"
		loadedText = "Încărcat"
		googleSaveText = "Foi de calcul Google (experimental)"
		localSaveText = "Stocare locală în browser (implicit)"
		isIE = "Sistemul Google de salvare este incompatibil cu Microsoft Internet Explorer. Puteți trece la un alt browser sau puteți continua utilizând sistemul de salvare vechi (selectați opțiunea mai sus)"

		googleIntro = "Puteți salva scorurile într-o foaie de calcul Google. Acest lucru vă va ajuta să urmăriți evoluția pe parcursul sezonului. Consultați instrucțiunile din partea de jos a paginii."
		pastSaves = "Salvări anterioare"
		instructions = "Instrucțiuni"
		instructionsA = "Pașii principali pentru utilizarea sistemului de salvare sunt:"
		instructionsB = '1. Conectați-vă la contul dvs. Google. Este posibil să primiți o avertizare "Această aplicație nu este verificată". Dacă da, faceți clic pe "Avansat" și apoi pe "Mergeți la Calculator scor FLL (nesigur)"'
		instructionsC = '2. Dacă nu ați creat o foaie de calcul în trecut - dați clic pe "Creați o foaie nouă"'
		instructionsD = '3. Dacă ați creat o foaie de calcul în trecut, asigurați-vă că ID-ul foii de calcul Google este completat și nu rămâne "nedefinit". Dacă doriți să partajați o foaie de calcul între dispozitive, trebuie să introduceți manual acest ID.'
		instructionsE = '4. De fiecare dată când doriți să salvați un scor, faceți clic pe "Salvați scorul" - astfel foaia de calcul va fi actualizată cu scorul și data curentă'
		instructionsF = '5. Dacă doriți să inspectați foaia de calcul și să o editați, faceți clic pe "Deschideți foaia de calcul Google". Dacă aveți vreodată nevoie de ID-ul foii de calcul Google – acesta se află în adresa URL a foii de calcul atunci când o deschideți.'
		instructionsG = '6. Puteți, de asemenea, să încărcați un anumit scor anterior în calculator de scor prin introducerea numărului salvării folosind butoanele "+" și "-" și apoi prin apăsarea butonului "Încărcați o salvare:" '

		var monthNames = ["", "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];
		improvementText = "Îmbunătățire"
		scorerText = "Calculator de scor"
		timersText = "Cronometre"
		savesText = "Salvări"
		startText = "Start"
		stopText = "Stop"
		pointsText = "Puncte"

		systemText = "Sistem de salvare: "

		timerText = "Temporizator:"
		stopwatchText = "Cronometru:"

		idText = "ID foaie de calcul Google: "
		undefinedText = "nedefinit"

		revisionText = "Calculator de scor CITY SHAPER. Versiunea "
		copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers"
		title = "Calculator de scor CITY SHAPER"

		missionNumbering = "M" // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)

		A00 = "Avantaj"
		A00a = "Robotul vostru și toate accesoriile / uneltele sale încap în ”zona mică de inspecție”?"
		A00b = "5 puncte adiționale la fiecare misiune (M01-M13) și 10 puncte adiționale la misiunea M02."

		M01 = "La înălțime"
		M01a = "Robotul este <b>susținut</b> de Pod?"
		M01b = " Câte steaguri sunt ridicate, în mod vizibil, pe orice distanță, doar de către robot"

		M02 = "Macara"
		M02a = "Blocul albastru cu cârlig este în mod vizibil coborât orice distanță față de gaura de ghidare?"
		M02b = "Blocul albastru cu cârlig este <b>independent</b> și <b>susținut</b> de către alt bloc albastru?"
		M02c = " Nivelul 1 este complet în cercul albastru?"

		M03 = "Drona de inspecție"
		M03a = "Drona de inspecție este <b>susținută</b> de axul(A) de pe pod?"

		M04 = "Proiectat pentru animale sălbatice"
		M04a = "Liliacul este <b>susținut</b> de ramura(B) copacului?"

		M05 = "Casa din copac"
		M05a = "Câte blocuri sunt <b>independente</b> și <b>susținute</b> de ramurile mari ale copacului?"
		M05b = "Câte blocuri sunt <b>independente</b> și <b>susținute</b> de ramurile mici ale copacului?"

		M06 = "Blocaj în trafic"
		M06a = "Blocajul în trafic este ridicat, cu partea mobilă <b>independentă</b> și <b>susținută</b> doar de propriile balamale?"

		M07 = "Leagăn"
		M07a = "Leagănul este eliberat?"

		M08 = "Ascensor"
		M08a = "Părțile mobile ale ascensorului sunt <b>independente</b> și <b>susținute</b> doar de propriile balamale, iar cabina albastră este jos?"
		M08b = "Părțile mobile ale ascensorului sunt <b>independente</b> și  <b>susținute</b> doar de propriile balamale, iar ascensorul se află în poziția de echilibru?"

		M09 = "Factor de siguranță"
		M09a = "Câte grinzi au fost lovite și coborâte cel puțin pe jumătate?"
		M09b = "Clădirea de test trebuie să fie <b>independentă</b> și <b>susținută</b> doar de grinzile albastre."

		M10 = "Construcție de oțel"
		M10a = "Structura de oțel este în picioare, fiind <b>independentă</b> și <b>susținută</b> doar de propriile balamale?"

		M11 = " Arhitectură inovatoare"
		M11a = "Structura este <b>complet</b> în oricare cerc?"
		M11b = "Structura este <b>parțial</b> în oricare cerc?"
		M11c = "Structură trebuie să fie concepută de echipa voastră și în mod evident mai mare decât un bloc albastru. Structura pentru misiunea 11 trebuie construită doar cu elementele din pachetul 10."

		M12 = "Proiectare & Construire"
		M12a = "Câte cercuri au cel puțin un bloc de aceeași culoare, <b>complet </b> în cerc, în contact direct și uniform cu planșa?"
		M12b = "Dacă există stive <b>independente</b> cel puțin <b>parțial</b> în oricare cerc, care este suma tuturor înălțimilor?"
		M12c = " Cercul albastru nu face parte din misiunea 12. O stivă este formată din unul sau mai multe blocuri, cu primul nivel atingând planșa direct și uniform. Următoarele niveluri ating direct și uniform nivelul inferior."

		M13 = "Îmbunătățiri pentru sustenabilitate"
		M13a = "Câte îmbunătățiri (panouri solare, grădină pe acoperiș, izolație) sunt <b>independente</b> și <b>susținute</b> de o stivă aflată, cel puțin parțial, în oricare dintre cercuri?"

		M14 = "Precizie"
		M14a = "Câte discuri de precizie au rămas pe teren?"

	}


	versionText = versionNum + " - " + versionDay + " " + monthNames[versionMonth] + " " + versionYear


	improvement = improvementText

	window.monthNames = monthNames
}

languageInit()
version = versionText
