document.getElementById('button').addEventListener('click', predictAge);

function predictAge() {
    let name = document.getElementById('name')

    // //First fetch() to guess the age
    fetch('https://api.agify.io/?name=' + name.value)
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                age.innerHTML = "I guess your age is " + data.age;
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
                gender.innerHTML = "I guess your gender is " + data.gender;
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
                nationality.innerHTML = "I guess your nationality is " + data.country[0].country_id + " or " + data.country[1].country_id;
                console.log(data.nationality);

            } else {
                nationality.style.display = 'none';
            }
        })

};