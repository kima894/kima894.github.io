const dropdown_birth = document.querySelector('#animalbirth') // Get the dropdown menu

// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	collectionList.innerHTML = "";

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


dropdown_birth.onchange = () => {
	const all = localData.filter(dog => dog.animalbirth == '');
    const year0 = localData.filter(dog => dog.animalbirth == '2000');
	const year1 = localData.filter(dog => dog.animalbirth == '2001');
	const year2 = localData.filter(dog => dog.animalbirth == '2002');
	const year3 = localData.filter(dog => dog.animalbirth == '2003');
	const year4 = localData.filter(dog => dog.animalbirth == '2004');
	const year5 = localData.filter(dog => dog.animalbirth == '2005');
	const year6 = localData.filter(dog => dog.animalbirth == '2006');
	const year7 = localData.filter(dog => dog.animalbirth == '2007');
	const year8 = localData.filter(dog => dog.animalbirth == '2008');
	const year9 = localData.filter(dog => dog.animalbirth == '2009');
	const year10 = localData.filter(dog => dog.animalbirth == '2010');
	const year11 = localData.filter(dog => dog.animalbirth == '2011');
	const year12 = localData.filter(dog => dog.animalbirth == '2012');
	const year13 = localData.filter(dog => dog.animalbirth == '2013');


	if (dropdown_birth.value == '2000'){
		renderItems(year0);
		console.log(localData);
	}
    else if (dropdown_birth.value == '2001') {
		renderItems(year1)
	
	}
	else if (dropdown_birth.value == '2002') {
		renderItems(year2)
	
	}
	else if (dropdown_birth.value == '2003') {
		renderItems(year3)
	
	}
    else if (dropdown_birth.value == '2004') {
		renderItems(year4)
	
	}
	else if (dropdown_birth.value == '2005') {
		renderItems(year5)
	
	}
	else if (dropdown_birth.value == '2006') {
		renderItems(year6)
	
	}
	else if (dropdown_birth.value == '2007') {
		renderItems(year7)
	
	}
	else if (dropdown_birth.value == '2008') {
		renderItems(year8)
	
	}
    else if (dropdown_birth.value == '2009') {
		renderItems(year9)
	
	}
	else if (dropdown_birth.value == '2010') {
		renderItems(year10)
	
	}
	else if (dropdown_birth.value == '2011') {
		renderItems(year11)
	
	}
	else if (dropdown_birth.value == '2012') {
		renderItems(year12)
	
	}
	else if (dropdown_birth.value == '2013') {
		renderItems(year13)
	
	}
    else if (dropdown_birth.value == '2014') {
		renderItems(year14)
	
	}
	else  {
		renderItems(all);	
	}

	// console.log(breed)
}






// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		localData = collection
		// parseData(localData)
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})




