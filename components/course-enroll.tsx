"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CourseEnroll({ courseId }: { courseId: string }) {
  const [isEnrolled, setIsEnrolled] = useState(false)

  const handleEnroll = () => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses") || "[]")
    if (!enrolledCourses.includes(courseId)) {
      enrolledCourses.push(courseId)
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses))
    }
    setIsEnrolled(true)
  }

  if (isEnrolled) {
    return (
      <Link href={`/course/${courseId}/lesson`} className="block">
        <Button className="w-full" size="lg">
          Bắt Đầu Học Ngay
        </Button>
      </Link>
    )
  }

  return (
    <Button onClick={handleEnroll} className="w-full" size="lg">
      Đăng Ký Miễn Phí
    </Button>
  )
}
