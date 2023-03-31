let galleryItems = [
    {
        "name": "Wild Blue Phlox",
        "botanicalName": "Phlox divaricata",
        "native": "Eastern North America",
        "symbolism": "Our souls are united",
        "plantType": "Herb",
        "bloomTime": "Mid spring, Late spring, Early summer, Mid summer",
        "picture": "./assests/wild_blue_phlox.jpg"     
    },
    {
        "name": "Moss Phlox",
        "botanicalName": "Phlox subulata",
        "native": "United states",
        "symbolism": "Maternal love, charity, complicity, understanding",
        "plantType": "Herb",
        "bloomTime": "Mid spring, Late spring, Summer",
        "picture": "./assests/moss_phlox.jpg"     
    },
    {
        "name": "Red Osier Dogwood",
        "botanicalName": "Cornus sericea",
        "native": "North America",
        "symbolism": "Wishes, protection, charm, strength, purity, a proposal of marriage",
        "plantType": "Shrub",
        "bloomTime": "Summer",
        "picture": "./assests/red_osier_dogwood.jpg"     
    },
    {
        "name": "Wild Pansy",
        "botanicalName": "Viola Tricolor",
        "native": "North America",
        "symbolism": "Meditation, happiness, please miss me, memory, spirituality",
        "plantType": "Herb",
        "bloomTime": "Spring, Early summer, Winter",
        "picture": "./assests/wild_pansy.jpg"     
    },
]



function generateGalleryItems(galleryItems){

const img = document.createElement('img') // creates an image element
img.classList.add('gallery-img') // add a class of gallery-img to the image so we can access it in the css
img.src = galleryItems.picture //specifies the source of the image to be the url in our images object


//create a pargraph element

const paragraph = document.createElement("p")
//change the inner html of the paragraph to the sign name 
paragraph.innerHTML = galleryItems.name 
paragraph.classList.add('name') // add a class
// paragraph.innerHTML = 'Name: '+ galleryItems.name


const botanical = document.createElement("p")
//change the inner html of the paragraph to the sign name 
botanical.innerHTML = galleryItems.botanicalName  
botanical.classList.add('botanical') // add a class
botanical.innerHTML = 'Botanical name: '+ galleryItems.botanicalName

const origin = document.createElement("p")
//change the inner html of the paragraph to the sign name 
origin.innerHTML = galleryItems.native  
origin.classList.add('origin') // add a class
origin.innerHTML = 'Native to: '+ galleryItems.native

const type = document.createElement("p")
//change the inner html of the paragraph to the sign name 
type.innerHTML = galleryItems.plantType  
type.classList.add('type') // add a class
type.innerHTML = 'Plant type: '+ galleryItems.plantType

const meaning = document.createElement("p")
//change the inner html of the paragraph to the sign name 
meaning.innerHTML = galleryItems.symbolism  
meaning.classList.add('meaning') // add a class
meaning.innerHTML = 'Symbolism: '+ galleryItems.symbolism

const time = document.createElement("p")
//change the inner html of the paragraph to the sign name 
time.innerHTML = galleryItems.bloomTime 
time.classList.add('time') // add a class
time.innerHTML = 'Bloom time: '+ galleryItems.bloomTime

const galleryItem = document.createElement("div") // creates a new div called gallery item
    //add the paragraph into the galleryItem div
 galleryItem.appendChild(paragraph) 
galleryItem.appendChild(img); // adds the image into the div
galleryItem.appendChild(botanical) 
galleryItem.appendChild(origin) 
galleryItem.appendChild(meaning) 
galleryItem.appendChild(type) 
galleryItem.appendChild(time) 






document.querySelector('.gallery').appendChild(galleryItem) // adds the div to the gallery section we added earlier in the html


}

galleryItems.forEach(generateGalleryItems)


