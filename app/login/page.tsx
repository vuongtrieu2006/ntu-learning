"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const userData = {
      name: email.split("@")[0],
      email: email,
      password: password,
      loginTime: new Date().toLocaleString("vi-VN"),
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
          <h1 className="text-3xl font-bold mb-2 text-foreground">Đăng Nhập</h1>
          <p className="text-muted-foreground mb-6">Đăng nhập vào tài khoản NTU Learning của bạn</p>

          <form className="space-y-4" onSubmit={handleLogin}>
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
            <Button className="w-full">Đăng Nhập</Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-primary hover:underline font-semibold">
              Đăng Ký Ngay
            </Link>
          </p>
        </Card>
      </div>
    </main>
  )
}
