import { moduloVideo } from "./module.js";

let btnSubmit = document.querySelector("#btnsubmit");
let input = document.getElementsByName("videoName");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let data = input[0].value;
  getVideos(data)
});
const options = {
	method: 'GET',
 	headers: {
 		'X-RapidAPI-Key': '599ad8790amshd1d3b94f81aa75bp1b3480jsn2a9eccbde1e6',
 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
}
};
