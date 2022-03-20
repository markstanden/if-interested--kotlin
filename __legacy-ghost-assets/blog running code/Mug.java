
/**
 * Write a description of class Mug here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Mug
{
    private int height;
    private int width;
    private String constructionMaterial;
    
    public Mug(String constructionMaterial, int height, int width) {
        this.height = height;
        this.width = width;
        this.constructionMaterial = constructionMaterial;
    }
    
 
    public int getHeight() {
        return height;
    }
    
    public int getWidth() {
        return width;
    }
    
    public String getConstructionMaterial() {
        return constructionMaterial;
    }
    
}
