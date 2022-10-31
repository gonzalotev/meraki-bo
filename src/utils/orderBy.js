const orderBy = (list, key) => list.reduce((prev, curr) => ({
  ...prev,
  [curr[key]]: [...(prev[key] || []), curr],
}), {});

export default orderBy;
