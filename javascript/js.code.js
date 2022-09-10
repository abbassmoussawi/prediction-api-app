document.getElementById('button').addEventListener('click', predictAge);

function predictAge() {
    let name = document.getElementById('name')

    //First fetch() to guess the age
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

    //Second fetch() to guess the gender
    fetch('https://api.genderize.io?name=' + name.value)
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                gender.innerHTML = "I guess your gender is " + data.gender;
                console.log(data.age);
            } else {
                gender.style.display = 'none';
            }
        })

};