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
const getVideos = async (data) => {
    const videos = await (await fetch(`https://youtube138.p.rapidapi.com/search/?q=${data}&hl=en&gl=US`,options)).json();
    const videosRecommended = videos.contents;
    const firstVideo = videos.contents[0];
    const comments = await (await fetch(`https://youtube138.p.rapidapi.com/video/comments/?id=${firstVideo.video.videoId}&hl=en&gl=US`,options)).json();
    const commentsVideo = comments.comments;
    moduloVideo(firstVideo, videosRecommended,commentsVideo)
    return firstVideo;
};