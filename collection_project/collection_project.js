let galleryItems = [
        {
            "name": "Siberian Squill",
            "botanicalName": "Scilla siberica",
            "native": "Southwestern Russia, the Caucasus, and Turkey",
            "symbolism": "Loyalty, fidelity, and consistency",
            "plantType": "Herb",
            "bloomTime": "Spring",
            "picture": "./collection_project/assests/siberian_squill.jpg"
        },
        {
            "name": "Saucer Magnolia",
            "botanicalName": "Magnolia soulangeana",
            "native": "Europe",
            "symbolism": "Longevity and perseverance, nobility, love for nature, feminine sweetness and beauty",
            "plantType": "Tree",
            "bloomTime": "Spring",
            "picture": "/assests/saucer_magnolia.jpg"   
        },
        {
            "name": "Grape Hyacinth",
            "botanicalName": "Muscari neglectum",
            "native": "Eurasia",
            "symbolism": "Fertility, sport, play",
            "plantType": "Herb",
            "bloomTime": "Spring",
            "picture": "/assests/grape_hyacinth.jpg"   
        },
        {
            "name": "Chinese Wisteria",
            "botanicalName": "Wisteria sinensis",
            "native": "China",
            "symbolism": "Live for love, fertility, long life, devotion, creativity",
            "plantType": "Vine",
            "bloomTime": "Mid spring, late spring, early summer",
            "picture": "/assests/chinese_wisteria.jpg"      
        },
        {
            "name": "Didier's Tulip",
            "botanicalName": "Tulipa gesneriana",
            "native": "Southwest asia",
            "symbolism": "Love, charity, fame, beauty, blessing, eternity, eternal blessing",
            "plantType": "Herb",
            "bloomTime": "Spring , late winter", 
            "picture": "/assests/didier's_tulip.jpg"    
        },
        {
            "name": "Bigleaf Hydrangea",
            "botanicalName": "Hydrangea macrophylla",
            "native": "Japan",
            "symbolism": "Gratitude for understanding, strong emotions, apology, boastfulness",
            "plantType": "Shrub",
            "bloomTime": "Summer",   
            "picture": "/assests/bigleaf_hydrangea.jpg"  
        },
        {
            "name": "Japanese Cherry",
            "botanicalName": "Prunus serrulata",
            "native": "Japan",
            "symbolism": "Love, divination, birth, death, heroism, violence, life is short and",
            "plantType": "Tree",
            "bloomTime": "Spring",   
            "picture": "/assests/japanese_cherry.jpg"  
        },
        {
            "name": "Wild Blue Phlox",
            "botanicalName": "Phlox divaricata",
            "native": "Eastern North America",
            "symbolism": "Our souls are united",
            "plantType": "Herb",
            "bloomTime": "Mid spring, Late spring, Early summer, Mid summer",
            "picture": "/assests/wild_blue_phlox.jpg"     
        },
        {
            "name": "Moss Phlox",
            "botanicalName": "Phlox subulata",
            "native": "United states",
            "symbolism": "Maternal love, charity, complicity, understanding",
            "plantType": "Herb",
            "bloomTime": "Mid spring, Late spring, Summer",
            "picture": "/assests/moss_phlox.jpg"     
        },
        {
            "name": "Siberian Bugloss",
            "botanicalName": "Brunnera macrophylla",
            "native": "Caucasus",
            "symbolism": "Wisdom and logic",
            "plantType": "Herb",
            "bloomTime": "Spring, summer",
            "picture": "/assests/siberian_bugloss.jpg"     
        },
        {
            "name": "Red Osier Dogwood",
            "botanicalName": "Cornus sericea",
            "native": "North America",
            "symbolism": "Wishes, protection, charm, strength, purity, a proposal of marriage",
            "plantType": "Shrub",
            "bloomTime": "Summer",
            "picture": "/assests/red_osier_dogwood.jpg"     
        },
        {
            "name": "Spanish Bluebells",
            "botanicalName": "Hyacinthoides hispanica",
            "native": "Iberian Peninsula",
            "symbolism": "Humility, consistency",
            "plantType": "Herb",
            "bloomTime": "Spring",
            "picture": "/assests/Spanish_bluebells.jpg"     
        },
        {
            "name": "Guelder Rose",
            "botanicalName": "Viburnum opulus",
            "native": "the woodlands of the European deciduous forest, north Asia and north Africa",
            "symbolism": "Love, psychic powers, healing, holiness, cultural roots, the beauty of a young woman",
            "plantType": "Shrub",
            "bloomTime": "Late spring, Early summer, Mid summer",
            "picture": "/assests/Guelder-rose.jpg"     
        },
        {
            "name": "Wild Pansy",
            "botanicalName": "Viola Tricolor",
            "native": "North America",
            "symbolism": "Meditation, happiness, please miss me, memory, spirituality",
            "plantType": "Herb",
            "bloomTime": "Spring, Early summer, Winter",
            "picture": "/assests/wild_pansy.jpg"     
        },
        {
            "name": "Garden Cosmos",
            "botanicalName": "Cosmos bipinnatus",
            "native": "Mexico",
            "symbolism": "Persistent happiness, order, harmony",
            "plantType": "Herb",
            "bloomTime": "Mid summer, Late summer, Fall, Early winter",
            "picture": "/assests/garden_cosmos.jpg"     
        },
        {
            "name": "Horned Pansy",
            "botanicalName": "Viola cornuta",
            "native": "Northern Spain",
            "symbolism": "Meditation, happiness, please miss me, memory, spirituality",
            "plantType": "Herb",
            "bloomTime": "Spring, Summer, Early fall, Mid fall",
            "picture": "/assests/Horned_pansy.jpg"     
        },
        {
            "name": "Faassen's Catnip",
            "botanicalName": "Nepeta faassenii",
            "native": "Middle east",
            "symbolism": "Happiness, fertility, and love",
            "plantType": "Herb",
            "bloomTime": "Late spring, summer, fall",
            "picture": "/assests/Faassen's_catnip.jpg"     
        },
        {
            "name": "Woodland Sage",
            "botanicalName": "Salvia nemorosa",
            "native": "Europe and eastern asia",
            "symbolism": "Family happiness, family values",
            "plantType": "Herb",
            "bloomTime": "Late spring, summer, fall",
            "picture": "/assests/woodland_sage.jpg"     
        },
        {
            "name": "Horse Chestnut Buckeye",
            "botanicalName": "Aesculus hippocastanum",
            "native": "Southeastern europe",
            "symbolism": "Luxury, uniqueness, growth, longevity",
            "plantType": "Tree",
            "bloomTime": "Spring",
            "picture": "/assests/horse_chestnut_buckeye.jpg"     
        },
        {
            "name": "Spider Flower",
            "botanicalName": "Tarenaya hassleriana",
            "native": "South america",
            "symbolism": "True love, elope with me",
            "plantType": "Herb",
            "bloomTime": "Summer, Fall",
            "picture": "/assests/spider_flower.jpg"     
        },
        {
            "name": "Wild Daffodil",
            "botanicalName": "Narcissus pseudonarcissus",
            "native": "Forest of the mediterranean",
            "symbolism": "Regard, Unrequited love, respect, new life, new beginning",
            "plantType": "Herb",
            "bloomTime": "Spring",
            "picture": "/assests/wild_daffodil.jpg"     
        }
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
    
    
    






















// // Function to render your items
// const renderItems = (collection) => {
// 	// The `ul` where the items will be inserted
// 	const collectionList = document.getElementById('collection')


// 	// Loop through each item in the collection array
// 	collection.forEach((item) => {
// 		const listItem = document.createElement('li') // Make the `li`


// 		// You can make each element inside of that…
// 		const itemTitle = document.createElement('h2') // Make an `h2`
// 		itemTitle.innerHTML = item.title // Put the JSON title inside
// 		listItem.appendChild(itemTitle) // And add it to the `li`!

// 		const itemImage = document.createElement('img') // And an image
// 		itemImage.src = item.posterImage // Set the `src` attribute from the JSON
// 		listItem.appendChild(itemImage) // And add that too


// 		// This can get annoying, so we can use “template literals” instead
// 		const itemDetails =
// 			`
// 				<p>Released in <time>${item.name}</time></p>
// 				<p><em>${item.botanicalName}</em></p>
// 				<a href="${item.picture}">

// 			`
// 		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

// 		// You can build logic from your data, too

// 		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
// 	})
// }



// // Fetch gets your JSON file…
// fetch('assets/collection.json')
// 	.then(response => response.json())
// 	.then(collection => {
// 		// And passes the data to the function, above!
// 		renderItems(collection.reverse()) // In reverse order
// 	})
