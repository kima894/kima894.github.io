// Your data URL
const url = 'https://data.cityofnewyork.us/resource/nu7n-tubp.json'
const graph = document.querySelector('#animalgender') // Get out graph element (`const`, does not change)
const dropdown = document.querySelector('#animalgender') // Get the dropdown menu

let localData = [] // Set up an empty object for our local data (`let` because it will change)

// Do something with the data!
const parseData = (data) => {
	// Set up variables for the counts
	let beagleCount = 0 // These are `let` because they will change
	let chihuahuaCount = 0
	let poodleCount = 0
	let pugcount = 0

	// Go through each item in the object
	data.forEach(dog => {
		if (dog.breedname == 'Beagle') beagleCount = beagleCount + 1 // Increment the counter
		// if (squirrel.breedname == 'Beagle') beagleCount++ // Shorthand for incrementing
		else if (dog.breedname == 'Chihuahua') chihuahuaCount = chihuahuaCount + 1
		else if (dog.breedname == 'Poodle') poodleCount = poodleCount + 1
		else pugcount = pugcount + 1
	})

	// Some telemetry!
	console.log('Beagle: ' + beagleCount)
	console.log('Chihuahua: ' + chihuahuaCount)
	console.log('Poodle: ' + poodleCount)
	console.log('Pug: ' + pugcount)

	// Add CSS variables (custom properties) on the graph, with the counts
	graph.style.setProperty('--beagle', beagleCount)
	graph.style.setProperty('--chihuahua', chihuahuaCount)
	graph.style.setProperty('--poodle', poodleCount)
	graph.style.setProperty('--pug', pugcount)
}

// Watch for any change on the dropdown
dropdown.oninput = () => {
	// Filter the locally-copied data
	const genderF = localData.filter(dog => dog.animalgender == 'F')
	const genderM = localData.filter(dog => dog.animalgender == 'M')

	// Parse either set depending on the dropdown value
	if (dropdown.value == 'Female') parseData(genderF)
	else if (dropdown.value == 'Male') parseData(genderM)
	else parseData(localData) // Send the whole, unfiltered dataset
}


// Go get the data!
fetch(url + '?$limit=50000') // Appends a higher limit; the default is only 1000
	.then(response => response.json())
	.then(data => {
			localData = data // Save the data to our local variable, so we don’t have to re-request
			parseData(localData) // And parse it!
		})

// 2:28