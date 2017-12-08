import scripts.*

//island-lobster
//ravio
//zant
//royal-guard
//phantom-ganon
String setName = "phantom-ganon"

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
	//cropper.cropImage()
	cropper.cropUndyedImage()
}
