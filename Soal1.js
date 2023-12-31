function analisisRating(dataReview) {
    dataReview.sort(function(a, b) {
      return a - b;
    });
  
    var ratingTerendah = dataReview[0];
    var ratingTertinggi = dataReview[dataReview.length - 1];
    var totalRating = dataReview.reduce(function(sum, rating) {
      return sum + rating;
    });
    var rataRataRating = totalRating / dataReview.length;
  
    console.log(ratingTerendah, ratingTertinggi, rataRataRating.toFixed(1));
}

var dataReview1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
analisisRating(dataReview1);
  
var dataReview2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
analisisRating(dataReview2);
