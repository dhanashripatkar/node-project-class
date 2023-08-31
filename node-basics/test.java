import java.util.ArrayList;
import java.util.Arrays;

public class test {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        int[] arr = { 16, 4, 5, 8, 9, 11, 7 };
        int target = arr[0];
        Arrays.sort(arr);

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            int sum = arr[left] + arr[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                list.add(arr[left]);
                list.add(arr[right]);
                left++;
                right--;
            }
        }

        System.out.println(list);
    }

}