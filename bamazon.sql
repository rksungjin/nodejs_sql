DROP DATABASE IF EXISTS bamazon;

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

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Microwave", "Home Appliances" 22.50, 100);

