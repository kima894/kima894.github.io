const dropdown = document.querySelector('#animalgender') // Get the dropdown menu

// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach((item) => {
		const listItem = document.createElement('li') // Make the `li`


		// You can make each element inside of that…
		const itemAnimalName = document.createElement('h2') // Make an `h2`
		itemAnimalName.innerHTML = item.animalname // Put the JSON title inside
		listItem.appendChild(itemAnimalName) // And add it to the `li`!

		// const itemImage = document.createElement('img') // And an image
		// itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		// listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Born in <time>${item.animalbirth}</time></p>
				<p>Breed name: <em>${item.breedname}</em></p>
				<p>Gender: <em>${item.animalgender}</em></p>
				<p>Licensed issue date: <em>${item.licenseissueddate}</em></p>
				<p>Licensed Expired date: <em>${item.licenseexpireddate}</em></p>
				</a>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.alsoWriter) { // If this is `false`
		// 	listItem.classList.add('faded') // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

// collection.forEach(dog => {
// 	if (dog.breedname == 'Beagle') beagleCount = beagleCount + 1 // Increment the counter
// 	// if (squirrel.breedname == 'Beagle') beagleCount++ // Shorthand for incrementing
// 	else pugcount = pugcount + 1
// })


// 	console.log('Beagle: ' + beagleCount)
// 	console.log('Pug: ' + pugcount)


let localData = [] // Set up an empty object for our local data (`let` because it will change)


dropdown.oninput = () => {
	// Filter the locally-copied data
	const genderF = localData.filter(dog => dog.animalgender == 'F')
	const genderM = localData.filter(dog => dog.animalgender == 'M')

	// Parse either set depending on the dropdown value
	if (dropdown.value == 'Female') renderItems(genderF)
	else if (dropdown.value == 'Male') renderItems(genderM)
	else renderItems(localData) // Send the whole, unfiltered dataset

	console.log('F' + animalbirth + animalgender + animalname)
}


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		localData = collection
		parseData(localData)
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})




