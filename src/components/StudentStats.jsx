function StudentStats({ students }) {
  const total = students.length;

  const passing = students.filter(
    (student) => student.marks >= 35
  ).length;

  const failing = students.filter(
    (student) => student.marks < 35
  ).length;

  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Students</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card passing">
        <h3>Passing</h3>
        <p>{passing}</p>
      </div>

      <div className="stat-card failing">
        <h3>Failing</h3>
        <p>{failing}</p>
      </div>
    </div>
  );
}

export default StudentStats;