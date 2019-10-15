# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Item.destroy_all
Pin.destroy_all
Board.destroy_all
User.destroy_all

user1 = User.create!({ username: "name_1", password: "name_1" })
user2 = User.create!({ username: "name_2", password: "name_2" })
user3 = User.create!({ username: "name_3", password: "name_3" })
demo_user = User.create!({ username: "demo_user", password: "password" })

pin1 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file1 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed1.jpg')
pin1.photo.attach(io: file1, filename: "seed1")
pin1.save!

pin2 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file2 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed2.jpg')
pin2.photo.attach(io: file2, filename: "seed2")
pin2.save!

pin3 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file3 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed3.jpg')
pin3.photo.attach(io: file3, filename: "seed3")
pin3.save!

pin4 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file4 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed4.jpg')
pin4.photo.attach(io: file4, filename: "seed4")
pin4.save!

pin5 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file5 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed5.jpg')
pin5.photo.attach(io: file5, filename: "seed5")
pin5.save!

pin6 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file6 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed6.jpg')
pin6.photo.attach(io: file6, filename: "seed6")
pin6.save!

pin7 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file7 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed7.jpg')
pin7.photo.attach(io: file7, filename: "seed7")
pin7.save!

pin8 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file8 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed8.jpg')
pin8.photo.attach(io: file8, filename: "seed8")
pin8.save!

pin9 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file9 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed9.jpg')
pin9.photo.attach(io: file9, filename: "seed9")
pin9.save!

pin10 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file10 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed10.jpg')
pin10.photo.attach(io: file10, filename: "seed10")
pin10.save!

pin11 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file11 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed11.jpg')
pin11.photo.attach(io: file11, filename: "seed11")
pin11.save!

pin12 = Pin.new({ authorId: demo_user.id, link: "www.pinterest.com" })
file12 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed12.jpg')
pin12.photo.attach(io: file12, filename: "seed12")
pin12.save!

pin13 = Pin.new({ authorId: user1.id, link: "www.pinterest.com" })
file13 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed13.jpg')
pin13.photo.attach(io: file13, filename: "seed13")
pin13.save!

pin14 = Pin.new({ authorId: user1.id, link: "www.pinterest.com" })
file14 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed14.jpg')
pin14.photo.attach(io: file14, filename: "seed14")
pin14.save!

pin15 = Pin.new({ authorId: user2.id, link: "www.pinterest.com" })
file15 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed15.jpg')
pin15.photo.attach(io: file15, filename: "seed15")
pin15.save!

pin16 = Pin.new({ authorId: user3.id, link: "www.pinterest.com" })
file16 = open('https://linkerest-pro.s3-us-west-2.amazonaws.com/seed16.jpg')
pin16.photo.attach(io: file16, filename: "seed16")
pin16.save!


board = Board.create!([ 
	{ authorId: demo_user.id, title: "board1", description: "board1", isPrivate: false},
	{ authorId: demo_user.id, title: "board2", description: "board2", isPrivate: false},
	{ authorId: demo_user.id, title: "board3", description: "board3", isPrivate: false},
	{ authorId: demo_user.id, title: "board4", description: "board4", isPrivate: false},
	{ authorId: demo_user.id, title: "board5", description: "board5", isPrivate: false},
	{ authorId: user1.id, title: "board6", description: "board6", isPrivate: false},
	{ authorId: user1.id, title: "board7", description: "board7", isPrivate: false},
	{ authorId: user2.id, title: "board8", description: "board8", isPrivate: false},
	{ authorId: user2.id, title: "board9", description: "board9", isPrivate: false},
	{ authorId: user3.id, title: "board10", description: "board10", isPrivate: false},
	{ authorId: user3.id, title: "board11", description: "board11", isPrivate: false}

]);

item = Item.create!([
	{ boardId: board[0].id, pinId: pin1.id, authorId: demo_user.id, title: "board1", description: "pin1" },
	{ boardId: board[0].id, pinId: pin2.id, authorId: demo_user.id, title: "board1", description: "pin2" },
	{ boardId: board[1].id, pinId: pin3.id, authorId: demo_user.id, title: "board2", description: "pin3" },
	{ boardId: board[1].id, pinId: pin4.id, authorId: demo_user.id, title: "board2", description: "pin4" },
	{ boardId: board[2].id, pinId: pin5.id, authorId: demo_user.id, title: "board3", description: "pin5" },
	{ boardId: board[2].id, pinId: pin6.id, authorId: demo_user.id, title: "board3", description: "pin6" },
	{ boardId: board[3].id, pinId: pin7.id, authorId: demo_user.id, title: "board4", description: "pin7" },
	{ boardId: board[3].id, pinId: pin8.id, authorId: demo_user.id, title: "board4", description: "pin8" },
	{ boardId: board[4].id, pinId: pin9.id, authorId: demo_user.id, title: "board5", description: "pin9" },
	{ boardId: board[4].id, pinId: pin10.id, authorId: demo_user.id, title: "board5", description: "pin10" },
	{ boardId: board[5].id, pinId: pin11.id, authorId: user1.id, title: "board6", description: "pin11" },
	{ boardId: board[6].id, pinId: pin12.id, authorId: user1.id, title: "board7", description: "pin12" },
	{ boardId: board[7].id, pinId: pin13.id, authorId: user2.id, title: "board8", description: "pin13" },
	{ boardId: board[8].id, pinId: pin14.id, authorId: user2.id, title: "board9", description: "pin14" },
	{ boardId: board[9].id, pinId: pin15.id, authorId: user3.id, title: "board10", description: "pin15" },
	{ boardId: board[10].id, pinId: pin16.id, authorId: user3.id, title: "board11", description: "pin16" }
]);
