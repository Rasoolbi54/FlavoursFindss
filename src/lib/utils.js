const COLORS = {
	green: {
		bg: "bg-[#ECF7D4]",
		
	},
	orange: {
		bg: "bg-[#F9EFE1]",
		
	},
	red: {
		bg: "bg-[#FBE5E7]",
	
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};

const col = getRandomColor()