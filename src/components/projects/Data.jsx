import Image1 from './img/first-site.png'
import Image2 from './img/first-code.png'
import Image3 from './img/second-site.png'


const icons = ["bi bi-browser-chrome project__icon", "bi bi-code-slash project__icon"]
const Data = [
    {
        id: 1,
        image: Image1,
        name: "Strona internetowa Portfolio",
        category: "website",
        icon: icons[0],
        showCategory: 'website'
    },
    {
        id: 2,
        image: Image2,
        name: "Kod Data.jsx dla testu",
        category: "application",
        icon: icons[1],
        showCategory: 'application'
    },
    {
        id: 3,
        image: Image3,
        name: "Strona internetowa Portfolio wersja 1",
        category: "website",
        icon: icons[0],
        showCategory: 'website'
    }
]

export default Data