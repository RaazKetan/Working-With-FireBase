
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {getDatabase, ref , push} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

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
    inputFieldEl.value  = "";
    shoppingListEl.innerHTML+= `<li> ${inputValue}</li>`
});