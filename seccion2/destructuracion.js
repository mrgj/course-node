let deadpool ={
    nombre: 'wade',
    apellido: 'wiston',
    poder: 'regenaracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder }`

    }
};

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);



// console.log(deadpool.getNombre());