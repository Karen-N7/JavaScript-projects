export default function Animal (species,classification){
    this.species = species
    this.classification = classification
}

export function definition(lion) {
    console.log(`${lion.species} was ${lion.classification}`)
}
