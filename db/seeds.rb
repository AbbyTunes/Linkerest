# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require 'open-uri'
# ​
# Pin.create({ authorId: 5, title: "pin22", description: "pin22", link: "www.pinterest.com" }
# file = open('https://linkerest-dev.s3-us-west-2.amazonaws.com/8spn4iMGtwgqyWtn9tNok47W')
# #('the/url/where/the/pin/is/hosted')
# pin.photo.attach(io: file, filename: "some_filename")



pins = Pin.create([
	{ authorId: 1, title: "pin2", description: "pin2", link: "www.pinterest.com" }, 
	{ authorId: 2, title: "pin3", description: "pin3", link: "www.pinterest.com" }, 
	{ authorId: 3, title: "pin4", description: "pin4", link: "www.pinterest.com" }, 
	{ authorId: 4, title: "pin5", description: "pin5", link: "www.pinterest.com" }, 
	{ authorId: 5, title: "pin6", description: "pin6", link: "www.pinterest.com" }, 
	{ authorId: 1, title: "pin7", description: "pin7", link: "www.pinterest.com" }, 
	{ authorId: 2, title: "pin8", description: "pin8", link: "www.pinterest.com" }, 
	{ authorId: 3, title: "pin9", description: "pin9", link: "www.pinterest.com" }, 
	{ authorId: 4, title: "pin10", description: "pin10", link: "www.pinterest.com" }, 
	{ authorId: 5, title: "pin11", description: "pin11", link: "www.pinterest.com" }, 
	{ authorId: 1, title: "pin12", description: "pin12", link: "www.pinterest.com" }, 
	{ authorId: 2, title: "pin13", description: "pin13", link: "www.pinterest.com" }, 
	{ authorId: 3, title: "pin14", description: "pin14", link: "www.pinterest.com" }, 
	{ authorId: 4, title: "pin15", description: "pin15", link: "www.pinterest.com" }, 
	{ authorId: 5, title: "pin16", description: "pin16", link: "www.pinterest.com" }
]);

pins2 = Pin.create([
	{ authorId: 1, title: "pin17", description: "pin17", link: "www.pinterest.com" }, 
	{ authorId: 2, title: "pin18", description: "pin18", link: "www.pinterest.com" }, 
	{ authorId: 3, title: "pin19", description: "pin19", link: "www.pinterest.com" }, 
	{ authorId: 4, title: "pin20", description: "pin20", link: "www.pinterest.com" }, 
	{ authorId: 5, title: "pin21", description: "pin21", link: "www.pinterest.com" }
]);

board = Board.create([ 
	{ authorId: 5, title: "board1", description: "board1", isPrivate: false}, 
	{ authorId: 5, title: "board2", description: "board2", isPrivate: false},
	{ authorId: 5, title: "board4", description: "board4", isPrivate: false}, 
	{ authorId: 5, title: "board3", description: "board3", isPrivate: false}
]);

boardPin = BoardPin.create([
	{ boardId: 1, pinId: 11 },
	{ boardId: 1, pinId: 13 },
	{ boardId: 2, pinId: 10 },
	{ boardId: 2, pinId: 9 },
	{ boardId: 3, pinId: 4 },
	{ boardId: 3, pinId: 15 },
	{ boardId: 3, pinId: 12 },
	{ boardId: 4, pinId: 2 },
	{ boardId: 4, pinId: 6 }
]);
