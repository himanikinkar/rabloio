fetch("https://bookstorerablo.herokuapp.com/api/books").then((data)=>{
    return data.json();
}).then((objectData)=>{
	console.log(objectData[0].name);
	let tableData="";
	objectData.map((values)=>{
		tableData += `<tr>
		<td>${values.ISBN}</td>
		<td>${values.name}</td>
		<td>${values.author}</td>
		<td>${values.price}</td>
		<td>${values.origin}</td>
		<td>${values.pages}</td>
		<td>${values.year}</td>
		<td>${values.stock}</td>
		<td>${values.digitalform}</td>
		<td><button onclick="update(${values.ISBN})">Update</button></td>
		<td><button onclick="remove(${values.ISBN})">Delete</button></td>
		`
	});
	document.getElementById("table_body").
	innerHTML = tableData;
}).catch((err)=>{
	console.log(err);
}); 

const searchFun = ()=>{
	let filter = document.getElementById('new-task-input').value;
    
}
function update(ISBN){
    
}

function remove(ISBN){
    fetch(`https://bookstorerablo.herokuapp.com/api/books/${ISBN}`,{
		method:"DELETE"
	}).then(()=>{
        window.location.reload();
	})
	.catch((err)=>{
		console.log(err);
	})
}

