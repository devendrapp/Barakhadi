public class Args {
    public static void main(String[] args){
        if(args!=null && args.length>0){
            for(String s: args){
                System.out.println(s);
            }
        }
    }
}
