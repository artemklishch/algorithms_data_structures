import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // [1,2,3]

        // ["bob", "alice", "tom"]

        int[] array = {1, 3, 5};
        array[0] = 5;
//        array[5] = 6; // error out of bounds exception
        System.out.println(Arrays.toString(array));
        System.out.println(array[0]);

        test();

        System.out.println("\n");
        Integer n1 = 5;
        Integer n2 = 5;
        System.out.println(n1 == n2); // true
        Integer n3 = new Integer(5);
        Integer n4 = new Integer(5);
        System.out.println(n3 == n4); // false
        System.out.println(10 >> 1); // 5
    }

    public static void test() {
        int a = 2; // 000000...10
        int b = 1; // 000000...01
        int c = 3; // 000000...11

        ArrayList<Integer> list = new ArrayList<>();
        list.add(2);
        System.out.println(list);
    }
}
