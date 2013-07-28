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
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'LF Forward Change Step');", // 23
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'RF Forward Change Step');", //24
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'LF Backward Change Step');", //25
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 1, 'RF Backward Change Step');", //26
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 2, 'Reverse Fleckerl');", //27
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 2, '1-3 Reverse Fleckerl');", //28
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 3, 'Natural Fleckerl');", //29
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 3, '1-3 Natural Fleckerl');", //30
		 	"INSERT INTO steps (danceId, danceLevelId, name) VALUES (3, 3, 'Contra Check');", //31
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 23);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 17);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 18);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 27);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 28);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (17, 31);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (18, 25);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 23);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 17);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 18);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 27);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 28);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (19, 31);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (20, 24);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (20, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (20, 21);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (20, 29);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (20, 31);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (21, 25);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (22, 24);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (22, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (22, 21);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (22, 29);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (22, 31);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (23, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (23, 21);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (24, 17);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (24, 18);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (25, 19);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (26, 22);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (27, 31);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (27, 17);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (27, 18);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (27, 27);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (27, 28);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (28, 19);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (29, 29);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (29, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (29, 21);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (30, 22);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (31, 29);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (31, 20);",
		 	"INSERT INTO followUpSteps (stepId, followUpStepId) VALUES (31, 21);",
		 	"SELECT * FROM steps;"
			],
			function (transaction, results, rowsArray){
				//alert(rowsArray.length);
				for(i=0; i < rowsArray.length; i++){
					//alert(rowsArray[i].name);
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

function newRoutine(danceId, stepListId){
	//var danceId = localStorage.danceId;
	//var danceLevelId = localStorage.danceLevelId;
	
	html5sql.process(
		[
		 	"SELECT * FROM steps WHERE danceId = '" + danceId + "';"
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
					var danceLevelId = rowsArray[i].danceLevelId;
					if((bronze == 1) && (danceLevelId == 1)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((bronze == 0) && (danceLevelId == 1)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					} else if ((silver == 1) && (danceLevelId == 2)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((silver == 0) && (danceLevelId == 2)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					} else if ((gold == 1) && (danceLevelId == 3)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((gold == 0) && (danceLevelId == 3)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					}
				}
				//alert(bronze);
				$(stepListId).empty();
				$(stepListId).append($(html));
				$(stepListId).listview('refresh');
			}
		},
		handleError
	);
}

function addToRoutine(routineId, stepId, stepOptionsList){
	console.log('h1');
	var lastStepIdAdded; 
	var followUpIdCsv = '';
	var sample = '' ;
	html5sql.process(
		[
		 	"INSERT INTO stepsInRoutine (routine_id, step_id) VALUES ('" + routineId  + "', '" + stepId + "');",
			"SELECT * FROM followUpSteps WHERE stepId = '" + stepId + "';"
		],
		function(transaction, results, rowsArray){
			if(rowsArray.length >= 1){
				for(var i=0; i<rowsArray.length; i++){
					//alert(rowsArray[i].followUpStepId);
					if(i != (rowsArray.length - 1)){
						followUpIdCsv += "'" + rowsArray[i].followUpStepId + "',";		
					} else {
						followUpIdCsv += "'" + rowsArray[i].followUpStepId + "'";	
					}
				}
				displayFollowUpSteps(followUpIdCsv, stepOptionsList)
			}
		},
		handleError
	);
}

function deleteRoutineStep(routineId, stepInRoutineId, stepOptionsList, stepId, danceId){
	var followUpIdCsv = '';

	if(stepId){
		console.log(routineId);
		console.log(stepInRoutineId);
		console.log(stepOptionsList);
		console.log(stepId);
		console.log(danceId);
		
		html5sql.process(
			[
			 	"DELETE FROM stepsInRoutine WHERE routine_id = '" + routineId  + "' AND id =  '" + stepInRoutineId + "';",
				"SELECT * FROM followUpSteps WHERE stepId = '" + stepId + "';"
			],
			function(transaction, results, rowsArray){
				if(rowsArray.length >= 1){
					for(var i=0; i<rowsArray.length; i++){
						if(i != (rowsArray.length - 1)){
							followUpIdCsv += "'" + rowsArray[i].followUpStepId + "',";		
						} else {
							followUpIdCsv += "'" + rowsArray[i].followUpStepId + "'";	
						}
					}
					displayFollowUpSteps(followUpIdCsv, stepOptionsList);
				}
			},
			handleError
		);
	} else {
		html5sql.process(
			[
			 	"DELETE FROM stepsInRoutine WHERE routine_id = '" + routineId  + "' AND id =  '" + stepInRoutineId + "';"
			],
			function(transaction, results, rowsArray){
				newRoutine(danceId, stepOptionsList);
			},
			handleError
		);	
	}
}

function displayFollowUpSteps(followUpIdCsv, stepListId){
	html5sql.process(
		[
		 	"SELECT * FROM steps WHERE id IN (" + followUpIdCsv + ");"
		],
		function(transaction, results, rowsArray){
			console.log(followUpIdCsv);
			console.log(stepListId);
			console.log("SELECT * FROM steps WHERE id IN (" + followUpIdCsv + ")");
			if(rowsArray.length >= 1){
				var html = '';
				for (var i=0; i < rowsArray.length; i++){
					var id = rowsArray[i].id;
					var name = rowsArray[i].name;
					var danceLevelId = rowsArray[i].danceLevelId;
					if((bronze == 1) && (danceLevelId == 1)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((bronze == 0) && (danceLevelId == 1)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					} else if ((silver == 1) && (danceLevelId == 2)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((silver == 0) && (danceLevelId == 2)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					} else if ((gold == 1) && (danceLevelId == 3)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '">' + name + '</li>';
					} else if ((gold == 0) && (danceLevelId == 3)){
						html += '<li data-stepid="' + id + '" data-danceLevelId="' + danceLevelId + '" style="display:none">' + name + '</li>';
					}
				}
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
		 	"SELECT s.name, sir.step_id, sir.routine_id, sir.id, s.danceId FROM stepsInRoutine sir JOIN steps s ON sir.step_id = s.id WHERE sir.routine_id = '" + routineId + "';"
		],
		function(transaction, results, rowsArray){
			var html = ''; 
			if(rowsArray.length >= 1){
				for (var i=0; i < rowsArray.length; i++){
					//alert(rowsArray[i].routine_id + ' ' + rowsArray[i].name);
					html += '<li data-step_id="' + rowsArray[i].step_id + '" data-dance_id="' + rowsArray[i].danceId + '" data-routine_id="' + rowsArray[i].routine_id + '" data-stepInRoutineId="' + rowsArray[i].id + '">' + rowsArray[i].name + '</li>';
				}
				$(listToDisplaySteps).empty();
				$(listToDisplaySteps).append(html);
				$(listToDisplaySteps).listview('refresh');
			} else {
				$(listToDisplaySteps).empty();
			}
		},
		handleError
	);
}

function listRoutines(routineList){
	//alert(routineList);
	html5sql.process(
		[
		 	"SELECT * FROM routines;"
		],
		function(transaction, results, rowsArray){
			var html = '';
			if(rowsArray.length >= 1){
				for (var i=0; i < rowsArray.length; i++){
					html += '<li id="' + rowsArray[i].id + '"><a href="#"></a>' 
					+ rowsArray[i].name 
					+ ' <a href="#routineDelete_popup" class="routineListing_deleteButton" data-delete_routine_id="' + rowsArray[i].id + '" data-rel="popup" data-position-to="window" data-transition="pop"></a>'
					+ '</li>';
				}
				console.log(html);
				$(routineList).empty();
				$(routineList).append($(html));
				$(routineList).listview('refresh');
			}
		},
		handleError
	);
}

function deleteRoutine(routineId){
	//alert(routineList);
	html5sql.process(
		[
		 	"DELETE FROM routines WHERE id = '" + routineId  + "';",
			"SELECT * FROM routines;"
		],
		function(transaction, results, rowsArray){
			var html = '';
			if(rowsArray.length >= 1){
				for (var i=0; i < rowsArray.length; i++){
					html += '<li id="' + rowsArray[i].id + '"><a href="#"></a>' 
					+ rowsArray[i].name 
					+ ' <a href="#routineDelete_popup" class="routineListing_deleteButton" data-delete_routine_id="' + rowsArray[i].id + '" data-rel="popup" data-position-to="window" data-transition="pop"></a>'
					+ '</li>';
				}
				$('#listOfAllRoutines').empty();
				$('#listOfAllRoutines').append($(html));
				$('#listOfAllRoutines').listview('refresh');
			}
		},
		handleError
	);
}


function initialize(){
	html5sql.process(
		[
		 	"CREATE TABLE if not exists dance (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists danceLevel (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists routines (id INTEGER PRIMARY KEY, name TEXT);",
		 	"CREATE TABLE if not exists stepsInRoutine (id INTEGER PRIMARY KEY, routine_id INTEGER, step_id INTEGER, name TEXT);",
		 	"CREATE TABLE if not exists steps (id INTEGER PRIMARY KEY, danceId INTEGER, danceLevelId INTEGER, name TEXT);",
		 	"CREATE TABLE if not exists followUpSteps (id INTEGER PRIMARY KEY, stepId INTEGER, followUpStepId INTEGER);",
		 	"SELECT * FROM steps;"
		],
		function (transaction, results, rowsArray){
				if(rowsArray.length == 0){
					populateTheDatabase();
				}
		},
		handleError);	
}

function handleError(){
	alert('error');
}
