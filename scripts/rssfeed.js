document.addEventListener("DOMContentLoaded", function() {
    const rssUrl = "https://www.aluxurytravelblog.com/feed/";
    const newsContainer = document.getElementById("news-articles");

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Log the API response
            if (data.status === "ok") {
                const items = data.items.slice(0, 3); // Limit to 3 articles
                items.forEach(item => {
                    const article = document.createElement("div");
                    article.className = "article";
                    article.innerHTML = `
                        <img src="${item.enclosure.link}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}" target="_blank">Read more</a>
                    `;
                    newsContainer.appendChild(article);
                });
            } else {
                console.error("Error fetching RSS feed:", data.message);
            }
        })
        .catch(error => console.error("Error fetching RSS feed:", error));
});