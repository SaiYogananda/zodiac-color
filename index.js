const zodiac = document.getElementById('zodiac');
const body=document.body;
const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#d6800f";
            break;

        case "taurus":
            body.style.backgroundColor = "#d6260f";
            break;

        case "gemini":
            body.style.backgroundColor = "#d60f3d";
            break;

        case "cancer":
            body.style.backgroundColor = "#ae0fd6";
            break;

        case "leo":
            body.style.backgroundColor = "#1c0fd6";
            break;

        case "virgo":
            body.style.backgroundColor = "#0fb2d6";
            break;

        case "libra":
            body.style.backgroundColor = "#d6e065";
            break;

        case "scorpio":
            body.style.backgroundColor = "#aed60f";
            break;

        case "sagittarius":
            body.style.backgroundColor = "#d60f79";
            break;

        case "aquarius":
            body.style.backgroundColor = "#a0a7ad";
            break;

        case "capricorn":
            body.style.backgroundColor = "#fc88d8";
            break;

        case "pisces":
            body.style.backgroundColor = "#9c6b5d";
            break;
    
        default:
            break;
    }
}