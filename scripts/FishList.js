import { getFish } from './database.js'

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <h3 class="fish_name">${fish.name}</h3>
        <div class="fish_species">${fish.species}</div>
        <div class="fish_length">${fish.length}</div>
        <div class="fish_location">${fish.location}</div>
        <div class="fish_diet">${fish.diet}</div>
    </section>
    `
    }
    htmlString += `</article>`
    return htmlString
}