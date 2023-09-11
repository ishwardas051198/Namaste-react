

// let ele = document.createElement('h1');
// ele.innerHTML = "Hello World"

// let root1 = document.getElementById('root');
// console.log(root1);
// root1.appendChild(ele);
const heading=React.createElement('h1',{},"Hello World from React");
const root=ReactDOM.createRoot(document.getElementById("root"));
const ele=document.createElement('h1');

console.log(heading)
console.log(ele);
console.log(root);
root.render(heading);