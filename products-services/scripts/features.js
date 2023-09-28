document.addEventListener("DOMContentLoaded", function () {
    // Function to handle feature click event
    function handleFeatureClick() {
        alert("You clicked on a feature!");
    }

    // Get all elements with the class "feature"
    var features = document.querySelectorAll(".feature");

    // Add a click event listener to each feature
    features.forEach(function (feature) {
        feature.addEventListener("click", handleFeatureClick);
    });
});