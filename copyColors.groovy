String bodyPart = "legs"
String set = "phantom-ganon"

File inputFile = new File("docs/images/${set}/${bodyPart}.png")


assert inputFile.exists()

def colors = [
	"blue":"Blue",
	"red":"Red",
	"yellow":"Yellow",
	"white":"White",
	"black":"Black",
	"purple":"Purple",
	"green":"Green",
	"light-blue":"Light Blue",
	"navy":"Navy",
	"orange":"Orange",
	"peach":"Peach",
	"crimson":"Crimson",
	"light-yellow":"Light Yellow",
	"brown":"Brown",
	"gray":"Gray",
	"undyed":"Original"
]

colors.each {key, value ->
	File outputFile = new File("docs/images/${set}/${key}-${bodyPart}.png")
	outputFile.bytes = inputFile.bytes
}
