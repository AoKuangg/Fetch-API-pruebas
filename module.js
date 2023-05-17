let vTitle = document.querySelector('#video-title');
let vAuthor = document.querySelector('#videoAuthor');
let cLogo = document.querySelector('#channel-logo');
let views = document.querySelector('#views');
let vIframe = document.querySelector('iframe');
let description = document.querySelector('#description');
const cContainer = document.querySelector('#comments-container');
const rVContainer = document.querySelector('.recommended-videos-container');
const limit= 5
export function moduloVideo(firstVideo, videos, commentsVideo) {
    vTitle.innerHTML = firstVideo.video.title;
    vAuthor.innerHTML = firstVideo.video.author.title;
    cLogo.src = firstVideo.video.author.avatar[0].url;
    views.innerHTML = Intl.NumberFormat().format(firstVideo.video.stats.views) + " views";
    vIframe.src = `https://www.youtube.com/embed/${firstVideo.video.videoId}`
    description.innerHTML = firstVideo.video.description;

    cContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'comment-detail col-12');
        div.innerHTML = `
                <h6 class="text-light fw-bold" id="userOne">${commentsVideo[i].author.title}</h6>
                <p class="text-light" id="desUserOne">${commentsVideo[i].content}</p>
            `;
        cContainer.appendChild(div);
    }
    rVContainer.innerHTML = '';
    videos.slice(1,limit).forEach(vItem => { //videos.slice(0, limit) devuelve una nueva matriz con los primeros limit elementos de videos
        const div = document.createElement('div');
        div.setAttribute('class', 'recommended-video col-12 d-flex justify-content-start align-items-center text-light my-2')

        div.innerHTML = `
            <img src="${vItem.video.thumbnails[0].url}"
                alt="">
            <div class="recommended-detail-video col d-flex flex-column">
                <p class="fw-bold fs-4 mt-1 mx-3">${vItem.video.title}</p>
                <p class="fs-5 mt-1 mx-3">${vItem.video.author.title}</p>
                <p class="mt-1 mx-3">${vItem.video.publishedTimeText}</p>
            </div>
        `;

        rVContainer.appendChild(div);
    });
    rVContainer.classList.add('recommended-videos-container');
};