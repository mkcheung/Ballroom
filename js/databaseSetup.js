html5sql.openDatabase("com.example.ballroom", "Ballroom Database", 3*1024*1024);



function checkDB(){
	html5sql.process(
		[
		 	"CREATE TABLE if not exists dance (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists danceLevel (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists routines (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists stepsInRoutine (id INTEGER PRIMARY KEY, routine_id INTEGER, step_id INTEGER, name TEXT);",
		 	"CREATE TABLE if not exists steps (id INTEGER PRIMARY KEY, danceId INTEGER, danceLevelId INTEGER, name TEXT);",
		 	"CREATE TABLE if not exists followUpSteps (id INTEGER PRIMARY KEY, stepId INTEGER, followUpStepId INTEGER);"
		],
		function (transaction, results, rowsArray){
				//alert('Data loading into the database!');
				populateTheDatabase();
		},
		handleError);	
}

function populateTheDatabase(){
	html5sql.process(
		[
		 	"INSERT INTO dance (name) VALUES ('Waltz');",
		 	"INSERT INTO dance (name) VALUES ('Tango');",
		 	"INSERT INTO dance (name) VALUES ('Viennese Waltz');",
		 	"INSERT INTO dance (name) VALUES ('Foxtrot');",
		 	"INSERT INTO dance (name) VALUES ('Quickstep');",
		 	"INSERT INTO danceLevel (name) VALUES ('Pre-Bronze/Student Teacher');",
		 	"INSERT INTO danceLevel (name) VALUES ('Bronze/Associate');",
		 	"INSERT INTO danceLevel (name) VALUES ('Silver/Licentiate');",
		 	"INSERT INTO danceLevel (name) VALUES ('Gold/Fellow');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 1, 'Closed Changes');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 1, 'Natural Turn');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 1, 'Reverse Turn');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 1, 'Natural Spin Turn');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 1, 'Whisk');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Chasse from Promenade Position');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Closed Impetus');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Hesitation Change');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Outside Change');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Reverse Corte');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Back Whisk');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Basic Weave');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Double Reverse Spin');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Reverse Pivot');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Back Lock');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (1, 2, 'Progressive Chasse to Right');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'Reverse Turn');", //17
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, '1-3 Reverse Turn');", //18
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, '4-6 Reverse Turn');", // 19
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'Natural Turn');", // 20
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, '1-3 Natural Turn');", //21
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, '4-6 Natural Turn');", // 22
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'RF Forward Change Step');", // 23
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'LF Forward Change Step');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'RF Backward Change Step');",
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'LF Backward Change Step');",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 24);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 17);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 18);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (18, 25);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 23);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 21);",
		 	"SELECT * FROM steps;"
			],
			function (transaction, results, rowsArray){
				//alert(rowsArray.length);
				for(i=0; i < rowsArray.length; i++){
					alert(rowsArray[i].name);
				}
			},
			handleError);
	}

function dropDB()
{
	html5sql.process(
		[
		"DROP TABLE if exists dance;",
	 	"DROP TABLE if exists danceLevel;",
	 	"DROP TABLE if exists steps;",
	 	"DROP TABLE if exists followUpSteps;",
	 	"DROP TABLE if exists stepsInRoutine",
	 	"DROP TABLE if exists routines;"
	],
	function(){
		alert('All tables have been dropped.');
		},
		handleError
	);
}

function nameRoutine(nameOfNewRoutine){
	html5sql.process(
		[
		 	"INSERT INTO routines (name) VALUES ('" + nameOfNewRoutine + "');",
		 	"SELECT last_insert_rowid() as lastIndex;"
		],
		function(transaction, results, rowsArray){
	//				alert(results);
	//				alert(rowsArray.length);
	//				alert(typeof rowsArray[0].lastIndex);
	//				alert(rowsArray[0].lastIndex);
			if(rowsArray.length >= 1){
				//localStorage.newRoutineIndex = rowsArray[0].lastIndex;
				localStorage.setItem('newRoutineIndex', rowsArray[0].lastIndex);
			}
		},
		handleError
	);
}

function newRoutine(danceId, danceLevelId, stepListId){
	//var danceId = localStorage.danceId;
	//var danceLevelId = localStorage.danceLevelId;
	
	html5sql.process(
		[
		 	"SELECT * FROM steps WHERE danceId = '" + danceId + "' AND danceLevelId = '" + danceLevelId + "';"
		],
		function(transaction, results, rowsArray){
			//alert("SELECT * FROM steps WHERE danceId = '" + danceId + "' AND danceLevelId = '" + danceLevelId + "'");
			//alert(danceId);
			//alert(danceLevelId);
			if(rowsArray.length > 1){
				var html = '';
				for (var i=0; i < rowsArray.length; i++){
					var id = rowsArray[i].id;
					var name = rowsArray[i].name;
					html += '<li data-stepid="' + id + '">' + name + '</li>';
				}
				$(stepListId).append($(html));
				$(stepListId).listview('refresh');
			}
		},
		handleError
	);
}

function addToRoutine(routineId, stepId, stepOptionsList){
	var lastStepIdAdded; 
	var followUpIdCsv = '';
	var sample = '' ;
	html5sql.process(
		[
		 	"INSERT INTO stepsInRoutine (routine_id, step_id) VALUES ('" + routineId  + "', '" + stepId + "');",
			"SELECT * FROM followUpSteps WHERE stepId = '" + stepId + "';"
		],
		function(transaction, results, rowsArray){
			//alert("SELECT * FROM followUpSteps WHERE stepId = '" + stepId + "'");
			//alert(rowsArray.toString());
			//localStorage.removeItem('followUpCsv');
			//alert(localStorage.followUpCsv);
			if(rowsArray.length >= 1){
				for(var i=0; i<rowsArray.length; i++){
					//alert(rowsArray[i].followUpStepId);
					if(i != (rowsArray.length - 1)){
						followUpIdCsv += "'" + rowsArray[i].followUpStepId + "',";		
					} else {
						followUpIdCsv += "'" + rowsArray[i].followUpStepId + "'";	
					}
				}
				//localStorage.followUpCsv = followUpIdCsv;
				displayFollowUpSteps(followUpIdCsv, stepOptionsList)
			}
		},
		handleError
	);
}

function displayFollowUpSteps(followUpIdCsv, stepListId){
	html5sql.process(
		[
		 	"SELECT * FROM steps WHERE id IN (" + followUpIdCsv + ");"
		],
		function(transaction, results, rowsArray){
			//alert("SELECT * FROM steps WHERE id IN (" + followUpIdCsv + ")");
			if(rowsArray.length >= 1){
				var html = '';
				for (var i=0; i < rowsArray.length; i++){
					var id = rowsArray[i].id;
					var name = rowsArray[i].name;
					html += '<li data-stepid="' + id + '">' + name + '</li>';
				}
				//alert(html);
				$(stepListId).empty();
				$(stepListId).append($(html));
				$(stepListId).listview('refresh');
			}
		},
		handleError
	);
}


function showStepsInRoutine(routineId, listToDisplaySteps){
	html5sql.process(
		[
		 	"SELECT s.name, sir.routine_id FROM stepsInRoutine sir JOIN steps s ON sir.step_id = s.id WHERE sir.routine_id = '" + routineId + "';"
		],
		function(transaction, results, rowsArray){
			var html = ''; 
			if(rowsArray.length >= 1){
				for (var i=0; i < rowsArray.length; i++){
					//alert(rowsArray[i].routine_id + ' ' + rowsArray[i].name);
					html += '<li>' + rowsArray[i].name + '</li>';
				}
				$(listToDisplaySteps).empty();
				$(listToDisplaySteps).append(html);
				$(listToDisplaySteps).listview('refresh');
			}
		},
		handleError
	);
}

function listRoutines(routineList){
	alert(routineList);
	html5sql.process(
		[
		 	"SELECT * FROM routines;"
		],
		function(transaction, results, rowsArray){
			var html = '';
			if(rowsArray.length >= 1){
				for (var i=0; i < rowsArray.length; i++){
					html += '<li id="' + rowsArray[i].id + '">' + rowsArray[i].name + '</li>';
				}
				$(routineList).empty();
				$(routineList).append($(html));
				$(routineList).listview('refresh');
			}
		},
		handleError
	);
}

function handleError(){
	alert('error');
}
