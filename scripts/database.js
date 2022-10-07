const database = {
    fish: [
        {
            name: "Marlin",
            species: "Clownfish",
            length: 10,
            diet: "Zooplankton",
            location: "Pacific Ocean"
        },
        {
            name: "Commander",
            species: "Northern Pike",
            length: 50,
            diet: "Fish",
            location: "Hudson Bay"
        },
        {
            name: "Turk",
            species: "Mahi-mahi",
            length: 100,
            diet: ["Flying fish ", "crabs ", "squid"],
            location: "Pacific Ocean"
        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}