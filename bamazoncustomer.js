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