function findOptimalBlock(blocks, reqs) {
  let bestIndex = -1;
  let bestDistance = Infinity;
  
  for (let i = 0; i < blocks.length; i++) {
    let maxDistance = 0;
    for (let req of reqs) {
      if (blocks[i][req]) {
        continue;
      } else {
        // find the closest block with the required building
        let distance = 1;
        let found = false;
        while (i + distance < blocks.length) {
          if (blocks[i + distance][req]) {
            found = true;
            break;
          }
          distance++;
        }
        if (!found) {
          return -1;
        }
        maxDistance = Math.max(maxDistance, distance);
      }
    }
    if (maxDistance < bestDistance) {
      bestDistance = maxDistance;
      bestIndex = i;
    }
  }
  return bestIndex;
}