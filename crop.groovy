import scripts.*

String setName = "vah-ruta"

File sourceDir = new File("raw/${setName}")
assert sourceDir.exists()

File outputDir = new File("docs/images/${setName}")
if(outputDir.exists()) {
	println "Deleting output directory"
	outputDir.delete()
}

println "Creating new output directory"
outputDir.mkdirs()

sourceDir.eachFile { inputFile ->
	CropImage cropper = new CropImage(inputFile, outputDir)
	cropper.cropImage()
}
