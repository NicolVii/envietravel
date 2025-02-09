document.addEventListener("DOMContentLoaded", function() {
    const rssUrl = "https://www.travelandleisure.com/rss";
    const newsContainer = document.getElementById("news-articles");

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            items.forEach(item => {
                const article = document.createElement("div");
                article.className = "article";
                article.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => console.error("Error fetching RSS feed:", error));
});