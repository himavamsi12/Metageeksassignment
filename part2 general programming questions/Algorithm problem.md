**Finding giving string is palindrome or not:**
```
import java.util.Scanner;
 
class CheckPalindrome
{
   public static void main(String args[])
   {
      String str, rev = "";
      Scanner sc = new Scanner(System.in);
 
      System.out.println("Enter a string:");
      str = sc.nextLine();
 
      int length = str.length();
 
      for ( int i = length - 1; i >= 0; i-- )
         rev = rev + str.charAt(i);
 
      if (str.equals(rev))
         System.out.println(str+" is a palindrome");
      else
         System.out.println(str+" is not a palindrome");
 
   }
}```

* In this program we are taking two variables "str" and "rev" as empty which datatype is string
* Taking input using scanner package and created a object as sc. taking input and storing in "str".
* Using for loop, iterating the input string in reverse order and storing each character in to "rev"
* Finally, checking the input string "str" with "rev" with equal() function if both strings are equal it prints "given string is palindrome" otherwise it prints "given string is not a palindrome"
 
