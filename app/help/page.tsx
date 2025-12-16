import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowLeft, Facebook } from "lucide-react"

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Quay Lại
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Trung Tâm Trợ Giúp</h1>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Địa Chỉ Liên Hệ</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Đại Học Nha Trang
              <br />
              02 Nguyễn Đình Chiểu
              <br />
              Nha Trang, Khánh Hòa
              <br />
              Việt Nam
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Liên Hệ Qua Email</h2>
            </div>
            <a
              href="mailto:trieu.tv.66cntt@ntu.edu.vn"
              className="text-blue-600 hover:text-blue-700 font-semibold mb-4 block"
            >
              trieu.tv.66cntt@ntu.edu.vn
            </a>
            <p className="text-sm text-muted-foreground">Chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Gọi Cho Chúng Tôi</h2>
            </div>
            <a href="tel:0868989645" className="text-blue-600 hover:text-blue-700 font-semibold mb-4 block">
              0868989645
            </a>
            <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 6, 08:00 - 17:00</p>
          </Card>

          {/* Facebook contact card */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Facebook className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Kết Nối Facebook</h2>
            </div>
            <a
              href="https://www.facebook.com/zuong.trieuu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Facebook className="w-4 h-4" />
                Theo Dõi Chúng Tôi
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">Nhắn tin hỗ trợ qua Facebook</p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Chương Trình Giảm Giá Sinh Viên</h2>
            <p className="text-muted-foreground mb-4">
              Sinh viên Đại Học Nha Trang được hưởng <span className="font-bold text-blue-600">giảm 50%</span> cho tất
              cả các khóa học
            </p>
            <p className="text-sm text-muted-foreground">Vui lòng cung cấp email .edu.vn để xác minh</p>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Làm thế nào để đăng ký khóa học?</h3>
              <p className="text-muted-foreground">
                Chọn khóa học bạn quan tâm, nhấn "Đăng Ký Ngay", chọn phương thức thanh toán và hoàn tất giao dịch.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tôi có thể hoàn lại tiền không?</h3>
              <p className="text-muted-foreground">
                Có, chúng tôi cung cấp hoàn tiền 100% nếu bạn không hài lòng trong vòng 7 ngày.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Khóa học có cấp chứng chỉ không?</h3>
              <p className="text-muted-foreground">
                Có, sau khi hoàn thành 100% bài học, bạn sẽ nhận được chứng chỉ có xác nhận từ Đại Học Nha Trang.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tôi có truy cập trọn đời không?</h3>
              <p className="text-muted-foreground">
                Có, sau khi thanh toán, bạn có quyền truy cập vĩnh viễn vào tất cả tài liệu khóa học.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
