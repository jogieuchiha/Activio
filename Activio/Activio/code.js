(function() {

    var quotes = $(".quote");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quote.eq(quoteIndex % quote.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();