# NewsApplicationApi
1. The code starts by adding an event listener to the `DOMContentLoaded` event, which ensures that the JavaScript code runs after the HTML document has been fully loaded.

2. The `url` variable stores the URL for fetching news data from the News API. You can replace it with your desired API endpoint.

3. The `querySelector` method is used to select elements from the HTML document based on CSS selectors. In this case, it selects the next button, previous button, source, author, title, description, URL, URL image, publish time, content, search input, and search button elements.

4. The `fetch` function is used to make an HTTP request to the specified URL and retrieve the news data. The response is then converted to JSON format using the `json()` method.

5. The retrieved news data is mapped to a new array called `report`, which contains objects with properties such as source, author, title, description, URL, URL to image, publish time, and content.

6. Event listeners are added to the search button, next button, and previous button. When the search button is clicked, it retrieves the value of the search input and filters the `report` array based on the entered search term. The first matching article is then displayed using the `updateArticle` function.

7. When the next button is clicked, it increments the index (`i`) and checks if it exceeds the length of the `report` array. If it does, it wraps around to the first article. The `updateArticle` function is called to display the article.

8. Similarly, when the previous button is clicked, it decrements the index (`i`) and checks if it goes below 0. If it does, it wraps around to the last article. The `updateArticle` function is called to display the article.

9. The `updateArticle` function takes an article object as a parameter and updates the content of various HTML elements with the corresponding properties of the article object.

10. Finally, the initial call to `updateArticle` is made with the first article in the `report` array to display the initial news article.

You can include this explanation in your README file to provide an overview of how the JavaScript code functions in your project.