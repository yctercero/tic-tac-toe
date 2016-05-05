

	var tictactoe = {
		//board: document.getElementById("board"),

		//cells: board.getElementsByTagName("td"),

		gather: function(){  //creating method gather
			var board = document.getElementById("board");
			var cells = board.getElementsByTagName("td");
			//var that = this; --> could do this or just use tictactoe.whoseTurn, tictactoe.etc.. below; in other words, 'this' here is refering to tictactoe
			for (var i = 0; i < cells.length; i+=1){
				cells[i].onclick = function() {
					this.innerHTML = tictactoe.whoseTurn; //Adds 'X' or 'O' to board
					this.onclick = null; //disabling the function for that specific cell after it's clicked
					tictactoe.didSomeoneWin();
					tictactoe.switchTurn(); //switch turns X <-> O
					console.log(tictactoe.whoseTurn);
				}
				
			}
		},

		whoseTurn: "X",

		switchTurn: function(){
			var xFull = document.getElementById("xFull");
			var oFull = document.getElementById("oFull");
			if (this.whoseTurn == "X") {
				oFull.style.color = "#32CF29";
				xFull.style.color = "red";
				this.whoseTurn = "O";
			} else {
				this.whoseTurn = "X";
				xFull.style.color = "#32CF29";
				oFull.style.color = "red";


			}
		},

		didSomeoneWin: function(){
			var board = document.getElementById("board");
			var cells = board.getElementsByTagName("td");

			var check = function(c1, c2, c3){
				var allSame = ((cells[c1].innerHTML == cells[c2].innerHTML) && (cells[c2].innerHTML == cells[c3].innerHTML));
				var thereIsAnX = (cells[c1].innerHTML == "X");
				var thereIsAnO = (cells[c1].innerHTML == "O");
				if (allSame && thereIsAnX) {
					alert("'X' is the winner.");

				} else if (allSame && thereIsAnO) {
					alert("'O' is the winner.");
				}
			}

			check(0, 1, 2);
			check(3, 4, 5);
			check(6, 7, 8);
			check(0, 3, 6);
			check(1, 4, 7);
			check(2, 5, 8);
			check(0, 4, 8);
			check(2, 4, 6);

			
		},

		newGame: function(){
			var button = document.getElementById("button");
			button.onclick = function() {
				var board = document.getElementById("board");
				var cells = board.getElementsByTagName("td");
				var xFull = document.getElementById("xFull");
				var oFull = document.getElementById("oFull");
				oFull.style.color = "red";
				xFull.style.color = "green";
				for (var i = 0; i < cells.length; i+=1){
					cells[i].innerHTML = "";
					cells[i].onclick = null;
				}
				tictactoe.whoseTurn = "X";
				tictactoe.gather();
			}
		}

	};
	tictactoe.newGame();
	tictactoe.gather(); //have to call method gather for it to do it's thing

