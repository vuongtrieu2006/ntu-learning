import { COURSES } from "@/lib/products"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Clock, Users, ArrowLeft, CheckCircle2 } from "lucide-react"
import { CourseEnroll } from "@/components/course-enroll"

export default function CoursePage({
  params,
}: {
  params: { courseId: string }
}) {
  const { courseId } = params

  const course = COURSES.find((c) => c.id === courseId)
  if (!course) {
    notFound()
  }

  const totalMinutes = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay Lại
            </Button>
          </Link>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-balance">{course.name}</h1>
              <p className="text-muted-foreground mt-2">Giảng viên: {course.instructor}</p>
            </div>
            <p className="text-lg text-foreground/80">{course.description}</p>
            <div className="flex gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{totalMinutes} phút video</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.lessons.length} bài học</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Truy cập trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Tổng Quan</TabsTrigger>
                <TabsTrigger value="curriculum">Chương Trình Học</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 mt-6">
                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Khóa Học Này Bao Gồm</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>{course.lessons.length} bài học video được cấu trúc tốt</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Truy cập trọn đời vào nội dung khóa học</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Tổng cộng {totalMinutes} phút nội dung video chất lượng cao</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Theo dõi tiến độ học tập chi tiết</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Bảng điều khiển học tập cá nhân</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Yêu Cầu:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>Máy tính hoặc thiết bị di động</li>
                      <li>Kết nối internet</li>
                      <li>Sự cam kết học tập</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-4 mt-6">
                <div className="space-y-3">
                  {course.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-base">
                            <span className="text-primary">Bài {index + 1}:</span> {lesson.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">
                          {lesson.duration} phút
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-4 space-y-4">
              <div>
                <div className="text-4xl font-bold text-green-600">Miễn Phí</div>
                <p className="text-sm text-muted-foreground mt-1">Không có chi phí - Ai cũng có thể học</p>
              </div>

              <div className="bg-accent/20 rounded-lg p-3 text-sm">
                <p className="font-semibold mb-2">Gói Này Bao Gồm:</p>
                <ul className="space-y-1 text-xs text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span>Truy cập trọn đời</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span>Cập nhật nội dung miễn phí</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span>Bảng điều khiển tiến độ</span>
                  </li>
                </ul>
              </div>

              <CourseEnroll courseId={course.id} />

              <p className="text-xs text-center text-muted-foreground">Hoàn toàn miễn phí - Không cần thanh toán</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}