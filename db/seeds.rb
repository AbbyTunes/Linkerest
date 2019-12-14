# This file should contain all the record creation needed to seed the database with its default values.	
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).	
#	
# Examples:	
#	
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])	
#   Character.create(name: 'Luke', movie: movies.first)	


require "open-uri"

Item.destroy_all
Pin.destroy_all
Board.destroy_all
User.destroy_all

user1 = User.create!({ username: "name_1", password: "name_1" })
demo_user = User.create!({ username: "demo_user", password: "password" })
# user1 = User.new({ username: "name_1", password: "name_1" })
# user1.save!
# demo_user = User.new({ username: "demo_user", password: "password" })
# demo_user.save!


# Hpricot.XML(open(url))
# open(URI.parse())

pin1 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file1 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home1.jpeg")
pin1.photo.attach(io: file1, filename: "home1.jpeg")
pin1.save!

pin2 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file2 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home4.jpeg")
pin2.photo.attach(io: file2, filename: "home4.jpeg")
pin2.save!

pin3 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file3 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home2.jpeg")
pin3.photo.attach(io: file3, filename: "home2.jpeg")
pin3.save!

pin4 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file4 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home7.jpeg")
pin4.photo.attach(io: file4, filename: "home7.jpeg")
pin4.save!

pin5 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file5 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/hair4.jpeg")
pin5.photo.attach(io: file5, filename: "hair4.jpeg")
pin5.save!

pin6 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file6 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/cat2.jpeg")
pin6.photo.attach(io: file6, filename: "cat2.jpeg")
pin6.save!

pin7 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file7 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/cat4.jpeg")
pin7.photo.attach(io: file7, filename: "cat4.jpeg")
pin7.save!

pin8 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file8 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/cat1.jpeg")
pin8.photo.attach(io: file8, filename: "cat1.jpeg")
pin8.save!

pin9 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file9 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/cat3.jpeg")
pin9.photo.attach(io: file9, filename: "cat3.jpeg")
pin9.save!

pin10 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file10 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/hair3.jpeg")
pin10.photo.attach(io: file10, filename: "hair3.jpeg")
pin10.save!

pin11 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file11 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home6.jpeg")
pin11.photo.attach(io: file11, filename: "home6.jpeg")
pin11.save!

pin12 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file12 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home5.jpeg")
pin12.photo.attach(io: file12, filename: "home5.jpeg")
pin12.save!

pin13 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file13 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/home8.jpeg")
pin13.photo.attach(io: file13, filename: "home8.jpeg")
pin13.save!

pin14 = Pin.new({ authorId: user1.id, link: "https://www.abbydeveloper.com/" })
file14 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/shoes2.jpeg")
pin14.photo.attach(io: file14, filename: "shoes2.jpeg")
pin14.save!

pin15 = Pin.new({ authorId: user2.id, link: "https://www.abbydeveloper.com/" })
file15 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/seed8.jpg")
pin15.photo.attach(io: file15, filename: "seed8.jpg")
pin15.save!

pin16 = Pin.new({ authorId: user3.id, link: "https://www.abbydeveloper.com/" })
file16 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/seed7.jpg")
pin16.photo.attach(io: file16, filename: "seed7.jpg")
pin16.save!

pin17 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file17 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/seed1.jpg")
pin17.photo.attach(io: file17, filename: "seed1.jpg")
pin17.save!

pin18 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file18 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/project2.png")
pin18.photo.attach(io: file18, filename: "project2.png")
pin18.save!

pin19 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file19 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/project1.png")
pin19.photo.attach(io: file19, filename: "project1.png")
pin19.save!

pin20 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file20 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/project5.png")
pin20.photo.attach(io: file20, filename: "project5.png")
pin20.save!

pin21 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file21 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/project4.png")
pin21.photo.attach(io: file21, filename: "project4.png")
pin21.save!

pin22 = Pin.new({ authorId: demo_user.id, link: "https://www.abbydeveloper.com/" })
file22 = open("https://linkerest-dev.s3-us-west-2.amazonaws.com/project6.png")
pin22.photo.attach(io: file22, filename: "project6.png")
pin22.save!


board = Board.create!([ 
	{ authorId: demo_user.id, title: "homeDecor", description: "board1", isPrivate: false},
	{ authorId: demo_user.id, title: "Portfolio", description: "board2", isPrivate: false},
	{ authorId: demo_user.id, title: "cuteCats", description: "board3", isPrivate: false},
	{ authorId: demo_user.id, title: "hairstyle", description: "board4", isPrivate: false},
	{ authorId: demo_user.id, title: "tableSetting", description: "board5", isPrivate: false},
	{ authorId: demo_user.id, title: "shoes", description: "board9", isPrivate: false},
	{ authorId: user1.id, title: "cuteCats", description: "board10", isPrivate: false},
	{ authorId: user1.id, title: "homeDecor", description: "board11", isPrivate: false}
]);

# item = Item.create!([
# 	{ boardId: board[0].id, pinId: pin1.id, authorId: demo_user.id, title: "home", description: "pin1" },
# 	{ boardId: board[0].id, pinId: pin2.id, authorId: demo_user.id, title: "home", description: "pin2" },
# 	{ boardId: board[0].id, pinId: pin3.id, authorId: demo_user.id, title: "home", description: "pin3" },
# 	{ boardId: board[0].id, pinId: pin4.id, authorId: demo_user.id, title: "home", description: "pin4" },
# 	{ boardId: board[0].id, pinId: pin11.id, authorId: demo_user.id, title: "home", description: "pin11" },
# 	{ boardId: board[0].id, pinId: pin12.id, authorId: demo_user.id, title: "home", description: "pin12" },
# 	{ boardId: board[0].id, pinId: pin13.id, authorId: demo_user.id, title: "home", description: "pin13" },
# 	{ boardId: board[0].id, pinId: pin16.id, authorId: demo_user.id, title: "home", description: "pin16" },
# 	{ boardId: board[0].id, pinId: pin17.id, authorId: demo_user.id, title: "home", description: "pin17" },
# 	{ boardId: board[1].id, pinId: pin18.id, authorId: demo_user.id, title: "myProject", description: "pin18" },
# 	{ boardId: board[1].id, pinId: pin19.id, authorId: demo_user.id, title: "myProject", description: "pin19" },
# 	{ boardId: board[1].id, pinId: pin20.id, authorId: demo_user.id, title: "myProject", description: "pin20" },
# 	{ boardId: board[1].id, pinId: pin21.id, authorId: demo_user.id, title: "myProject", description: "pin21" },
# 	{ boardId: board[1].id, pinId: pin22.id, authorId: demo_user.id, title: "myProject", description: "pin22" },
# 	{ boardId: board[2].id, pinId: pin6.id, authorId: demo_user.id, title: "cuteCat", description: "pin6" },
# 	{ boardId: board[2].id, pinId: pin7.id, authorId: demo_user.id, title: "cuteCat", description: "pin7" },
# 	{ boardId: board[2].id, pinId: pin8.id, authorId: demo_user.id, title: "cuteCat", description: "pin8" },
# 	{ boardId: board[2].id, pinId: pin9.id, authorId: demo_user.id, title: "cuteCat", description: "pin9" },
# 	{ boardId: board[3].id, pinId: pin5.id, authorId: demo_user.id, title: "trendyHairstyle", description: "pin5" },
# 	{ boardId: board[3].id, pinId: pin10.id, authorId: demo_user.id, title: "trendyHairstyle", description: "pin10" },
# 	{ boardId: board[4].id, pinId: pin15.id, authorId: demo_user.id, title: "tableSetting", description: "pin15" },
# 	{ boardId: board[5].id, pinId: pin14.id, authorId: demo_user.id, title: "shoes", description: "pin14" },
# 	{ boardId: board[6].id, pinId: pin6.id, authorId: user1.id, title: "cuteCat", description: "pin6" },
# 	{ boardId: board[6].id, pinId: pin7.id, authorId: user1.id, title: "cuteCat", description: "pin7" },
# 	{ boardId: board[7].id, pinId: pin3.id, authorId: user1.id, title: "home", description: "pin3" },
# 	{ boardId: board[7].id, pinId: pin4.id, authorId: user1.id, title: "home", description: "pin4" }
# ]);
