
-- ShopAnder Seed data 

/*

DROP TABLE shopander.tasks;
DROP TABLE shopander.vehicles;
DROP TABLE shopander.customers;
DROP TABLE shopander.bays;

*/
                            
                            
--     _   _ ___  ___ _ __ ___     
--    | | | / __|/ _ \ '__/ __|    
--    | |_| \__ \  __/ |  \__ \    
--     \__,_|___/\___|_|  |___/    
--                                 

-- INSERT INTO shopander.users (username, password, hint, createdAt, updatedAt) VALUES ('guest','guest','the password is guest',now(),now());
-- INSERT INTO shopander.users (username, password, hint, createdAt, updatedAt) VALUES ('robin','robin1','try robin1',now(),now());

--     _                       
--    | |__   __ _ _   _ ___   
--    | '_ \ / _` | | | / __|  
--    | |_) | (_| | |_| \__ \  
--    |_.__/ \__,_|\__, |___/  
--                 |___/       

INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (1,now(),now());
INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (2,now(),now());
INSERT INTO shopander.bays (baynumber, createdAt, updatedAt) VALUES (3,now(),now());

--                    _                                
--      ___ _   _ ___| |_ ___  _ __ ___   ___ _ __ ___ 
--     / __| | | / __| __/ _ \| '_ ` _ \ / _ \ '__/ __|
--    | (__| |_| \__ \ || (_) | | | | | |  __/ |  \__ \
--     \___|\__,_|___/\__\___/|_| |_| |_|\___|_|  |___/
--                                                     

INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Harry', 'Brown', '12 Cherry Lane', '8002347654', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Charles', 'Xavior', '4569 Drewy Circle', '7575556598', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Joey', 'Baggadonuts', '98 Wagstaff Blvd', '5558675309', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Brigitte', 'Lindholm', '637 Rally Street', '8045553981', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Lana', 'Oxton', '1 Kings Row', '4205559874', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Derek', 'Thorogood', '55 Tracer Boulivard', '7575559512', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Jesse', 'Custer', '8 Preacher Street', '8015556523', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Leonard', 'Church', '2 Blue Gulch Avenue', '5558009823', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Allison', 'Black', '79 Alberta Street', '5559871478', now(), now() );
INSERT INTO shopander.customers (firstname,lasttname,address,phonenumber,createdAt,updatedAt) 
VALUES ('Dana', 'Cardinal', '5113 Beecher Street', '8005551911', now(), now() );

--               _     _      _             
--    __   _____| |__ (_) ___| | ___  ___   
--    \ \ / / _ \ '_ \| |/ __| |/ _ \/ __|  
--     \ V /  __/ | | | | (__| |  __/\__ \  
--      \_/ \___|_| |_|_|\___|_|\___||___/  
--                                          

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '2T1AE97A4MC092797' as vehicle_vin,
   'Black'       as vehicle_color,
   '1966'        as vehicle_year,
   'Ford'        as vehicle_make,
   'Thunderbird' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '8002347654');

--     _            _           
--    | |_ __ _ ___| | _____    
--    | __/ _` / __| |/ / __|   
--    | || (_| \__ \   <\__ \   
--     \__\__,_|___/_|\_\___/   
--                              

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Oil Change', 10, 'work', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Bal/Rot Tires', 15, 'unavailable', now(), now(), 2 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Replace Altinator', 6, 'unavailable', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Rekey Locks', 10, 'work', now(), now(), 1 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Replace Brake Pads', 10, 'work', now(), now(), 2 );

INSERT INTO shopander.tasks (task_name, task_duration, task_type, createdAt, updatedAt, BayId)
VALUES ('Clean Injectors', 42, 'work', now(), now(), 3 );


