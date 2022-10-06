
const form1 = document.querySelector('.form');
// console.log(form1);
form1.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(form1);
    console.log(formData);
    const data = Object.fromEntries(formData);

    console.log(data);
})

