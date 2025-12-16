"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!")
      return
    }

    const userData = {
      name: name,
      email: email,
      password: password,
      registerTime: new Date().toLocaleString("vi-VN"),
    }
    localStorage.setItem("ntu_user", JSON.stringify(userData))
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-md mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2 hover:bg-secondary">
            <ArrowLeft className="w-4 h-4" />
            Quay Lại
          </Button>
        </Link>

        <Card className="p-8 shadow-lg border border-border">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Đăng Ký</h1>
          <p className="text-muted-foreground mb-6">Tạo tài khoản NTU Learning mới</p>

          <div className="bg-secondary border border-border rounded-lg p-4 mb-6">
            <Badge className="mb-2">Đặc Biệt</Badge>
            <p className="text-sm font-semibold text-foreground">Sinh viên Đại Học Nha Trang được giảm 50%!</p>
            <p className="text-xs text-muted-foreground mt-1">Sử dụng email .edu.vn để nhận ưu đãi</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Họ và Tên</label>
              <Input
                type="text"
                placeholder="Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Mật Khẩu</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Xác Nhận Mật Khẩu</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full">Đăng Ký</Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-primary hover:underline font-semibold">
              Đăng Nhập
            </Link>
          </p>
        </Card>
      </div>
    </main>
  )
}
