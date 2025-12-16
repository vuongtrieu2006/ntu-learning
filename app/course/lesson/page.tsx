"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { COURSES } from "@/lib/products"
import { VideoPlayer } from "@/components/video-player"
import { LessonSidebar } from "@/components/lesson-sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: { courseId: string }
}) {
  const searchParams = useSearchParams()
  const lessonId = searchParams.get("lesson")

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Load completed lessons from localStorage
    const courseId = params?.courseId
    if (courseId) {
      const stored = localStorage.getItem(`progress-${courseId}`)
      if (stored) {
        setCompletedLessons(new Set(JSON.parse(stored)))
      }
    }
  }, [params?.courseId])

  useEffect(() => {
    if (lessonId) {
      setCurrentLessonId(lessonId)
    }
  }, [lessonId])

  const handleMarkComplete = (lessonId: string) => {
    const courseId = params?.courseId
    if (courseId) {
      const updated = new Set(completedLessons)
      updated.add(lessonId)
      setCompletedLessons(updated)
      localStorage.setItem(`progress-${courseId}`, JSON.stringify(Array.from(updated)))
    }
  }

  const course = COURSES.find((c) => c.id === params?.courseId)

  if (!course) {
    return <div>Khóa học không tìm thấy</div>
  }

  const currentLesson = course.lessons.find((l) => l.id === currentLessonId) || course.lessons[0]
  if (!isMounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href={`/course/${course.id}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay Lại Khóa Học
            </Button>
          </Link>
          <h1 className="text-2xl font-bold mt-2">{course.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <VideoPlayer
              lesson={currentLesson}
              isCompleted={completedLessons.has(currentLesson.id)}
              onMarkComplete={handleMarkComplete}
            />
          </div>
          <div className="lg:col-span-1 h-[600px]">
            <LessonSidebar
              lessons={course.lessons}
              currentLessonId={currentLesson.id}
              onSelectLesson={(id) => {
                setCurrentLessonId(id)
                window.history.replaceState(null, "", `?lesson=${id}`)
              }}
              completedLessons={completedLessons}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
