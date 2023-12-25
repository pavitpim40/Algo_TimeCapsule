/*
	PSEUDO-CODE
	 - เลือกตำแหน่งหนึ่งใน array เพื่อนำสมาชิกในตำแหน่งนั้นมาตรวจสอบ
	 - ถ้าค่าของสมาชิกบในตำแหน่งนั้นเท่ากับค่าค้นหา ให้จบการทำงานพร้อมคืนค่าตำแหน่งเป็นผลลัพธ์
	 - ถ้าค่าของสมาชิกในตำแหน่งนั้นนั้นน้อยกว่าค่าค้นหา เราจะไม่สนใจตำแหน่งนั้นและตัวเลขทางซ้ายของตำแหน่งนั้นทั้งหมด
	 - ถ้าค่าของสมาชิกในตำแหน่งนั้นนั้นมากกว่าค่าค้นหา เราจะไม่สนใจตำแหน่งนั้นและตัวเลขทางขวาของตำแหน่งนั้นทั้งหมด
	 - ให้ทำการค้นหาต่อไปเรื่อยๆ 
	 - หากไม่เจอตำแหน่งใดที่มีค่าสมาชิกเท่ากับค่าค้นหา ให้จบการทำงานพร้อมคืนค่า -1 เป็นผลลัพธ์

*/

// Mem O(c)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

// Approach2 - Recursive
// Mem O(logN)
// function binarySearch(arr, target) {
//   if (arr.length == 0) return -1;

//   let midIndex = Math.floor(arr.length / 2);
//   if (arr[midIndex] == target) return midIndex;
//   else if (target < arr[midIndex]) return binarySearch(arr.slice(0, midIndex), target);
//   else if (target > arr[midIndex]) {
//     let foundIndex = binarySearch(arr.slice(midIndex + 1), target);
//     if (foundIndex != -1) return midIndex + 1 + foundIndex;
//     return foundIndex;
//   }
// }

module.exports = binarySearch;
