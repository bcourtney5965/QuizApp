$(document).ready(function() {
    $("body").append('<p>If you\'re reading this - jQuery is connected.</p>');

    // Global Variables
    var questionTitle = "Select who created the album:";
    var currQuestionNumber = 0;
    var currScore = 0;
    var output;

    var questions = [
        {
            album: "461 Ocean Boulevard",
            options:    [
            			    {
            			        artist: "Buffalo Springfield", 
            			        correct: false
            			    }, 
            			    {
            			        artist: "The Allman Brother Band", 
            			        correct: false
            			    }, 
            			    {
            			        artist: "Eric Clapton",
            			        correct: true
            			    }, 
            			    {
            			        artist: "Elvis Presley", 
            			        correct: false
            			    }
                        ]
        },
        {
            album: "The Wall",
            options: 	[
            				{
            					artist: "Nirvana",
            					correct: false
            				},
            				{
            					artist: "Pink Floyd",
            					correct: true
            				},
            				{
            					artist: "Ramones",
            					correct: false
            				},
            				{
            					artist: "Van Morrison",
            					correct: false
            				}
            			]
        },
        {
        	album: "Beggars Banquet",
        	options: 	[
        					{
        						artist: "Bob Dylan",
        						correct: false
        					},
        					{
        					 	artist: "Stevie Wonder",
        						correct: false
        					},
        					{
        					 	artist: "James Brown",
        						correct: false
        					},
        					{
        					 	artist: "The Rolling Stones",
        					 	correct: true
        					}    
        				]
        },
        {
        	album: "Electric Ladyland",
        	options: 	[
        					{
        						artist: "Led Zeppelin",
        						correct: false
        					},
        					{
        					 	artist: "Fleetwood Mac",
        						correct: false
        					},
        					{
        					 	artist: "The Who",
        						correct: false
        					},
        					{
        					 	artist: "The Jimi Hendrix Experience",
        					 	correct: true
        					}
        				]
        },
        {
        	album: "Born to Run",
        	options: 	[
        					{
        						artist: "Bruce Springsteen",
        						correct: true
        					},
        					{
        					 	artist: "AC/DC",
        						correct: false
        					},
        					{
        					 	artist: "The Beatles",
        						correct: false
        					},
        					{
        					 	artist: "David Bowie",
        					 	correct: false
        					}
        				]
        }
    ];

    output = '<span id="questionTitle">' + questionTitle + '</span>';
    // Current Question Number
    output += '<h3 id="question-number">Question: ' + currQuestionNumber + '/5</h3>';
    // // Current Score
    output += '<h3 id="score">Current Score: ' + currScore + '/2</h3>';
    // Button
    output += '<input id="submit" type="submit" value="Submit">';
    $("body").append(output);

	$.each(questions, function(indexQ, question) {
        var append;
		// append
			// Question
            append = '<div id="question-' + indexQ + '">';
			// Album
            append += '<h3 class="album">' + question["album"] + '</h3>';
            
		$.each(question["options"], function (indexO, option) {
			// append
				// artist choices
                append += '<div class="answer-wrapper">';
                append += '<input type="radio" name="option" class="option" value="' + indexO + '">';
                append += '<span class="answer">' + option["artist"] + '</span>';
		        append += '</div>';  
        });
             // Appending
            append += '</div>';
            $("body").append(append);
	});
    $.each(questions, function(indexQ, question) {
        if (indexQ !== 0) {         
            var selector;
            selector = '#question-' + indexQ;
            $(selector).hide();
        }
    });
});





