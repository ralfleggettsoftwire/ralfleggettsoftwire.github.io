async function getMissingGif() {
    const response = await fetch('//api.giphy.com/v1/gifs/trending&limit=10&rating=pg-13', {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer k0vhFqBcDcmCaCdT4WUTzIvStH9c0Ha5"
        }
    });
    if (response.json().meta.status !== 200) {
        console.log("Failed to fetch trending GIFs");
        return;
    }
    const images = response.json().data.map(im => ({ title: im.title, ...im.images.fixed_height }));
    createGifArray(images);
}

function createGifArray(images) {
    const element = document.getElementById("gif-container");
    images
        .map(im => `<img src=${im.url} height=${im.height} width=${im.width} alt=${im.title} />`)
        .forEach(html => element.insertAdjacentElement('beforeend', html));
}

document.addEventListener('DOMContentLoaded', getMissingGif);