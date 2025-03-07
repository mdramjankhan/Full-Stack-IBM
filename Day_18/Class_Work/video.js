let videoContainer = document.getElementById('videos');

let data = JSON.parse(localStorage.getItem("videoData"));

async function showData() {
    let box = document.createElement('div');

    let iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${data.id.videoid}`;

    iframe.height = '300px';
    iframe.width = '80%';
    iframe.setAttribute("allowfullscreen", true);

    let title = document.createElement('p');
    title.textContent = data.snippet.title;

    let channelTitle = document.createElement('p');
    channelTitle.textContent = data.snippet.channelTitle;

    box.append(iframe);
    box.append(title);
    box.append(channelTitle);

    videoContainer.append(box);
}

showData();