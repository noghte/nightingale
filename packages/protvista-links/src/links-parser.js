function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

const parseLinks = (text, threshold) => {
  const rawData = text
    .split("\n")
    .slice(1)
    .map((line) => {
      const [n1, n2, _, __, p] = line.split(" ");
      return [+n1, +n2, +p];
    })
    .filter(([_, __, p]) => p > threshold);
  const n2set = {};
  const sets = [];
  rawData.forEach(([n1, n2]) => {
    if (!n2set[n1] && !n2set[n2]) {
      n2set[n1] = sets.length;
      n2set[n2] = sets.length;
      sets.push([n1, n2]);
    } else if (n2set[n1] && !n2set[n2]) {
      n2set[n2] = n2set[n1];
      sets[n2set[n1]].push(n2);
    } else if (!n2set[n1] && n2set[n2]) {
      n2set[n1] = n2set[n2];
      sets[n2set[n1]].push(n1);
    } else if (n2set[n1] && n2set[n2] && n2set[n1] !== n2set[n2]) {
      sets[n2set[n2]].forEach((n) => {
        sets[n2set[n1]].push(n);
        n2set[n] = n2set[n1];
      });
    }
  });
  return {
    links: sets.filter((_, i) => Object.values(n2set).includes(i)),
  };
};

export default parseLinks;
