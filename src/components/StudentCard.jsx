function StudentCard({ student }) {
  const isPassing = student.marks >= 35;

  return (
    <div className="student-card">
      <div className="avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Marks: {student.marks} / 100</p>
      </div>

      <span className={isPassing ? "pass" : "fail"}>
        {isPassing ? "Pass" : "Fail"}
      </span>
    </div>
  );
}

export default StudentCard;