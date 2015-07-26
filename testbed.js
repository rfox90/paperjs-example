if (Meteor.isClient) {

	Template.canvas.onRendered(function(){
		 var canvas = document.getElementById('framePreview');
        // Create an empty project and a view for the canvas:
        paper.setup(canvas);
        // Create a Paper.js Path to draw a line into it:
        var path = new paper.Path();
        // Give the stroke a color
        path.strokeColor = 'black';
        var start = new paper.Point(100, 100);
        // Move to start and draw a line from there
        path.moveTo(start);
        // Note that the plus operator on Point objects does not work
        // in JavaScript. Instead, we need to call the add() function:
        path.lineTo(start.add([ 200, -50 ]));
        // Draw the view now:
        paper.view.draw();
	});

	Template.canvas2.onRendered(function(){
		 var canvas = document.getElementById('framePreview2');
		 var paper2 = new paper.PaperScope();
        // Create an empty project and a view for the canvas:
        paper2.setup(canvas);
        // Create a Paper.js Path to draw a line into it:
        var path = new paper2.Path();
        // Give the stroke a color
        path.strokeColor = 'red';
        var start = new paper2.Point(100, 100);
        // Move to start and draw a line from there
        path.moveTo(start);
        // Note that the plus operator on Point objects does not work
        // in JavaScript. Instead, we need to call the add() function:
        path.lineTo(start.add([ 200, -50 ]));
        // Draw the view now:
        paper2.view.draw();
	})
}

if (Meteor.isServer) {
	
}


