
-- ShopAnder Seed data 

use shopander;

/*
DROP TABLE shopander.tasks;
DROP TABLE shopander.vehicles;
DROP TABLE shopander.customers;
DROP TABLE shopander.bays;
*/

/*
DELETE FROM  shopander.bays;
DELETE FROM  shopander.vehicles;
DELETE FROM  shopander.customers;
DELETE FROM  shopander.vehicles;
DELETE FROM  shopander.bays;
*/

                            
--     _   _ ___  ___ _ __ ___     
--    | | | / __|/ _ \ '__/ __|    
--    | |_| \__ \  __/ |  \__ \    
--     \__,_|___/\___|_|  |___/    
--                                 

INSERT INTO shopander.users (username, password, hint, createdAt, updatedAt) VALUES ('guest','guest','the password is guest',now(),now());
INSERT INTO shopander.users (username, password, hint, createdAt, updatedAt) VALUES ('robin','robin1','try robin1',now(),now());

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
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt, updatedAt, CustomerId)
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


INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '1GNALDEK9FZ108495' as vehicle_vin,
   'Black'       as vehicle_color,
   '2015'        as vehicle_year,
   'CHEVROLET'        as vehicle_make,
   'EQUINOX' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '8002347654');

   INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '5NPD84LF9KH419178' as vehicle_vin,
   'Gray'       as vehicle_color,
   '2019'        as vehicle_year,
   'HYUNDAI'        as vehicle_make,
   'ELANTRA' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '7575556598');

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   'JH4DA9340NS001774' as vehicle_vin,
   'LIGHT BLUE'       as vehicle_color,
   '1992'        as vehicle_year,
   'ACURA'        as vehicle_make,
   'INTEGRA' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '5558675309');

-- INSERT INTO shopander.vehicles 
-- (vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
-- SELECT 
--   '3VWLL7AJ9BM053541' as vehicle_vin,
--   'WHITE'       as vehicle_color,
--   '2011'        as vehicle_year,
--   'VOLKSWAGEN'        as vehicle_make,
--   'JETTA' as vehicle_model,
--   NULL          as vehicle_engine,
--   NULL          as vehicle_transmission,
--   now()         as createdAt,
--   now()         as updatedAt,
--   (select id from shopander.customers where phonenumber = '804555398');

   INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   'JH4DA175XGS009825' as vehicle_vin,
   'BLACK'       as vehicle_color,
   '1986'        as vehicle_year,
   'ACURA'        as vehicle_make,
   'INTEGRA' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '4205559874');

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '1FUJAPCK25DU88948' as vehicle_vin,
   'RED'       as vehicle_color,
   '2005'        as vehicle_year,
   'FREIGHTLINER'        as vehicle_make,
   'FLD132' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '7575559512');

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '1GCEK14K8RE106083' as vehicle_vin,
   'YELLOW'       as vehicle_color,
   '1994'        as vehicle_year,
   'Chevrolet'        as vehicle_make,
   'C K 1500 Series' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '8015556523');

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   '1FDWE35SX5HA40825' as vehicle_vin,
   'BLUE'       as vehicle_color,
   '2005'        as vehicle_year,
   'Ford'        as vehicle_make,
   'E 350' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '5558009823');

INSERT INTO shopander.vehicles 
(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)
SELECT 
   'WBAFR9C59BC270614' as vehicle_vin,
   'GREY'       as vehicle_color,
   '2011'        as vehicle_year,
   'BMW'        as vehicle_make,
   '550' as vehicle_model,
   NULL          as vehicle_engine,
   NULL          as vehicle_transmission,
   now()         as createdAt,
   now()         as updatedAt,
   (select id from shopander.customers where phonenumber = '5559871478');

-- '      INSERT INTO shopander.vehicles \n(vehicle_vin, vehicle_color, vehicle_year, vehicle_make, vehicle_model, vehicle_engine, vehicle_transmission, createdAt,updatedAt, CustomerId)\nSELECT \n   \'3B7HF13YXWG209744\' as vehicle_vin,\n   \'RED\'       as vehicle_color,\n   \'1998\'        as vehicle_year,\n   \'Dodge\'        as vehicle_make,\n   \'Ram Pickup 1500\' as vehicle_model,\n   NULL          as vehicle_engine,\n   NULL          as vehicle_transmission,\n   now()         as createdAt,\n   now()         as updatedAt,\n   (select id from shopander.customers where phonenumber = \'8005551911\');'

--     _            _           
--    | |_ __ _ ___| | _____    
--    | __/ _` / __| |/ / __|   
--    | || (_| \__ \   <\__ \   
--     \__\__,_|___/_|\_\___/   
--        

                      
INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Oil Change', 10, now(), now(), 1 , 1, 1);

INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Balance & Rotate Tires', 15, now(), now(), 2, 1, 1 );

INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Replace Alternator', 6, now(), now(), 1 ,1,1);

INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Rekey Locks', 10, now(), now(), 1, 1, 1 );

INSERT INTO shopander.tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Replace Brake Pads', 10, now(), now(), 2 ,1 ,1 );

INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Replace Brake Pads', 10, now(), now(), 2 ,1 ,1 );

INSERT INTO tasks (task_name, task_duration, createdAt, updatedAt, BayId, CustomerId, VehicleId )
VALUES ('Clean Injectors', 42, now(), now(), 3 ,1 ,1);





