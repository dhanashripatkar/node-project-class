 main()
function main() {
 arr = [ 16, 4, 5, 8, 9, 11, 7];
 arr = [4,5,7,8,9,11]

    target = arr[0];

let map = {}

    list = [];
	left = 0;
    right = arr.length - 1;


     while (left < right) {
          sum = arr[left] + arr[right];
         if (sum > target) {
             right--;
         } else if (sum < target) {
             left++;
         } else {
             list.push(arr[left]);
             list.push(arr[right]);
             right--
             left++
         }
     } 

     console.log(list);
}