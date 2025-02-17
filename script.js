function load () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var greeting = window.document.getElementById('greeting')
    var dayElement = window.document.getElementById('day')

    let now = new Date()
    let dayOfWeek = now.getDay()
    let hour = now.getHours()
    let minute = now.getMinutes().toString().padStart(2, '0')

    msg.innerHTML = `Agora são ${hour}:${minute}`

    if (hour < 12) {
        greeting.innerHTML = "Bom dia"
        img.src = 'assets/manha.jpeg'
        document.body.style.backgroundColor = '#ffb703'
    } else if (hour < 18) {
        greeting.innerHTML = "Boa tarde"
        img.src = 'assets/tarde.jpg'
        document.body.style.backgroundColor = '#8ecae6'
    } else {
        greeting.innerHTML = "Boa noite"
        img.src = 'assets/noite.jpg'
        document.body.style.backgroundColor = '#003049'
    }

    switch (dayOfWeek) {
        case 0:
        dayElement.innerHTML = 'Domingo';
        break;
    case 1:
        dayElement.innerHTML = 'Segunda - Feira';
        break;
    case 2:
        dayElement.innerHTML = 'Terça - Feira';
        break;
    case 3:
        dayElement.innerHTML = 'Quarta - Feira';
        break;
    case 4:
        dayElement.innerHTML = 'Quinta - Feira';
        break;
    case 5:
        dayElement.innerHTML = 'Sexta - Feira';
        break;
    case 6:
        dayElement.innerHTML = 'Sábado';
        break;
    }
}

