// Step 3: Define XMLHttpRequest object and URL variable
var xhr = new XMLHttpRequest();
var url = './news_article.json'; // Adjust the path if needed

// Step 4: Open a GET request to the URL (asynchronous)
xhr.open('GET', url, true);

// Step 5: Set the expected response type to JSON
xhr.responseType = 'json';

// Step 6: Define what happens when the data is loaded
xhr.onload = function() {
  if (xhr.status === 200) {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = ''; // Clear existing content

    // Use forEach to iterate and create HTML elements dynamically
    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Failed to load data: ' + xhr.status);
  }
};

// Send the request
xhr.send();