"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, CheckCircle2 } from "lucide-react"
import type { Course } from "@/lib/products"

interface CourseProgressCardProps {
  course: Course
  completedLessons: number
  totalLessons: number
}

export function CourseProgressCard({ course, completedLessons, totalLessons }: CourseProgressCardProps) {
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)
  const totalMinutes = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)
  const completedMinutes = course.lessons
    .filter((lesson) =>
      Array.from(new Set(JSON.parse(localStorage.getItem(`progress-${course.id}`) || "[]"))).includes(lesson.id),
    )
    .reduce((acc, lesson) => acc + lesson.duration, 0)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="flex-1">
            <CardTitle>{course.name}</CardTitle>
            <CardDescription>{course.instructor}</CardDescription>
          </div>
          <Badge variant={progressPercentage === 100 ? "default" : "secondary"}>
            {progressPercentage === 100 ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Hoàn Thành
              </span>
            ) : (
              `${progressPercentage}%`
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tiến Độ</span>
            <span className="font-semibold">
              {completedLessons}/{totalLessons} bài học
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-muted-foreground text-xs">Thời Gian</div>
              <div className="font-semibold">
                {completedMinutes}/{totalMinutes} phút
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-muted-foreground text-xs">Hoàn Thành</div>
              <div className="font-semibold">{completedLessons} bài</div>
            </div>
          </div>
        </div>

        <Link href={`/course/${course.id}/lesson?lesson=${course.lessons[0].id}`}>
          <Button className="w-full">{progressPercentage === 0 ? "Bắt Đầu Học" : "Tiếp Tục Học"}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
