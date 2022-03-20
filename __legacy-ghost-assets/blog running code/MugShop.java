public class MugShop
{
    public MugShop()
    {
        // Create a new Mug made from Bone China, 100 high, 60 wide.
        Mug bestMug = new Mug("Bone China", 100, 60);
        
        // Create a locally scoped variable material, and 
        // initialise it to the value returned from our getter function.
        String material = bestMug.getConstructionMaterial();
        
        System.out.println(material); //"Bone China"
    }

}
