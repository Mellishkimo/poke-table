import { pokemonStats } from '../data/pokemonData'

export const tableSorter = {
    nameUp: { fn: (a, b) =>  {
        if (a.name < b.name) { return 1 }
        else return -1
        } 
    },
    nameDown: { fn: (a, b) =>  {
        if (b.name < a.name) { return 1 }
        else return -1
        } 
    },
    entryUp: { fn: (a, b) => a.entry - b.entry }, 
    entryDown: { fn: (a, b) => b.entry - a.entry },
    hpUp: { fn: (a, b) => a.hp - b.hp }, 
    hpDown: { fn: (a, b) => b.hp - a.hp },      
    attackUp: { fn: (a, b) => a.attack - b.attack }, 
    attackDown: { fn: (a, b) => b.attack - a.attack },
    defenseUp: { fn: (a, b) => a.defense - b.defense }, 
    defenseDown: { fn: (a, b) => b.defense - a.defense },  
    speedUp: { fn: (a, b) => a.speed - b.speed }, 
    speedDown: { fn: (a, b) => b.speed - a.speed },  
    specialUp: { fn: (a, b) => a.special - b.special }, 
    specialDown: { fn: (a, b) => b.special - a.special },
    totalUp: { fn: (a, b) => (statTotaler(a)) - (statTotaler(b))}, 
    totalDown: { fn: (a, b) => (statTotaler(b)) - (statTotaler(a))},
    avgUp: { fn: (a, b) => (statAverager(a)) - (statAverager(b))}, 
    avgDown: { fn: (a, b) => (statAverager(b)) - (statAverager(a))}
}

export const statAverager = pokemon => {
    var avg = statTotaler(pokemon)
    return (avg / 5)
}

export const statTotaler = pokemon => {
    var hp = parseInt(pokemon.hp)
    var atk = parseInt(pokemon.attack)
    var def = parseInt(pokemon.defense)
    var speed = parseInt(pokemon.speed)
    var special = parseInt(pokemon.special)
    var total = (hp + atk + def + speed + special)
    return total
}

export const statRanker = (group, name, stat) => {
        const pokemon = group.find(element => element.name === name)
        let highestRanked

        if (stat === 'hp') {
            group.sort((a, b) => b.hp - a.hp)
            highestRanked = group.find(element => element.hp === pokemon.hp)
        }
        else if (stat === 'attack') {
            group.sort((a, b) => b.attack - a.attack)
            highestRanked = group.find(element => element.attack === pokemon.attack)
        }
        else if (stat === 'defense') {
            group.sort((a, b) => b.defense - a.defense)
            highestRanked = group.find(element => element.defense === pokemon.defense)
        }
        else if (stat === 'special') {
            group.sort((a, b) => b.special - a.special)
            highestRanked = group.find(element => element.special === pokemon.special)
        }
        else if (stat === 'speed') {
            group.sort((a, b) => b.speed - a.speed)
            highestRanked = group.find(element => element.speed === pokemon.speed)
        }
        else if (stat === 'total') {
            group.sort((a, b) => statTotaler(b) - statTotaler(a))
            highestRanked = group.find(element => statTotaler(element) === statTotaler(pokemon))
        }
        
        const rank = group.indexOf(highestRanked)
        return (rank + 1)

}

export const nextEvolutionFinder = (pokemon, name) => {
    const currentPokemon = pokemon.find(element => element.name === name)
    const nextEntry = (parseInt(currentPokemon.entry) + 1)
    const nextStage = pokemon.find(element => parseInt(element.entry) === nextEntry)

    return nextStage
}

export const prevEvolutionFinder = (pokemon, name) => {
    const currentPokemon = pokemon.find(element => element.name === name)
    const prevEntry = (parseInt(currentPokemon.entry) - 1)
    const prevStage = pokemon.find(element => parseInt(element.entry) === prevEntry)

    return prevStage
}

export const generateRankGroupOptions = (pokemon) => {
    let rankGroupOptions = []
    let stageArray = []

    for (let i = 0; i < pokemonStats.length; i++) {
        if (pokemonStats[i].stage.includes(pokemon.stage)) {
            stageArray.push(pokemonStats[i])
        }
    }

    rankGroupOptions.push({ value: pokemonStats, label: 'All Pokémon' })
    rankGroupOptions.push({ value: stageArray, label: `${pokemon.stage} Pokémon` })
    if (pokemon.type.includes('/')) {
        const splitPoint = pokemon.type.indexOf('/')
        const type1 = pokemon.type.substring(0, splitPoint)
        const type2 = pokemon.type.substring(splitPoint + 1, pokemon.type.length)
        let type1Array = []
        let type2Array = []

        for (let i = 0; i < pokemonStats.length; i++) {
            if (pokemonStats[i].type.includes(type1)) {
                type1Array.push(pokemonStats[i])
            }
            if (pokemonStats[i].type.includes(type2)) {
                type2Array.push(pokemonStats[i])
            }
        }

        rankGroupOptions.push({ value: type1Array, label: `${type1} Types` })
        rankGroupOptions.push({ value: type2Array, label: `${type2} Types` })
    }
    else {
        let typeArray = []
        for (let i = 0; i < pokemonStats.length; i++) {
            if (pokemonStats[i].type.includes(pokemon.type)) {
                typeArray.push(pokemonStats[i])
            }
        }
        rankGroupOptions.push({ value: typeArray, label: `${pokemon.type} Types` })
    }

    return rankGroupOptions
}

export const generateComparisonOptions = (pokemon) => {
    let comparisonOptions = []
    pokemonStats.sort((a, b) => a.entry - b.entry)
    for (let i = 0; i < pokemonStats.length; i++) {
        if (pokemonStats[i].name !== pokemon.name) {
            comparisonOptions.push({ label: pokemonStats[i].name, value: pokemonStats[i] })
        }
    }

    return comparisonOptions
}

export const statColorParser = (statName) => {
    let color = 'black'

        switch (true) {
            case statName === 'HP':
                color = '#ff80bf'
                break
            case statName === 'Attack':
                color = '#ff5c33'
                break
            case statName === 'Defense':
                color = '#33ccff'
                break
            case statName === 'Speed':
                color = '#ffff00'
                break
            case statName === 'Special':
                color = '#cc66ff'
                break
            case statName === 'Total':
                color = '#6890f0'
                break
        }
        
        return color
}

export const borderColorParser = (stat, opposingStat) => {
    let color = 'black'
    let difference = stat - opposingStat

    switch (true) {
        case difference > 0:
            color = '#6c3'
            break
        case difference === 0:
            color = '#fc3'
            break
        default:
            color = '#f00'
            break
    }

    return color
}

export const typeColorParser = (type) => {
    let textColor
    let selectedType = type

    if (type.includes('/')) {
        var splitPoint = type.indexOf('/')
        selectedType = type.substr(0, splitPoint)
    }

    switch (true) {
        case selectedType.includes('Bug'):
            textColor = '#a8b820'
            break
        case selectedType.includes('Dragon'):
            textColor = '#5a3696'
            break
        case selectedType.includes('Electric'):
            textColor = '#f8d030'
            break
        case selectedType.includes('Fighting'):
            textColor = '#c03028'
            break
        case selectedType.includes('Fire'):
            textColor = '#f08030'
            break
        case selectedType.includes('Flying'):
            textColor = '#a890f0'
            break
        case selectedType.includes('Ghost'):
            textColor = '#705898'
            break
        case selectedType.includes('Grass'):
            textColor = '#78c850'
            break
        case selectedType.includes('Ground'):
            textColor = '#e0c068'
            break
        case selectedType.includes('Normal'):
            textColor = '#a8a878'
            break
        case selectedType.includes('Poison'):
            textColor = '#a040a0'
            break   
        case selectedType.includes('Psychic'):
            textColor = '#f85888'
            break    
        case selectedType.includes('Rock'):
            textColor = '#b8a038'
            break    
        case selectedType.includes('Water'):
            textColor = '#6890f0'
            break    
        default:
            textColor = 'black'
            break
    }
  
    return textColor
  }