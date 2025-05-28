// flexgrow.js

function calculateFlexGrow(expectedLeft, expectedRight, basisMobile) {
  const growLeft = expectedLeft - basisMobile;
  const growRight = expectedRight - basisMobile;
  const availableGrow = growLeft + growRight;

  if (availableGrow === 0) {
    return {
      left: 'flex-0',
      right: 'flex-0',
    };
  }

  let rawLeft = (growLeft / availableGrow) * 10;
  let rawRight = (growRight / availableGrow) * 10;

  let roundedLeft = Math.round(rawLeft * 10) / 10;
  let roundedRight = Math.round(rawRight * 10) / 10;

  const total = roundedLeft + roundedRight;
  const diff = +(10 - total).toFixed(1);

  if (diff !== 0) {
    if (Math.abs(diff) <= 0.1) {
      if (rawLeft > rawRight) {
        roundedLeft = +(roundedLeft + diff).toFixed(1);
      } else {
        roundedRight = +(roundedRight + diff).toFixed(1);
      }
    }
  }

  const formatFlex = (value) =>
    Number.isInteger(value) ? `flex-${value}` : `flex-[${value}]`;

  return {
    left: formatFlex(roundedLeft),
    right: formatFlex(roundedRight),
  };
}

// CLI usage
const [, , leftArg, rightArg, basisArg] = process.argv;

if (!leftArg || !rightArg || !basisArg) {
  console.error(
    'Usage: node flexgrow.js <expectedLeft> <expectedRight> <basisMobile>'
  );
  process.exit(1);
}

const expectedLeft = parseFloat(leftArg);
const expectedRight = parseFloat(rightArg);
const basisMobile = parseFloat(basisArg);

const result = calculateFlexGrow(expectedLeft, expectedRight, basisMobile);
console.log(`Left: ${result.left}`);
console.log(`Right: ${result.right}`);
