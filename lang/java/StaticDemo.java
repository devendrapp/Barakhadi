public class StaticDemo {
    
    public static int num=10; //Shared across all instances of this class.

    static{
        
        System.out.println("Static Block executes once on class load");
        System.out.println("Static variable : Num="+num);
    }

    public static void main(String[] args){
        System.out.println("Static: Program Entry point Function");
        staticMethod();
    }

    public static void staticMethod(){ //This method can not access non static members of class.
        System.out.println("From Static Method");
    }
}
