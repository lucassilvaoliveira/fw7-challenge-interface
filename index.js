const serverUrl = "https://fw7-challenge-server.vercel.app/";
const createShortenUrlRoute = "create-shorten-url";
const searchShortedUrlRoute = "search-shorted-url/";
const urlInput = $("#url").val();

function fetchServer() {
    fetch(serverUrl + createShortenUrlRoute, {
        method: "POST",
        body: JSON.stringify({
            fullUrl: $("#url").val()
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {
            $("#shorted-url").attr("href", serverUrl + searchShortedUrlRoute + json.shortedUrl);
            $("#shorted-url").html("fw7." + json.shortedUrl);
        })
        .catch(err => $("#responseMessage").html("Something was wrong... Please try again!"));
}

$("document").ready(function () {
    $("#button").click(function () {
        console.log(urlInput);
        fetchServer();
    });
});