$(document).ready(function() {
    $("body").append('<p>If you\'re reading this - jQuery is connected.</p>');

    // Global Variables
    var question = "Select who created the album:";
    var currQuestionNumber = 0;
    var currScore = 0;
    var question_number = [1, 2, 3, 4, 5];
    var score = [1, 2, 3, 4, 5];

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

	$.each(questions, function( item ) {
		// append
			// Question
			$("body").append("<span id=\"question\">" + question + "</span>");
			// // Current Question Number
			$("body").append("<h3 id=\"question-number\">" + "Question: " + currQuestionNumber + "/5" + "</h3>");
			// // Current Score
			$("body").append("<h3 id=\"score\">" + "Current Score: " + currScore + "/2" + "</h3>");
            // Button
            $("body").append("<input id=\"submit\" type=\"submit\" value=\"Submit\">");
			// Album
            $("body").append("<span id=\"album\">" + item["album"] + "</span>");

		$.each(item["options"], function ( option ) {
			// append
				// artist choices
                $("body").append("<input type=\"radio\" name=\"option\" class=\"option\" value=\"0\"><span class=\"answer\">option["artist"]</span>")

		})
	})



});





