// Design a flexible OOP system to describe characters in a RPG game

// There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

// Orges - fights with club and defends with shield

// Peons - fights with club and defends with shield

// Knights - fights with a Sword and defends with Armor

// Archer - fights with Bow and Arrow and has only is tunic to protect them

// All Characters can collect gold and this will always be the same for every new type of character

// At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

// Hint: To complete this assignment you will need multiple classes and interfaces and an Abstract class

abstract class Characters {
    protected name$ : string
    constructor (name:string){
        this.name$ = name
    }

    get name() {
        return this.name$
    }
}

class Orges extends Characters implements Fightable, Defendable{
    static className = 'Orges'

    constructor (name: string, public baseHealth:number, public baseAttack:number, public baseDefense:number, public weapons:string){
        super(name)
        this.weapons = weapons
        this.baseHealth = baseHealth
        this.baseAttack = baseAttack
        this.baseDefense = baseDefense
    }

    fight(target: Characters):void {
        console.log(`${this.name} swing ${this.weapons} to ${target.name}`)
    }

    defend():any {
        if (!this.baseHealth) {
            console.log(`${this.name} has been defeated`)
        } else if (this.baseDefense === 0) {
            this.baseHealth -= 2
        } else {
            console.log(`${this.name} has used its shield to defend the attack`)
            this.baseHealth -= 1
            this.baseDefense -= 2
        }
        this.showStat()
    }

    showStat():void {
        console.log(`${this.name} currently have ${this.baseHealth}, ${this.baseDefense}`)
    }

}

class Peons extends Characters implements Fightable, Defendable{
    static className = 'Peons'

    constructor (name: string, public baseHealth:number, public baseAttack:number, public baseDefense:number, public weapons:string){
        super(name)
        this.weapons = weapons
        this.baseHealth = baseHealth
        this.baseAttack = baseAttack
        this.baseDefense = baseDefense
    }

    fight(target: Characters):void {
        console.log(`${this.name} swing ${this.weapons} to ${target.name}`)
    }

    defend():any {
        if (!this.baseHealth) {
            console.log(`${this.name} has been defeated`)
        } else if (this.baseDefense === 0) {
            this.baseHealth -= 2
        } else {
            console.log(`${this.name} has used its shield to defend the attack`)
            this.baseHealth -= 1
            this.baseDefense -= 2
        }
        this.showStat()
    }

    showStat():void {
        console.log(`${this.name} currently have ${this.baseHealth}, ${this.baseDefense}`)
    }
}

class Archer extends Characters implements Fightable, Defendable{
    static className = 'Archer'

    constructor (name: string, public baseHealth:number, public baseAttack:number, public baseDefense:number, public weapons:string){
        super(name)
        this.weapons = weapons
        this.baseHealth = baseHealth
        this.baseAttack = baseAttack
        this.baseDefense = baseDefense
    }

    fight(target: Characters):void {
        console.log(`${this.name} swing ${this.weapons} to ${target.name}`)
    }

    defend():any {
        if (!this.baseHealth) {
            console.log(`${this.name} has been defeated`)
        } else if (this.baseDefense === 0) {
            this.baseHealth -= 2
        } else {
            console.log(`${this.name} has used its shield to defend the attack`)
            this.baseHealth -= 1
            this.baseDefense -= 2
        }
        this.showStat()
    }

    showStat():void {
        console.log(`${this.name} currently have ${this.baseHealth}, ${this.baseDefense}`)
    }
}

class Knights extends Characters implements Fightable, Defendable{
    static className = 'Knight'

    constructor (name: string, public baseHealth:number, public baseAttack:number, public baseDefense:number, public weapons:string){
        super(name)
        this.weapons = weapons
        this.baseHealth = baseHealth
        this.baseAttack = baseAttack
        this.baseDefense = baseDefense
    }

    fight(target: Characters):void {
        console.log(`${this.name} swing ${this.weapons} to ${target.name}`)
    }

    defend():any {
        if (!this.baseHealth) {
            console.log(`${this.name} has been defeated`)
        } else if (this.baseDefense === 0) {
            this.baseHealth -= 2
        } else {
            console.log(`${this.name} has used its shield to defend the attack`)
            this.baseHealth -= 1
            this.baseDefense -= 2
        }
        this.showStat()
    }

    showStat():void {
        console.log(`${this.name} currently have ${this.baseHealth}, ${this.baseDefense}`)
    }
}

interface Fightable {
    fight(target: Characters):void
}

interface Defendable {
    defend():any
}

interface ShowStatable {
    showStat():number
}

const orges = new Orges('orges', 5, 6, 7, 'club')
const knight = new Knights('knight', 4, 7, 5, 'sword')
orges.fight(knight)
knight.defend()
orges.fight(knight)
knight.defend()
knight.defend()
knight.defend()
knight.defend()