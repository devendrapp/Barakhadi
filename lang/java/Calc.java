import java.util.Locale;
/*
    Perform math operations
    Use first 3 arguments from command line arguments if available.
    1st Arg: Operation
    2nd & 3rd Arg: Numbers
*/
public class Calc {
    public static void main(String[] args){
        if(args!=null && args.length>2){
            String op=args[0].toLowerCase(Locale.ENGLISH);
            int num1 =Integer.parseInt(args[1]);
            int num2 =Integer.parseInt(args[2]);
            switch(op){
                case "sum":
                    System.out.println("Sum=" +  sum(num1,num2));
                    break;
                case "diff":
                    System.out.println("Difference=" +  diff(num1,num2));
                    break;
                case "product":
                    System.out.println("Product=" +  product(num1,num2));
                    break;
                case "divide":
                    System.out.println("Quotient=" +  divide(num1,num2));
                    break;
                case "mod":
                    System.out.println("Remainder=" + mod(num1,num2));
                    break;
                default:
                    System.out.println("Invalid operation requested");
            }
        }
    }

    public static int sum(int num1,int num2){
        return num1 + num2;
    }

    public static int diff(int num1,int num2){
        return num1 - num2;
    }

    public static int product(int num1,int num2){
        return num1 * num2;
    }

    public static int divide(int num1,int num2){
        return num1 / num2;
    }

    public static int mod(int num1,int num2){
        return num1 % num2;
    }
}
