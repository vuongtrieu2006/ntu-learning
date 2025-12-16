"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

interface UserProfile {
  email: string
  name: string
  gender?: string
  phone?: string
  birthYear?: string
  password: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    birthYear: "",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setIsMounted(true)
    const userData = localStorage.getItem("ntu_user")
    if (userData) {
      const user = JSON.parse(userData)
      setProfile(user)
      setFormData({
        name: user.name || "",
        gender: user.gender || "",
        phone: user.phone || "",
        birthYear: user.birthYear || "",
      })
    } else {
      router.push("/login")
    }
  }, [router])

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!formData.name.trim()) {
      setError("Tên không được để trống")
      return
    }

    if (profile) {
      const updated = {
        ...profile,
        name: formData.name,
        gender: formData.gender,
        phone: formData.phone,
        birthYear: formData.birthYear,
      }

      localStorage.setItem("ntu_user", JSON.stringify(updated))
      setProfile(updated)
      setIsEditing(false)
      setMessage("Cập nhật thông tin thành công!")
      setTimeout(() => setMessage(""), 3000)
    }
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError("Vui lòng điền đầy đủ các trường")
      return
    }

    if (profile && passwordData.currentPassword !== profile.password) {
      setError("Mật khẩu hiện tại không đúng")
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp")
      return
    }

    if (passwordData.newPassword.length < 6) {
      setError("Mật khẩu mới phải có ít nhất 6 ký tự")
      return
    }

    if (profile) {
      const updated = {
        ...profile,
        password: passwordData.newPassword,
      }
      localStorage.setItem("ntu_user", JSON.stringify(updated))
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      setMessage("Đổi mật khẩu thành công!")
      setTimeout(() => setMessage(""), 3000)
    }
  }

  if (!isMounted || !profile) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay Lại
            </Button>
          </Link>
          <h1 className="text-2xl font-bold mt-2">Hồ Sơ Cá Nhân</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {message && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">{message}</div>
        )}

        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">{error}</div>}

        {/* Thông Tin Cá Nhân */}
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Thông Tin Cá Nhân</h2>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Huỷ" : "Chỉnh Sửa"}
            </Button>
          </div>

          {!isEditing ? (
            <div className="space-y-3">
              <div>
                <Label className="text-xs text-muted-foreground">Email</Label>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Tên</Label>
                <p className="text-sm font-medium">{profile.name}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Giới Tính</Label>
                <p className="text-sm font-medium">{profile.gender || "Chưa cập nhật"}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Số Điện Thoại</Label>
                <p className="text-sm font-medium">{profile.phone || "Chưa cập nhật"}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Năm Sinh</Label>
                <p className="text-sm font-medium">{profile.birthYear || "Chưa cập nhật"}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <Label htmlFor="name">Tên *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <Label htmlFor="gender">Giới Tính</Label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div>
                <Label htmlFor="phone">Số Điện Thoại</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Nhập số điện thoại"
                  type="tel"
                />
              </div>

              <div>
                <Label htmlFor="birthYear">Năm Sinh</Label>
                <Input
                  id="birthYear"
                  value={formData.birthYear}
                  onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                  placeholder="Nhập năm sinh"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <Button type="submit" className="w-full">
                Lưu Thay Đổi
              </Button>
            </form>
          )}
        </Card>

        {/* Đổi Mật Khẩu */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Đổi Mật Khẩu</h2>

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Mật Khẩu Hiện Tại *</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  placeholder="Nhập mật khẩu hiện tại"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="newPassword">Mật Khẩu Mới *</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  placeholder="Nhập mật khẩu mới"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword">Xác Nhận Mật Khẩu Mới *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                placeholder="Xác nhận mật khẩu mới"
              />
            </div>

            <Button type="submit" className="w-full">
              Đổi Mật Khẩu
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}
