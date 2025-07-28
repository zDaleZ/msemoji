const compare = (a, b) => {
  // TODO: Remove sorting logic once the upstream bug is addressed.
  // https://github.com/devongovett/regexgen/issues/31
  // Longest strings first.
  const aLength = [...a].length;
  const bLength = [...b].length;
  if (aLength > bLength) return -1;
  if (aLength < bLength) return 1;
  // Lengths are equal; sort lexicographically from a-z.
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const generateIndexStrings = (array) => {
  const processed = getSequences(array);
  const output = processed.join('\n') + '\n';
  return output;
};

const getSequences = (seq) => {
  const sequences = [...seq];
  sequences.sort(compare).sort();
  return sequences;
};

module.exports = generateIndexStrings;
