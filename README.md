It is a Pinterest clone project

tables designed for Pinterest clone project

## `Users`
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`username`       | string    | not null, unique
`email`          | string    | not null, unique
`passwordDigest` | string    | not null
`sessionToken`   | string    | not null, unique

## `Boards`
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`authorId`       | integer   | not null
`title`          | string    | not null
`description`    | text      | 
`isPrivate`      | boolean   | not null
`topic`          | string    | 

## `Pins` (with image)
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`authorId`       | integer   | not null
`title`          | string    | not null
`description`    | string    | 
`link`           | string    | not null

## `BoardsPins`
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`boardId`        | integer   | not null
`pinId`          | integer   | not null

## `FollowUsers`
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`followerId`     | integer   | not null
`followeeId`     | integer   | not null

## `FollowBoards` (bonus)
column name      | data type | details
-----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`userId`         | integer   | not null
`boardId`        | integer   | not null

## Images (Store in frontend)
>>>>>>> 6be25cad1e303bbc09a063750ef91be1e8c8b11c
