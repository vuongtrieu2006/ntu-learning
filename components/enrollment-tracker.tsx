"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { COURSES } from "@/lib/products"

export function EnrollmentTracker() {
  const [enrollmentData, setEnrollmentData] = useState<Record<string, number>>({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const data: Record<string, number> = {}

    COURSES.forEach((course) => {
      const stored = localStorage.getItem(`progress-${course.id}`)
      const completed = stored ? JSON.parse(stored).length : 0
      data[course.id] = completed
    })

    setEnrollmentData(data)
  }, [])

  if (!isMounted) return null

  const totalCourses = COURSES.length
  const enrolledCourses = Object.values(enrollmentData).filter((count) => count > 0).length
  const totalProgress = Math.round(
    Object.entries(enrollmentData).reduce((acc, [courseId, completed]) => {
      const course = COURSES.find((c) => c.id === courseId)
      return acc + (course ? (completed / course.lessons.length) * 100 : 0)
    }, 0) / totalCourses || 0,
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Tổng Khóa Học</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{totalCourses}</div>
          <p className="text-xs text-muted-foreground mt-1">khóa học có sẵn</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Đã Ghi Danh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{enrolledCourses}</div>
          <p className="text-xs text-muted-foreground mt-1">khóa học đang học</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Tiến Độ Chung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{totalProgress}%</div>
          <div className="w-full bg-muted rounded-full h-1 mt-2">
            <div className="bg-primary h-1 rounded-full" style={{ width: `${totalProgress}%` }} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
