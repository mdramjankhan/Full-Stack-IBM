const API_KEY = "AIzaSyAqcRDEaZLazUxpM01MvMdU-wnjF6WZxbg";
let search_term = document.getElementById("search-input").value || "University";
let videoContainer = document.getElementById("video-data");

async function getData() {
    try {
        console.log(search_term);
        let data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`
        );

        console.log(data);
        let response = await data.json();
        console.log(response);
    } catch (e) {
        throw new error(`error message:${e} `);
    }
}

getData();

{
    /* <iframe width="670" height="335" src="https://www.youtube.com/embed/RbaJTgtDkWU" title="[Exclusive] Xiaomi 15 Ultra Hands On &amp; First Look ⚡The Ultimate Camera Phone?! 🤯" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}

// const debouncedSearch = debounce((query) => loadVideos(query), 300);

async function showVideoCards(arr) {
    document.getElementById('loading').style.display='hidden'
    arr.array.forEach(({ snippet, id: { videoId } }) => {
        let videoBox = document.createElement("div");
        videoBox.className = "videos";
        videoBox.style.width = "20%";
        videoBox.style.border = "1px solid green";

        let img = document.createElement("img");
        img.src = snippet;

        let title = document.createElement("p");
        title.innerText = "";

        let channelTitle = document.createElement("p");
        channelTitle.innerText = "";

        videoBox.append(img, title, channelTitle);
        videoContainer.append(videoBox);

        videoBox.addEventListener('click', ()=> {

        })

        videoBox.onclick = (()=> {
            let data = {
                snippet, id
            }
            localStorage.setItem("videoData", JSON.stringify(data));
            window.location.href = "video.html"
        })
        onclick()
    });
}
