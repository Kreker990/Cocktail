const input_search = document.querySelector('#input_search')
const search = document.querySelector('#search')
const output =  document.querySelector('#output1')
const brend = document.querySelector('#brend')
const API_Cocktail = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
const API_id_cock = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const API_id_ingred = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

const API_first = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

search.addEventListener('click',()=>{
    output.innerHTML = ''
        getSearch()
    input_search.value = ''
})

const getSearch = async()=>{
    const url = API_first+input_search.value
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    renderCocktail(res)
}
const getIdingred = async(id_ingred)=>{
    const url = API_id_ingred+id_ingred
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    renderIdingred(res)
}
const renderIdingred= (info) => {
    output.innerHTML = ''
    info.ingredients.map((el) => {
        let div_ingred = document.createElement('div')
        let name_ingred = document.createElement('h4')
        let discription_ingred = document.createElement('p')
        let Alcohol_ingred = document.createElement('p')
        let ABV_ingred = document.createElement('p')
        name_ingred.innerHTML = el.strIngredient 

        if ( el.strAlcohol != null) {
            Alcohol_ingred.innerHTML = 'alcoholic drink: ' + el.strAlcohol
        }
        else {
            discription_ingred.innerHTML = 'alcoholic drink: none'
        }
        
        
        if ( el.strABV != null) {
            ABV_ingred.innerHTML = 'alcohol percent: ' + el.strABV
        }
        else {
            ABV_ingred.innerHTML = 'alcohol percent: none'
        }
        div_ingred.style.cssText =
        `
        background-image: url(https://png.pngtree.com/thumb_back/fh260/back_pic/03/92/49/2957e34bada471c.jpg);
        // text-align:center;
        color: black;
        font-size: 15px;
        background-color: black;
        padding: 20px;
        font-weight: bold;
        border-radius: 5px;
        `
        div_ingred.append(name_ingred,discription_ingred,Alcohol_ingred,ABV_ingred)
        output.append(div_ingred)
    })
}
const getIdCock = async(id_cock1)=>{
    const url = API_id_cock+id_cock1
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    renderIdCock(res)
}
const renderIdCock = (info) => {
    
    info.drinks.map((el) => {
        let div_id = document.createElement('div')
        let name_id = document.createElement('h4')
        let image_id = document.createElement('img')
        let glass_id = document.createElement('p')
        let instruction_id = document.createElement('p')
        image_id.style.cssText =
        `
        width:200px;
        `
        let ingredient1_id = document.createElement('p')
        let ingredient2_id = document.createElement('p')
        let ingredient3_id = document.createElement('p')
        let ingredient4_id = document.createElement('p')
        let ingredient5_id = document.createElement('p')
        let ingredient6_id = document.createElement('p')
        let ingredient7_id = document.createElement('p')
        let ingredient8_id = document.createElement('p')
        let ingredient9_id = document.createElement('p')
        let ingredient10_id = document.createElement('p')
        let ingredient11_id = document.createElement('p')
        let ingredient12_id = document.createElement('p')
        let ingredient13_id = document.createElement('p')
        let ingredient14_id = document.createElement('p')
        let ingredient15_id = document.createElement('p')
        
        if (el.strIngredient1!=null && el.strIngredient1!='') {
            ingredient1_id.innerText = '1.' + el.strIngredient1
        }
        if (el.strIngredient2!=null && el.strIngredient2!='') {
            ingredient2_id.innerText = '2.' + el.strIngredient2
        }
        if (el.strIngredient3!=null && el.strIngredient3!='') {
            ingredient3_id.innerText = '3.' + el.strIngredient3
        }
        if (el.strIngredient4!=null && el.strIngredient4!='') {
            ingredient4_id.innerText = '4.' + el.strIngredient4
        }
        if (el.strIngredient5!=null && el.strIngredient5!='') {
            ingredient5_id.innerText = '5.' + el.strIngredient5
        }
        if (el.strIngredient6!=null && el.strIngredient6!='') {
            ingredient6_id.innerText = '6.' + el.strIngredient6
        }
        if (el.strIngredient7!=null && el.strIngredient7!='') {
            ingredient7_id.innerText = '7.' + el.strIngredient7
        }
        if (el.strIngredient8!=null && el.strIngredient8!='') {
            ingredient8_id.innerText = '8.' + el.strIngredient8
        }
        if (el.strIngredient9!=null && el.strIngredient9!='') {
            ingredient9_id.innerText = '9.' + el.strIngredient9
        }
        if (el.strIngredient10!=null && el.strIngredient10!='') {
            ingredient10_id.innerText = '10.' + el.strIngredient10
        }
        if (el.strIngredient11!=null && el.strIngredient11!='') {
            ingredient11_id.innerText = '11.' + el.strIngredient11
        }
        if (el.strIngredient12!=null && el.strIngredient12!='') {
            ingredient12_id.innerText = '12.' + el.strIngredient12
        }
        if (el.strIngredient13!=null && el.strIngredient13!='') {
            ingredient13_id.innerText = '13.' + el.strIngredient13
        }
        if (el.strIngredient14!=null && el.strIngredient14!='') {
            ingredient14_id.innerText = '14.' + el.strIngredient14
        }
        if (el.strIngredient15!=null && el.strIngredient15!='') {
            ingredient15_id.innerText = '15.' + el.strIngredient15
        }


        ingredient1_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient1)
            },1000)
        })
        ingredient2_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient2)
            },1000)
        })
        ingredient3_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient3)
            },1000)
        })
        ingredient4_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient4)
            },1000)
        })
        ingredient5_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient5)
            },1000)
        })
        ingredient6_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient6)
            },1000)
        })
        ingredient7_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient7)
            },1000)
        })
        ingredient8_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient8)
            },1000)
        })
        ingredient9_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient9)
            },1000)
        })
        ingredient10_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient10)
            },1000)
        })
        ingredient11_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient11)
            },1000)
        })
        ingredient12_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient12)
            },1000)
        })
        ingredient13_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient13)
            },1000)
        })
        ingredient14_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient14)
            },1000)
        })
        ingredient15_id.addEventListener('click', () => {
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdingred(el.strIngredient15)
            },1000)
            
        })
        let div_ingredient = document.createElement('div')
        div_id.style.cssText =
        `
        border-style: inset;
        font-size:20px;
        border-color: yellow;
        border-width: 5px;
        color: white;
        background-image: url(https://img.freepik.com/free-photo/wooden-table-with-a-view-of-blurred-beverages-bar-bottle-background_43029-829.jpg);
        text-align:center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 500px;
        width: 600px;
        border-radius: 30px;
        padding: 10px;
        align-items: center;
        `
        div_ingredient.style.cssText =
        `
        // background-color: rgb(95, 57, 32);
        text-align:left;
        width: 300px;
        `
        div_ingredient.append( ingredient1_id, ingredient2_id, ingredient3_id, ingredient4_id, ingredient5_id, ingredient6_id, ingredient7_id, ingredient8_id, ingredient9_id, ingredient10_id, ingredient11_id, ingredient12_id, ingredient13_id, ingredient14_id, ingredient15_id)


        instruction_id.innerHTML = el.strInstructions
        glass_id.innerHTML = 'Glass:' + el.strGlass
        name_id.innerHTML = el.strDrink
        image_id.src = el.strDrinkThumb
        div_id.append(name_id,image_id,instruction_id,glass_id,div_ingredient)
        output.append(div_id)
    })

}
const getCocktail = async()=>{

    const url = API_Cocktail
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    renderCocktail(res)
}
const renderCocktail = (info) => {
    info.drinks.map((el) =>{
        let block_cock = document.createElement('div')
        let block_name = document.createElement('h3')
        let block_image = document.createElement('img')
        block_name.innerHTML = el.strDrink
        block_image.src = el.strDrinkThumb
        block_name.style.cssText = 
        `
            height:50px;
        `
        block_cock.style.cssText = 
        `
        margin-left: 50px;
        margin-left: 50px;
        text-align: center;
        text-align:center;
        background-color: rgb(95, 57, 32);
        width: 200px;
        color: white;
        height: 200px;
        padding-bottom: 30px;
        padding-top: 20px;
        border-radius: 20px;
        margin-bottom: 20px;
        border-style: inset;
        border-width: 3px;
        border-color: white;
        `
        block_image.style.cssText =
        `
        width: 150px;
        `
        
        block_cock.addEventListener('click', () => {
            let id_cock = el.idDrink
            output.innerHTML = ''
            let spin = document.createElement('iframe')
            spin.classList.add('spin')
            spin.setAttribute('frameborder', '0')
            spin.src = './picture/spin1.gif'
            
            output.append(spin)
            setTimeout(()=>{
                output.innerHTML = ''
                getIdCock(id_cock)
            },1000)
        })
        block_cock.append(block_name,block_image)
        output.append(block_cock)
    })
}

function loading(){
    output.innerHTML = ''
    let spin = document.createElement('iframe')
    spin.classList.add('spin')
    spin.setAttribute('frameborder', '0')
    spin.src = './picture/spin1.gif'

    output.append(spin)
    setTimeout(()=>{
        output.innerHTML = ''
        getCocktail()
    },1000)
    
}

loading()

brend.addEventListener('click', () => {
    output.innerHTML =''
    getCocktail()
})