
-- let items = [{key: 1, name:"Task1",duration:10,type:"work",bay:1},
--              {key: 2, name:"Task2",duration:15,type:"unavailable",bay:2},
--              {key: 3, name:"Task3",duration:6,type:"unavailable",bay:1},
--              {key: 4, name:"Task4",duration:10,type:"work",bay:1},
--              {key: 5, name:"Task5",duration:10,type:"work",bay:2},
--              {key: 6, name:"Task6",duration:42,type:"work",bay:3},
--             ]


INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (1,now(),now());
INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (2,now(),now());
INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (3,now(),now());

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task1', 10, 'work', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task2', 15, 'unavailable', now(), now(), 2 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task3', 6, 'unavailable', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task4', 10, 'work', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task5', 10, 'work', now(), now(), 2 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Task6', 42, 'work', now(), now(), 3 );

