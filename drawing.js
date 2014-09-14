// drawing.js
//  JS quadcopter drawing for PennApps Calligracopter

function Drawing(letters, widthScale, heightScale) {
	// widthScale gives a scaling factor for the x movement of copter
	// heightScale gives a scaling factor for vertical movement of copter
	// this.letters contains letter objects in letters

	this.letters=[];
	if (letters.length === 1) {
		this.letters.push(letters);
	}
	else {
		for (i=0;i<=letters.length;i++) {
			this.letters.push(letters[i]);
		}
	}

	var X = 0, Y = 3;

	// Define vectors
	this.vectors = [];
	for (i=0; i<letters.length;i++) {
		var x, y;
		var letter = letters[i]
		var lnodes = letter.nodes
		console.log(letter.name);
		for (j=0; j<= lnodes.length; j++) {

			if (j < lnodes.length-1) {
				x = widthScale*(lnodes[j+1]%3 - lnodes[j]%3);
				X += x
				console.log("j: ",j)
				y = heightScale*(Math.floor(lnodes[j+1]/3) - Math.floor(lnodes[j]/3));
				Y -= y
				// console.log("x:", x, "y:",y);
				console.log("X:", X, "Y:", Y);
				this.vectors.push({x: x, y: y});
			}
			else if (j === lnodes.length-1 && i < letters.length-1) {
				this.vectors.push("OFF");
				x = widthScale*((letters[i+1].nodes[0]%3)+(2-lnodes[j]%3)+1);
				X += x
				y = heightScale*(Math.floor(letters[i+1].nodes[0]/3)-Math.floor(lnodes[j]/3));
				Y -= y
				console.log("NEXT LETTER");
				console.log("X:", X, "Y:", Y);
				// console.log("x:", x, "y:", y);
				this.vectors.push({x: x, y: y});
				this.vectors.push("ON");
			}
		}
	// console.log(this.vectors);
	}
	this.vectors.push("STOP");
}

function Letter(nodes, name) {
	// nodes non-dimensional locations in xy plane for copter to travel between
	// Nodes composing a letter:
	// 		0 1 2
	// 		3 4 5
	// 		6 7 8	
	this.nodes = nodes;
	this.name = name;
}

var nodes1 = new Array(0,6,3,5,2,8);
var nodes2 = new Array(0,2,0,3,5,3,6,8);
var Onodes = new Array(0,6,8,2,0);
var Lnodes = new Array(0,6,8);
var Inodes = new Array(0,2,1,7,6,8);
var Nnodes = new Array(6,0,8,2);
var letterO = new Letter(Onodes, "O")
var letterL = new Letter(Lnodes, "L")
var letterI = new Letter(Inodes, "I")
var letterN = new Letter(Nnodes, "N")
var drawing = new Drawing([letterO, letterL, letterI, letterN], 1.0, 1.5);

console.log(drawing.vectors);