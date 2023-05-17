let videoTitle = document.querySelector('#video-title');
let videoAuthor = document.querySelector('#videoAuthor');
let channelLogo = document.querySelector('#channel-logo');
let views = document.querySelector('#views');
let videoIframe = document.querySelector('iframe');
let description = document.querySelector('#description');
const commentsContainer = document.querySelector('#comments-container');
const recommendedVideosContainer = document.querySelector('.recommended-videos-container');

export function moduloVideo(firstVideo, videos, commentsVideo) {
    videoTitle.innerHTML = firstVideo.video.title;
    videoAuthor.innerHTML = firstVideo.video.author.title;
    channelLogo.src = firstVideo.video.author.avatar[0].url;
    views.innerHTML = Intl.NumberFormat().format(firstVideo.video.stats.views) + " views";
    videoIframe.src = `https://www.youtube.com/embed/${firstVideo.video.videoId}`
    description.innerHTML = firstVideo.video.descriptionSnippet;

    commentsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'comment-detail col-12');
        div.innerHTML = `
                <h6 class="text-danger fw-bold" id="userOne">${commentsVideo[i].author.title}</h6>
                <p class="text-light" id="desUserOne">${commentsVideo[i].content}</p>
            `;
        commentsContainer.appendChild(div);
    }
};