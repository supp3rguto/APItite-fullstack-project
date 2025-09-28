DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
                            id BIGINT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            company_domain VARCHAR(255),
                            rating DECIMAL(3, 2),
                            category VARCHAR(255),
                            distance VARCHAR(50),
                            delivery_time VARCHAR(50),
                            delivery_fee DECIMAL(10, 2)
);

CREATE TABLE users (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       address VARCHAR(255)
);