import { getWalkers } from "./database.js"
import { getUniqueCities } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.getAttribute('data-type') === 'city') {

        
            const cityTarget = clickEvent.target
            let walkerInfo = []
            for (const walker of walkers) {
                if (walker.city === cityTarget.dataset.city) {
                    walkerInfo.push(`${walker.name} is servicing this city. `
                    )
                }
            }
            window.alert(walkerInfo)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ol>"
    const uniqueCities = getUniqueCities() 

    for (const city of uniqueCities) {
        citiesHTML += `<li data-type="city"
                           data-city="${city}">${city}
        </li>`
    }
    citiesHTML += "</ol>"
    return citiesHTML
}

