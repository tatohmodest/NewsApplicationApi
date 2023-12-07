document.addEventListener('DOMContentLoaded', () => {
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-07&sortBy=publishedAt&apiKey=3817b64befe743d19839e986551ec2d3";
  const next = document.querySelector('.button');
  const previous = document.querySelector('.button1');
  const s = document.querySelector('.source');
  const a = document.querySelector('.author');
  const t = document.querySelector('.title');
  const d = document.querySelector('.description');
  const u = document.querySelector('.url');
  const v = document.querySelector('.urlimage');
  const p = document.querySelector('.publish-time');
  const c = document.querySelector('.content');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      let i = 0;
      const report = articles.map(item => {
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

      next.addEventListener('click', () => {
        i++;
        if (i >= report.length) {
          i = 0;
        }
        updateArticle(i);
      });

      previous.addEventListener('click', () => {
        i--;
        if (i < 0) {
          i = report.length - 1;
        }
        updateArticle(i);
      });

      function updateArticle(index) {
        s.innerHTML = report[index].source;
        a.innerHTML = report[index].author;
        t.innerHTML = report[index].title;
        d.innerHTML = report[index].description;
        u.href = report[index].url;
        u.innerHTML = report[index].url;
        v.src = report[index].urlToImage;
        p.innerHTML = report[index].time;
        c.innerHTML = report[index].content;
      }

      updateArticle(i);
    })
    .catch(error => console.log(error));
});
