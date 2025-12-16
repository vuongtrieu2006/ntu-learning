"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle2 } from "lucide-react"
import type { Lesson } from "@/lib/products"

interface VideoPlayerProps {
  lesson: Lesson
  isCompleted: boolean
  onMarkComplete: (lessonId: string) => void
}

export function VideoPlayer({ lesson, isCompleted, onMarkComplete }: VideoPlayerProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className="space-y-4">
      <div className="bg-black rounded-lg overflow-hidden aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={lesson.videoUrl}
          title={lesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{lesson.duration} phút</span>
            </div>
          </div>
          <Badge variant={isCompleted ? "default" : "outline"}>
            {isCompleted ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3" />
                Đã Hoàn Thành
              </span>
            ) : (
              "Chưa Hoàn Thành"
            )}
          </Badge>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          {showFullDescription ? lesson.description : `${lesson.description.substring(0, 100)}...`}
        </p>

        <div className="flex gap-3">
          {lesson.description.length > 100 && (
            <Button variant="outline" onClick={() => setShowFullDescription(!showFullDescription)} size="sm">
              {showFullDescription ? "Ẩn" : "Xem Thêm"}
            </Button>
          )}
          {!isCompleted && (
            <Button onClick={() => onMarkComplete(lesson.id)} size="sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Đánh Dấu Hoàn Thành
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
