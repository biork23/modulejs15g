// let koder = {
//     name:"Ismael",
//     lastName:"Monfil",
//     average: [10, 10, 10, 8, 9],
//     age: 41,

//     getAge: function () {
//         return this.age
//     },

//     get ageKoder() {
//         return this.age
//     },

//     set ageKoder(age) {
//         this.age = age
//     },

//     get fullName() {
//         return `${ this.name } ${ this.lastName }`
//     },

//     set fullName(objFullName) {
//         this.name = objFullName[0]
//         this.lastName = objFullName[1]
//     },


// }
// let koder = {
//     name:"jorge",
//     lastName:"Camarillo",
//     average: [10, 10, 10, 8, 9],
//     age: 30,

//     getAge: function () {
//         return this.age
//     },

//     get ageKoder() {
//         return this.age
//     },

//     set ageKoder(age) {
//         this.age = age
//     },

//     get fullName() {
//         return `${ this.name } ${ this.lastName }`
//     },

//     set fullName(objFullName) {
//         this.name = objFullName[0]
//         this.lastName = objFullName[1]
//     }
// }

// // Metodos
// // console.log( koder.getAge() )

// // getters
// // console.log('Edad inicial: ', koder.ageKoder)
// // console.log('Nombre completo: ', koder.fullName)

// // setters
// koder.ageKoder = 47
// koder.fullName = ['jorge luis', 'camarillo']

// // getter y setter de 
// /**
//  * 
//  * 1. getter average
//  * 2. getter, setter IMC 
//  * 3. setter Score
//  * 4. setter newProperty
//  * 
//  * 
//  */


// /*
//  Object.defineProperty( objeto , 'nuevapropiedad', {
//     get() {
//         return this.average.reduce((acc, cv) => acc += cv, 0) / this.average.length
//     }
// })
// */

// // 1. getter average
// Object.defineProperty( koder , 'averagekoder', {
//     get() {
//         return this.average.reduce((acc, cv) => acc += cv, 0) / this.average.length
//     }
// })
// // console.log(koder.averagekoder)


// // 2. getter, setter IMC

// koder.weight = 90
// koder.height = 1.73
// // console.log(koder)

// Object.defineProperty( koder , 'IMCKoder', {
//     get() {
//         return this.weight / (this.height * this.height)
//     },
//     set(value) {
//         console.log(value)
//       this.IMC = value
//     }
// })
// // console.log(koder.IMCKoder)

// let imcKoder = koder.IMCKoder
// koder.IMCKoder = imcKoder


// // 3. setter Score
// Object.defineProperty( koder , 'score', {
//     set(score) {
//         this.average.push(score)
//     }
// })

// koder.score = 8

// // 4. setter newProperty
// Object.defineProperty( koder , 'newProperty', {
//     set(objProp) {

//         console.log(objProp)
//         // koder['nueva'] = 'valor'
//         this[objProp.nameProperty] = objProp.valueProperty
//     }
// })


// koder.newProperty = {
//     nameProperty: 'gender',
//     valueProperty: 'M'
// }

// koder.newProperty = {
//     nameProperty: 'generation',
//     valueProperty: 6
// }

// koder.newProperty = {
//     nameProperty: 'random',
//     valueProperty: true
// }

// koder.newProperty = {
//     nameProperty: 'random2',
//     valueProperty: [1,9,7]
// }

// /**
//  * Estudiar DOM 
//  * CSS y HTML
//  */

// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

    let menuContainer = document.createElement('ul')
    menuContainer.classList.add('menu__booking')
    menuContainer.setAttribute('id', 'menu__booking')
    
    let arrMenu = ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']

    arrMenu.forEach( (menu) => {
        let liMenu = document.createElement('li')
        liMenu.classList.add('menu__booking__item')
        liMenu.textContent = menu
        menuContainer.appendChild(liMenu)
    })
    
    document.getElementsByTagName('body')[0].appendChild(ulMenu)






/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 * 
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 * 
 */

 let objPromesas = [
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
        titulo: 'LA MAYOR COBERTURA',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
        titulo: 'DESAYUNO EN CORTESÍA*',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
        titulo: 'CANCELACIÓN SIN COSTO**',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
        titulo: 'WIFI EN CORTESÍA',
    }
]



let container = document.createElement('section')
container.classList.add('grid__services')

objPromesas.forEach( (service) => {
    let divService = document.createElement('div')
    divService.classList.add('grid__services__item')

    let imgService = document.createElement('img')
    imgService.setAttribute('src',service.imagen)

    let titleService = document.createElement('h3')
    titleService.textContent = service.titulo

    divService.appendChild(imgService)
    divService.appendChild(titleService)
    container.appendChild(divService)
})

document.getElementsByTagName('body')[0].appendChild(container)




/**
 *  Tarea 2
 * Estudiar lo siguiente:
 * 1. innerHTML
 * 2. insertBefore()
 * 3. insertAfter()
 * 4. append()
 * 5. prepend()
 * 6. removeChild()
 * 7. DOM events
 * 
 */