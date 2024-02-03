function sum(n) {
  console.log("Start");
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log("End");
  return result;
}
const ShowSum = ({ label, n }) => {
  const result = sum(n);
  return (
    <span>
      {label}: {result}
    </span>
  );
};

export default ShowSum;
