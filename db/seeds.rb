# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

BoardPin.destroy_all
Pin.destroy_all
Board.destroy_all
User.destroy_all

user1 = User.create({ username: "name_1", password: "name_1" })
user2 = User.create({ username: "name_2", password: "name_2" })
user3 = User.create({ username: "name_3", password: "name_3" })

pin1 = Pin.create({ authorId: user1.id, title: "pin1", description: "pin1", link: "www.pinterest.com" })
file1 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed1.jpg')
pin1.photo.attach(io: file1, filename: "seed1")

pin2 = Pin.create({ authorId: user2.id, title: "pin2", description: "pin2", link: "www.pinterest.com" })
file2 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed2.jpg')
pin2.photo.attach(io: file2, filename: "seed2")

pin3 = Pin.create({ authorId: user3.id, title: "pin3", description: "pin3", link: "www.pinterest.com" })
file3 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed3.jpg')
pin3.photo.attach(io: file3, filename: "seed3")

pin4 = Pin.create({ authorId: user1.id, title: "pin4", description: "pin4", link: "www.pinterest.com" })
file4 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed4.jpg')
pin4.photo.attach(io: file4, filename: "seed4")

pin5 = Pin.create({ authorId: user2.id, title: "pin5", description: "pin5", link: "www.pinterest.com" })
file5 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed5.jpg')
pin5.photo.attach(io: file5, filename: "seed5")

pin6 = Pin.create({ authorId: user3.id, title: "pin6", description: "pin6", link: "www.pinterest.com" })
file6 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed6.jpg')
pin6.photo.attach(io: file6, filename: "seed6")

pin7 = Pin.create({ authorId: user1.id, title: "pin7", description: "pin7", link: "www.pinterest.com" })
file7 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed7.jpg')
pin7.photo.attach(io: file7, filename: "seed7")

pin8 = Pin.create({ authorId: user2.id, title: "pin8", description: "pin8", link: "www.pinterest.com" })
file8 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed8.jpg')
pin8.photo.attach(io: file8, filename: "seed8")

pin9 = Pin.create({ authorId: user3.id, title: "pin9", description: "pin9", link: "www.pinterest.com" })
file9 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed9.jpg')
pin9.photo.attach(io: file9, filename: "seed9")

pin10 = Pin.create({ authorId: user1.id, title: "pin10", description: "pin10", link: "www.pinterest.com" })
file10 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed10.jpg')
pin10.photo.attach(io: file10, filename: "seed10")

pin11 = Pin.create({ authorId: user2.id, title: "pin11", description: "pin11", link: "www.pinterest.com" })
file11 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed11.jpg')
pin11.photo.attach(io: file11, filename: "seed11")

pin12 = Pin.create({ authorId: user3.id, title: "pin12", description: "pin12", link: "www.pinterest.com" })
file12 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed12.jpg')
pin12.photo.attach(io: file12, filename: "seed12")

pin13 = Pin.create({ authorId: user1.id, title: "pin13", description: "pin13", link: "www.pinterest.com" })
file13 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed13.jpg')
pin13.photo.attach(io: file13, filename: "seed13")

pin14 = Pin.create({ authorId: user2.id, title: "pin14", description: "pin14", link: "www.pinterest.com" })
file14 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed14.jpg')
pin14.photo.attach(io: file14, filename: "seed14")

pin15 = Pin.create({ authorId: user3.id, title: "pin15", description: "pin15", link: "www.pinterest.com" })
file15 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed15.jpg')
pin15.photo.attach(io: file15, filename: "seed15")

pin16 = Pin.create({ authorId: user1.id, title: "pin16", description: "pin16", link: "www.pinterest.com" })
file16 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed16.jpg')
pin16.photo.attach(io: file16, filename: "seed16")


board = Board.create([ 
	{ authorId: user1.id, title: "board1", description: "board1", isPrivate: false},
	{ authorId: user1.id, title: "board2", description: "board2", isPrivate: false},
	{ authorId: user2.id, title: "board3", description: "board3", isPrivate: false},
	{ authorId: user2.id, title: "board4", description: "board4", isPrivate: false}
]);

boardPin = BoardPin.create([
	{ boardId: board[0].id, pinId: pin1.id },
	{ boardId: board[0].id, pinId: pin2.id },
	{ boardId: board[0].id, pinId: pin3.id },
	{ boardId: board[0].id, pinId: pin4.id },
	{ boardId: board[1].id, pinId: pin5.id },
	{ boardId: board[1].id, pinId: pin6.id },
	{ boardId: board[1].id, pinId: pin7.id },
	{ boardId: board[1].id, pinId: pin8.id },
	{ boardId: board[2].id, pinId: pin9.id },
	{ boardId: board[2].id, pinId: pin10.id },
	{ boardId: board[2].id, pinId: pin11.id },
	{ boardId: board[2].id, pinId: pin12.id },
	{ boardId: board[3].id, pinId: pin13.id },
	{ boardId: board[3].id, pinId: pin14.id },
	{ boardId: board[3].id, pinId: pin15.id },
	{ boardId: board[3].id, pinId: pin16.id }
]);
