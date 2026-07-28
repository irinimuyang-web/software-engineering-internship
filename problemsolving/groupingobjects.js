//i create an object where each category stores an array of item names
let items = [
    { name: "Laptop", category: "Electronics" },
    { name: "Book", category: "Education" },
    { name: "Phone", category: "Electronics" },
    { name: "Notebook", category: "Education" }
];
let groupedItems = {};

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item.name);
}
console.log(groupedItems);