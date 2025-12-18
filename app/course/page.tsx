import Link from "next/link"
import { COURSES } from "@/lib/products"
import { Card } from "@/components/ui/card"

export default function CourseIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Danh sách khóa học</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map((course) => (
          <Link key={course.id} href={`/course/${course.id}`}>
            <Card className="p-4 hover:shadow-md transition cursor-pointer">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {course.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
