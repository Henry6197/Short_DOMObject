const mydiv = document.getElementById("mydiv");
const header = document.createElement("h1");
mydiv.append(header);
header.innerHTML = "Welcome to DOM homework";
const paragraph = document.createElement("p");
mydiv.append(paragraph);
paragraph.innerHTML = "This is your first DOM homework assignment";
let list = document.createElement("ul");
mydiv.append(list);
const listitem1 = document.createElement('li');
listitem1.innerHTML = "Any";
const listitem2 = document.createElement('li');
listitem2.innerHTML = "Item";
const listitem3 = document.createElement('li');
listitem3.innerHTML = "Of your choosing";
list.append(listitem1, listitem2, listitem3)
const button = document.createElement("button");
button.textContent = "Add new list item"
document.body.appendChild(button);
let itemnumber = 1;
button.addEventListener('click', function () {
    let li = document.createElement("li");
    li.textContent = "New List Item " + itemnumber;
    list.append(li);
    itemnumber++;
});