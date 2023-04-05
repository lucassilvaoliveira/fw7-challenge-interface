const serverUrl = "https://fw7-challenge-server.vercel.app/";
const createShortenUrlRoute = "create-shorten-url";
const searchShortedUrlRoute = "search-shorted-url/";
const urlValidator = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

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
        if ($("#url").val() !== "" && urlValidator.test($("#url").val())) {
            fetchServer();
        } else {
            
            alert("URL is missing!")
        }
    });
});