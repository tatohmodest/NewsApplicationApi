document.addEventListener('DOMContentLoaded', () => {
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-08&sortBy=publishedAt&apiKey=3817b64befe743d19839e986551ec2d3";
  const next = document.querySelector('.button');
  const previous = document.querySelector('.button2');
  const s = document.querySelector('.source');
  const a = document.querySelector('.author');
  const t = document.querySelector('.title');
  const d = document.querySelector('.description');
  const u = document.querySelector('.url');
  const v = document.querySelector('.urlimage');
  const p = document.querySelector('.publish-time');
  const c = document.querySelector('.content');
 const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');


  let report = [];

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      report = articles.map(item => {
        return {
          source: item.source.name,
          author: item.author,
          title: item.title,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage,
          time: item.publishedAt,
          content: item.content
        };
      });

      searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = report.filter(newsItem => newsItem.title.toLowerCase().includes(searchTerm));
        updateArticle(filteredData[0]);
      });

      next.addEventListener('click', () => {
        i++;
        if (i >= report.length) {
          i = 0;
        }
        updateArticle(report[i]);
      });

      previous.addEventListener('click', () => {
        i--;
        if (i < 0) {
          i = report.length - 1;
        }
        updateArticle(report[i]);
      });

      updateArticle(report[0]);
    });

  let i = 0;

  function updateArticle(article) {
    s.textContent = article.source;
    a.textContent = article.author;
    t.textContent = article.title;
    d.textContent = article.description;
    u.setAttribute('href', article.url);
    v.setAttribute('src', article.urlToImage);
    p.textContent = formatDate(article.time);
    c.textContent = article.content;
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
});
