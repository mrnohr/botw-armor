String bodyPart = "body"

File inputFile = new File("docs/images/champion/${bodyPart}.png")


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
	"gray":"Gray"
]

colors.each {key, value ->
	File outputFile = new File("docs/images/champion/${key}-${bodyPart}.png")
	outputFile.bytes = inputFile.bytes
}
