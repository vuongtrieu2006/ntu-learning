"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { LogOut, User } from "lucide-react"

export function Header() {
  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedUser = localStorage.getItem("ntu_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("ntu_user")
    setUser(null)
    setShowDropdown(false)
    window.location.href = "/"
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary hover:text-accent transition">
          NTU Learning
        </Link>

        {/* Navigation and Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/help">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              Trợ Giúp
            </Button>
          </Link>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                  Bảng Điều Khiển
                </Button>
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg text-sm hover:bg-secondary/80 transition"
                >
                  <span className="font-medium text-foreground">{user.name}</span>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-10">
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-secondary text-sm text-foreground rounded-t-lg"
                      onClick={() => setShowDropdown(false)}
                    >
                      <User className="w-4 h-4" />
                      Hồ Sơ Cá Nhân
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-red-50 text-sm text-red-600 rounded-b-lg border-t border-border"
                    >
                      <LogOut className="w-4 h-4" />
                      Đăng Xuất
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                  Đăng Nhập
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="text-xs sm:text-sm font-semibold">
                  Đăng Ký
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
