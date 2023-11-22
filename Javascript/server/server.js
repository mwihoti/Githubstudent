const dog_Url  = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F232779-050-6B0411D7%2FGerman-Shepherd-dog-Alsatian.jpg&tbnid=MadgLdQ_K-avUM&vet=12ahUKEwihmuPewdSCAxWvmScCHbx0BdQQMygBegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fdog&docid=zWUzl6F1QeMfZM&w=1600&h=1144&q=dog&ved=2ahUKEwihmuPewdSCAxWvmScCHbx0BdQQMygBegQIARBw"

const dogy = document.getElementById("dog-target");

function addNewDogy () {
    const promise = fetch(dog_Url);

    promise.then(function (response){
        const processingPromise = response.text();
        return processingPromise;
    })
    .then(function (processedResponse){
        const dogObject = JSON.parse(processedResponse);
        const img = document.createElement("img")
        img.src = dogObject.message;
        img.alt = "cute dogy";
        dogy.appendChild(img)
    }).catch(function(error){
        alert("No Image")
    })
}
document.getElementById("dog-btn").addEventListener("click", addNewDogy)