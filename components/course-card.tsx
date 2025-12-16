import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Course } from "@/lib/products"
import { Users, Clock } from "lucide-react"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const totalMinutes = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img src={course.image || "/placeholder.svg"} alt={course.name} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <CardTitle className="text-balance">{course.name}</CardTitle>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Miễn phí
          </Badge>
        </div>
        <CardDescription className="text-xs">{course.instructor}</CardDescription>
        <p className="text-sm text-foreground/80 mt-2">{course.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{totalMinutes} phút</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.lessons.length} bài học</span>
          </div>
        </div>
        <Link href={`/course/${course.id}`} className="block">
          <Button className="w-full">Xem Chi Tiết</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
