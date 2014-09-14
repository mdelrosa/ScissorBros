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

	// Define vectors
	this.vectors = [];
	for (i=0; i<letters.length;i++) {
		var x, y;
		print(letters[i].name);
		for (j=0; j<= letters[i].nodes.length; j++) {

			// x = widthScale*(next node%3 - current node%3)
			// y = heightScale*(next node/3 - current node/3)
			// magnitude = L2 Norm of x and y
			// theta = arctan(y/x)
			if (j < letters[i].nodes.length-1) {
				x = widthScale*(letters[i].nodes[j+1]%3 - letters[i].nodes[j]%3 );
				print("j: ",j)
				y = heightScale*(Math.floor(letters[i].nodes[j+1]/3) - Math.floor(letters[i].nodes[j]/3));
				// mag = Math.sqrt(x^2 + y^2);
				// theta = Math.atan2(y,x);
				print("x:", x, "y:",y);
				this.vectors.push({x: x, y: y});
			}
			else if (j === letters[i].nodes.length-1 && i < letters.length-1) {
				this.vectors.push("OFF");
				x = widthScale*((letters[i+1].nodes[0]%3)+(2-letters[i].nodes[j]%3)+1);
				y = heightScale*(Math.floor(letters[i+1].nodes[0]/3)-Math.floor(letters[i].nodes[j]/3));
				print("NEXT LETTER");
				print("x:", x, "y:", y);
				this.vectors.push({x: x, y: y});
				this.vectors.push("ON");
			}
		}
	// print(this.vectors);
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

print(drawing.vectors);