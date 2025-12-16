export default function CoursePage({ params }: { params: { courseId: string } }) {
  return (
    <div>
      <h1>Course: {params.courseId}</h1>
      <p>Welcome to the course page!</p>
    </div>
  );
}
