fetch('https://dog.ceo/api/breeds/' + 'image/random')
    .then(response => response.json())
    .then(JSON => imageDog.src = JSON.message);

document.getElementById('button').addEventListener('click', predictPersonalInfo);

//Create predictPersonalInfo() in order to use fetch() inside it
function predictPersonalInfo() {
    let name = document.getElementById('name')

    // //First fetch() to guess the age
    fetch('https://api.agify.io/?name=' + name.value)
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                age.innerHTML = "Your age is: " + data.age + ",";
                console.log(data.age);
            } else {
                age.style.display = 'none';
            }
        })
        // //Second fetch() to guess the gender
    fetch('https://api.genderize.io?name=' + name.value)
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                gender.innerHTML = "Gender is: " + data.gender;
                console.log(data.gender);
            } else {
                gender.style.display = 'none';
            }
        })

    //Third fetch() to guess the nationality
    fetch('https://api.nationalize.io/?name=' + name.value)
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                nationality.innerHTML = "Nationality is: " + data.country[0].country_id + " or " + data.country[1].country_id;
                console.log(data.nationality);

            } else {
                nationality.style.display = 'none';
            }
        })
};