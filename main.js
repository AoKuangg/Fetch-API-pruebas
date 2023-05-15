// const url = 'https://youtube138.p.rapidapi.com/search/?hl=en&gl=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '599ad8790amshd1d3b94f81aa75bp1b3480jsn2a9eccbde1e6',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const buscar = document.querySelector('.btn')

buscar.addEventListener('click',(e)=>{
    e.preventDefault();
    let coso = document.querySelector('.busquedaxd').value
    console.log(coso)
})