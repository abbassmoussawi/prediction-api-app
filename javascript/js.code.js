document.getElementById('button').addEventListener('click', predictName);

function predictName() {
    let name = document.getElementById('name')
    fetch('https://api.agify.io/?name=' + name.value, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            if (name != '') {
                age.innerHTML = "I guess your age is " + data.age;
                console.log(data.age);
            } else {
                age.style.display = 'none';
            }
        })
};