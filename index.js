
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {getDatabase, ref , push, onValue} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-3df1d-default-rtdb.firebaseio.com/"
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl =document.getElementById("shopping-list");


addButtonEl.addEventListener("click",()=>{
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    clearInputFieldEl();
});

// call the onValue function with shoppingListInDB as the first argument and fucntion(snapshot){} as the second argument
onValue(shoppingListInDB,function(snapshot){

    //use object.value to convert snapshot.val() from an Object to and Array. Create a variable for this

 //Now we should add a delete button which delets the element with unique id prestent in the database






    let itemsArray = Object.entries(snapshot.val())

    //BUg where the databse fetch all item when new item is added
     clearShopppingListEl();
    // loop to ierate on itemsArray and console.log each item
    for(let i = 0;i<itemsArray.length;i++){

        let currentItem = itemsArray[i];
        // use he appendItemToShoppingListEl(itemValue) function inside of the for loop to append item to the shopping list element for each iteration
        let currentItemID= currentItem[0];
        let currentItemValue = currentItem[1];  
    appendItemToShoppingListEl(currentItem);
    }
})

function clearShopppingListEl(){
    shoppingListEl.innerHTML = ""
}
function clearInputFieldEl(){
    inputFieldEl.value = ""
}
function appendItemToShoppingListEl(item){

    let itemID = item[0];
    let itemValue = item[1];
   

    let newEL = document.createElement("li");
    newEL.textContent = itemValue;

    shoppingListEl.appendChild(newEL);
}