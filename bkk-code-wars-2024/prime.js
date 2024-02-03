function war() {
  let count = 0;
  let w = 210;
  let h = 297;

  while (w > 2 || h > 2) {
    if (w >= h) w /= 2;
    else h /= 2;

    count++;
  }
  return count;
}
