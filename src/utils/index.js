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