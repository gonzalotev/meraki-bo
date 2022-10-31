const groupBy = (list, key) => list.reduce((prev, curr) => ({
  ...prev,
  [curr[key]]: [...(prev[curr[key]] || []), curr],
}), {});

export default groupBy;
