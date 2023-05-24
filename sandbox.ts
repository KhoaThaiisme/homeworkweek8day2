class Car {
    constructor(public brand:string, public model:string, protected year$:number){}
    
    get year():number {
        return this.year$
    }

    brake(){}
    drive(){}
    honk(){}
}

class SmartCar extends Car {
    constructor(brand:string, model:string, year:number){
        super(brand, model, year)
    }
    
    drive():void{
        console.log('hummmmm')
    }
    honk():void{
        console.log('MMmmeep')
    }
    brake():void{
        console.log('squeeel')
    }
}

class Truck extends Car {
    constructor(brand:string, model:string, year:number){
        super(brand, model, year)
    }
    
    drive():void {
        console.log('vrooom')
    }
    honk():void {
        console.log('BWaaaaaaahp')
    }
    brake():void{
        console.log('squeeel')
    }
}


const tesla = new SmartCar('tesla', '3', 2020)
tesla.honk()
console.log(tesla.year)

interface MusicMedia {
    play():void 
}

class CD implements MusicMedia{
    constructor(){}
    
    play():void {
        console.log('Spins and red with Laser')
    }
}

class Tapes implements MusicMedia {
    constructor(){}
    
    play():void {
        console.log('Magnetic Tape is read')
    }
}


class Records implements MusicMedia {
    constructor(){}
    
    play():void {
        console.log('Needle reads grooves')
    }
}

let playableArray: MusicMedia[] = [new CD, new Tapes, new Records]
for(const p of playableArray) {
    p.play()
}
