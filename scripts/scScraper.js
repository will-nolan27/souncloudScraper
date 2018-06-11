var request = require("request");
var cheerio = require("cheerio");

//scrape articles from the New YorK Times
var scrape = function() {

  var articlesArr = [];

  request("https://www.huffingtonpost.com/section/arts", function(error, response, html) {

      var $ = cheerio.load(html);


      $("div.card__content").each(function(i, element) {

          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.imgSrc = $(this).find(' a > div > img').attr("src");
          result.link = $(this).find(' div > div > a').attr("href");
          result.title = $(this).find(' div > div > a > div').text();
          result.byLine = $(this).find(' div > div > div >').next().text();
          
          
            articlesArr.push(result);
        
      });
     
      console.log(articlesArr); 
      return(articlesArr);
  });

};
scrape()
module.exports = scrape;