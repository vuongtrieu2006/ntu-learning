"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"
import type { Lesson } from "@/lib/products"

interface LessonSidebarProps {
  lessons: Lesson[]
  currentLessonId: string
  onSelectLesson: (lessonId: string) => void
  completedLessons: Set<string>
}

export function LessonSidebar({ lessons, currentLessonId, onSelectLesson, completedLessons }: LessonSidebarProps) {
  const completedCount = completedLessons.size
  const progressPercentage = Math.round((completedCount / lessons.length) * 100)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Chương Trình Học</CardTitle>
        <div className="mt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tiến Độ</span>
            <span className="font-semibold">
              {completedCount}/{lessons.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">{progressPercentage}% hoàn thành</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-2">
        {lessons.map((lesson, index) => {
          const isCurrentLesson = lesson.id === currentLessonId
          const isCompleted = completedLessons.has(lesson.id)

          return (
            <Button
              key={lesson.id}
              variant={isCurrentLesson ? "default" : "ghost"}
              className="w-full justify-start text-left h-auto py-3 px-3"
              onClick={() => onSelectLesson(lesson.id)}
            >
              <div className="flex items-start gap-3 w-full">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">
                    {index + 1}. {lesson.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{lesson.duration} phút</div>
                </div>
              </div>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}
