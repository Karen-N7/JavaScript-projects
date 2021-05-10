document.querySelector('#lbsInput').addEventListener('input', (e) => {
    let lbs = e.target.value
    document.querySelector('#gramsOutput').innerHTML = lbs / 0.0022046;
    document.querySelector('#kgOutput').innerHTML = lbs / 2.2046;
    document.querySelector('#ozOutput').innerHTML = lbs * 16;
});


console.log(navigator.appVersion)


