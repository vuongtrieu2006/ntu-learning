import { CourseCard } from "@/components/course-card"
import { CourseHero } from "@/components/course-hero"
import { Header } from "@/components/header"
import { COURSES } from "@/lib/products"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CourseHero />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Khóa Học Của Chúng Tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Help Center Section */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Trung Tâm Trợ Giúp</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Địa Chỉ</h3>
                  <p className="text-sm text-muted-foreground">
                    Đại Học Nha Trang
                    <br />
                    02 Nguyễn Đình Chiểu
                    <br />
                    Nha Trang, Khánh Hòa
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:trieu.tv.66cntt@ntu.edu.vn" className="hover:text-blue-600">
                      trieu.tv.66cntt@ntu.edu.vn
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Điện Thoại</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:0868989645" className="hover:text-blue-600">
                      0868989645
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
