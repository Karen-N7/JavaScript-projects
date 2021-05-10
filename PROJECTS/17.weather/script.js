// window.addEventListener('load', () => {
//     let timezone = document.querySelector('.timezone'),
//     degre = document.querySelector('.degre'),
//     degreTemp = document.querySelector('.degre_temp'),
//     degreSymbol = document.querySelector('.degre_symbol'),
//     description = document.querySelector('.description')
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             var { longitude, latitude } = position.coords;
//             console.log(longitude, latitude)
//             var proxy = 'https://cors-anywhere.herokuapp.com/';
//             var api = `${proxy}https://api.darksky.net/forecast/089d09b35ed1e89bd5d8c9b32b51c425/${latitude},${longitude}`;
//             fetch(api)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data)
//                     const { temperature, summary } = data.currently;
//                     degreTemp.textContent = temperature;
//                     description.textContent = summary;
//                     timezone.textContent = data.timezone;
//                     let celsius = (temperature - 32) * (5 / 9)
//                     degre.addEventListener('click', () => {
//                         let farCel, text;
//                         if (degreSymbol.textContent == 'F') {
//                             farCel = 'C'
//                             text = Math.floor(celsius)
//                         } else {
//                             farCel = 'F'
//                             text = temperature
//                         }
//                         degreSymbol.innerText = farCel
//                         degreTemp.textContent = text
//                     })
//                 })
//         })
//     }
// });

// get id from darksky.net > dar ksky api > console




class Weather {
    constructor(props) {
        this.timezone = props.timezone
        this.degre = props.degre
        this.degreTemp = props.degreTemp
        this.degreSymbol = props.degreSymbol
        this.description = props.description
    }
    getLocation() {
        if (!navigator.geolocation) return
        navigator.geolocation.getCurrentPosition(position => {
            this.getData(position.coords)
        })
    }
    async getData(coords) {
        let { latitude, longitude } = coords
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let api = `https://api.darksky.net/forecast/089d09b35ed1e89bd5d8c9b32b51c425/`;
        try {
            let { data } = await axios(proxy + api + latitude + ',' + longitude)
            this.displayData(data)
        } catch (err) {
            console.log(err.message)
        }

    }
    displayData(data) {
        let { timezone, currently: { summary, temperature: temp } } = data
        let celsius = Math.floor((temp - 32) * (5 / 9))
        this.timezone.innerText = timezone
        this.degreTemp.innerText = temp
        this.description.innerText = summary
        this.degre.addEventListener('click', this.handleEvent.bind(this, temp, celsius))
    }

    handleEvent(temp, celsius) {
        let tempCels, symbol
        if (this.degreSymbol.innerText == 'F') {
            symbol = 'C'
            tempCels = celsius
        } else {
            symbol = 'F'
            tempCels = temp
        }
        this.degreTemp.innerText = tempCels
        this.degreSymbol.innerText = symbol
    }
}


let classNames = ['timezone','degre','degre_temp','degre_symbol','description']


let props_1 = {
     timezone : document.querySelector('.timezone')            ,
     degre : document.querySelector('.degre'),
     degreTemp : document.querySelector('.degre_temp'),
     degreSymbol : document.querySelector('.degre_symbol'),
     description : document.querySelector('.description')
}


let weather = new Weather(props_1)
weather.getLocation()
