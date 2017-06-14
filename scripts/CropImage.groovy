package scripts

import java.awt.Image
import java.awt.image.BufferedImage
import javax.imageio.ImageIO

class CropImage {
	File inputFile
	File outputDir

	final Map headCropParams = [x: 750, y: 0, w: 350, h:165]
	final Map bodyCropParams = [x: 750, y: 166, w: 350, h:192]
	final Map legsCropParams = [x: 750, y: 358, w: 350, h:340]

	public CropImage(File inputFile, File outputDir) {
		this.inputFile = inputFile
		this.outputDir = outputDir
	}

	public void cropImage() {
		println "Going to crop ${inputFile}"
		String name = inputFile.name[0..-5]

		println "    head..."
		File outputFile = new File("${name}-head.png", outputDir)
		doCropping(inputFile, outputFile, headCropParams)

		println "    body..."
		outputFile = new File("${name}-body.png", outputDir)
		doCropping(inputFile, outputFile, bodyCropParams)

		println "    legs..."
		outputFile = new File("${name}-legs.png", outputDir)
		doCropping(inputFile, outputFile, legsCropParams)
	}

	private void doCropping(File inputFile, File outputFile, Map cropParams) {
		Image src = ImageIO.read(inputFile)

		BufferedImage dst = new BufferedImage(cropParams.w, cropParams.h, BufferedImage.TYPE_INT_ARGB)
		dst.getGraphics().drawImage(src, 0, 0, cropParams.w, cropParams.h, cropParams.x, cropParams.y, cropParams.x + cropParams.w, cropParams.y + cropParams.h, null)

		ImageIO.write(dst, "png", outputFile)
	}
}
