// async function getData() {
// 	const response = await axios.get("https://swapi.dev/api/planets/");
// 	console.log(response);
// }
console.log("Let's get this party started!");
const body = document.querySelector("body");
const searchForm = document.querySelector("#searchGiphy");
const inputField = document.querySelector("input");
const deleteButton = document.querySelector("#delete");
const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

searchForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	let userInput = inputField.value;
	let gifUrl = await getData(userInput);
	// appendGif(gifUrl);
	inputField.value = "";
});

deleteButton.addEventListener("click", function (e) {
	e.preventDefault();
});

async function getData(searchTerm) {
	const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
		params: { q: searchTerm, key },
	});
	// return res.data.data[0].images.downsized_medium.url;
	console.log(res.data.data[0].images.downsized_medium.url);
}

function appendGif(url) {
	const newGif = document.createElement("img").setAttribute("src", url);
	body.append(newGif);
}

// getData("meow");
