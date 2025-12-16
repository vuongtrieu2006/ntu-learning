import { Badge } from "@/components/ui/badge"

export function CourseHero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-blue-600 hover:bg-blue-700">Đại Học Nha Trang</Badge>
          <Badge variant="secondary">Giảm 50% cho sinh viên</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-blue-900">NTU Learning</h1>
        <p className="text-lg text-blue-700 text-balance mb-2">Nền tảng học tập chất lượng cao từ Đại Học Nha Trang</p>
        <p className="text-sm text-muted-foreground text-balance">
          Các khóa học: Lập Trình OOP, Toán Rời Rạc, Cấu Trúc Dữ Liệu, Mạng Máy Tính, Cơ Sở Dữ Liệu
        </p>
      </div>
    </div>
  )
}
