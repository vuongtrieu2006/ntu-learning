"use client"

import { useEffect, useState } from "react"
import { CourseProgressCard } from "@/components/course-progress-card"
import { EnrollmentTracker } from "@/components/enrollment-tracker"
import { COURSES } from "@/lib/products"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const [courseProgress, setCourseProgress] = useState<Record<string, number>>({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const progress: Record<string, number> = {}

    COURSES.forEach((course) => {
      const stored = localStorage.getItem(`progress-${course.id}`)
      const completed = stored ? JSON.parse(stored).length : 0
      progress[course.id] = completed
    })

    setCourseProgress(progress)
  }, [])

  if (!isMounted) return null

  const enrolledCourses = COURSES.filter((course) => courseProgress[course.id] > 0)
  const unenrolledCourses = COURSES.filter((course) => !courseProgress[course.id])

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Bảng Điều Khiển Học Tập</h1>
          <p className="text-muted-foreground mt-2">Theo dõi tiến độ học tập của bạn trên tất cả các khóa học</p>
          <Link href="/">
            <Button variant="outline" className="mt-4 bg-transparent">
              <ArrowRight className="w-4 h-4 mr-2" />
              Khám Phá Khóa Học
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EnrollmentTracker />

        {enrolledCourses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Khóa Học Đang Học</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <CourseProgressCard
                  key={course.id}
                  course={course}
                  completedLessons={courseProgress[course.id] || 0}
                  totalLessons={course.lessons.length}
                />
              ))}
            </div>
          </section>
        )}

        {unenrolledCourses.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {enrolledCourses.length > 0 ? "Khóa Học Khác" : "Tất Cả Khóa Học"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unenrolledCourses.map((course) => (
                <CourseProgressCard
                  key={course.id}
                  course={course}
                  completedLessons={0}
                  totalLessons={course.lessons.length}
                />
              ))}
            </div>
          </section>
        )}

        {Object.values(courseProgress).every((v) => v === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Bạn chưa bắt đầu học khóa nào. Hãy bắt đầu ngay!</p>
            <Link href="/">
              <Button size="lg">Xem Tất Cả Khóa Học</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
