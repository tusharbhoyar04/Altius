import java.util.*;
class Main{
    public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    int n=sc.nextInt();
    int[] arr=new int[n];
    for(int i=0;i<n;i++){
        arr[i]=sc.nextInt();
    }
    int sum=maxsum(n,arr);
    System.out.println(sum)
}
public static int maxsum(int n,int[] arr){
int maxsum=Math.MIN_VALUE;
 int csum=0;
for(int i=0;i<n;i++){
   
    // for(int j=i;j<n;j++){
    //     sum+=arr[i];
    // }
    csum=Math.max(arr[i],csum);
    maxsum=Math.max(maxsum,csum);
}
return maxsum;

}