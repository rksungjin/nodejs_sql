CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Kitchen Appliances" 22.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mirror", "Home Appliances" 12.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rug", "Home Appliances" 52.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cabinet", "Home Appliances" 15.70, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dishwasher", "Home Appliances" 120.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dinner Table", "Home Appliances" 90.50, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronic Appliances" 100.25, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Speaker", "Electronic Appliances" 50.80, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Ray Player", "Electronic Appliances" 89.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nespresso", "Kitchen Appliances" 98.50, 20);

