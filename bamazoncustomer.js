var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "bamazon"

});

connection.connect(function(err) {
  if (err) throw err;
  readList();
});

function readList() {

    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      console.log(results);
      //connection.end();
      startPurchase();
    });

  }

  function startPurchase(err, results) {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
    inquirer
      .prompt([
        {
        name: "newProduct",
        type: "list",
        choices: function() {
          var selectArray = [];
          for (var i = 0; i < results.length; i++) {
            selectArray.push(results[i].product_name);
          }
          return selectArray;
        },
        message: "What product would you like to purchase? Please enter Product ID.", //maybe wrong line
      },
      {        
      name: "newAmount",
      type: "input",
      message: "How many would you like to purhcase?"
      }
      
    
      ]).then(function(answer) {
        
          var selectedItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.newProduct) {
            selectedItem = results[i];
          }
        }

        if (selectedItem.stock_quantity > parseInt(answer.newAmount)) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: selectedItem.stock_quantity - parseInt(answer.newAmount)
              },
              {
                id: selectedItem.id
              }
            ],
            function(err) {
              if (err) throw err;
              console.log("\n\n");
              console.log("Thank you for your purchase!");
              console.log("\n\n");
              console.log("Purchase Summary");
              console.log("-----------------------------");
              console.log("Product Name: " +  selectedItem.product_name);
              console.log("Amount: " + parseInt(answer.newAmount));
              console.log("==============================================");
              console.log("Total: " + "$" + (selectedItem.price * parseInt(answer.newAmount)));
              console.log("\n\n");
              // readList();
              // startPurchase();

            }
          );
          connection.end();
        }
        
  })
})
  };


//readList();
//startPurchase();



// Products table schema: 

// item_id
// product_name
// department_name
// price 
// stock_quantity

// BAMAZONCUSTOMER.JS

// readListPrompt()

// startPurchasePrompt()

// Retrieve and query all products from database

// Console.log all product data (list)

// Ask which ID of product customer wants to buy and how much

// Feed ID and QUANTITY into then function

// Queries the database for the product matching the ID

// Compares the stock_quantity value to QUANTITY parameter

// IF user is able to purchase, call purchase

// Else, display failure message and call prompt
    
//MANAGERVIEW.JS

//selectPrompt()
  //switch case function to view Products for Sale, Low Inventory, Adding Inventory, Adding New Product
  
  //Products for Sale: query all products
  
  //Low Inventory: query all products less than specific quantity
  
  //Adding Inventory: choice prompt for item id and quantity; query stock add quantity
  
  //Adding New Product: post prompt to add new item; query insert new item 