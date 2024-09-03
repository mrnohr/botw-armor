import java.awt.Image
import java.awt.image.BufferedImage
import javax.imageio.ImageIO
import java.io.File

class CropImage {
    File inputFile
    File outputDir

    final Map headCropParams = [x: 750, y: 0, w: 350, h: 165] //750x is mid, 0y is mid
    final Map bodyCropParams = [x: 750, y: 166, w: 350, h: 192] //166y is mid
    final Map legsCropParams = [x: 750, y: 356, w: 350, h: 340] //356y is mid

    final Map headCropUndyedParams = [x: 482, y: 27, w: 284, h: 134, scale: 1.2324]
    final Map bodyCropUndyedParams = [x: 482, y: 162, w: 284, h: 156, scale: 1.2324]
    final Map legsCropUndyedParams = [x: 482, y: 319, w: 284, h: 276, scale: 1.2324]

    public CropImage(File inputFile, File outputDir) {
        this.inputFile = inputFile
        this.outputDir = outputDir
    }

    public void cropImage() {
        println "Going to crop ${inputFile}"
        String name = inputFile.name[0..-5]

        String extension = inputFile.name.lastIndexOf('.') > 0 ?
                    inputFile.name.substring(inputFile.name.lastIndexOf('.') + 1) : ""

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

    public void cropUndyedImage() {
        println "Going to crop ${inputFile}"
        String name = inputFile.name[0..-5]

        println "    head..."
        File outputFile = new File("${name}-head.png", outputDir)
        doCropping(inputFile, outputFile, headCropUndyedParams)

        println "    body..."
        outputFile = new File("${name}-body.png", outputDir)
        doCropping(inputFile, outputFile, bodyCropUndyedParams)

        println "    legs..."
        outputFile = new File("${name}-legs.png", outputDir)
        doCropping(inputFile, outputFile, legsCropUndyedParams)
    }

    private void doCropping(File inputFile, File outputFile, Map cropParams) {
        Image src = ImageIO.read(inputFile)

        int outputWidth = (cropParams.w * (cropParams.scale ?: 1)) as int
        int outputHeight = (cropParams.h * (cropParams.scale ?: 1)) as int

        BufferedImage dst = new BufferedImage(outputWidth, outputHeight, BufferedImage.TYPE_INT_ARGB)
        dst.getGraphics().drawImage(src, //source image
            0, //destination x first corner
            0, //destination y first corner
            outputWidth, //destination x second corner
            outputHeight, //destination y second corner
            cropParams.x, //source x first corner
            cropParams.y, //source y first corner
            cropParams.x + cropParams.w, //source x second corner
            cropParams.y + cropParams.h, //source y second corner
            null) //observer

        ImageIO.write(dst, "png", outputFile)
    }

    // Entry point for script execution
    static void main(String[] args) {
        File inputFile = new File("") //insert input file path location between quotations
        File outputDir = new File("") //insert output path location between quotations
        CropImage cropImage = new CropImage(inputFile, outputDir)
        cropImage.cropImage()
    }
}
