export interface Course {
  id: string
  name: string
  description: string
  instructor: string
  image: string
  priceInCents: number
  lessons: Lesson[]
  youtubePlaylistUrl?: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  videoUrl: string
  duration: number
}

export const COURSES: Course[] = [
  {
    id: "oop",
    name: "Lập Trình Hướng Đối Tượng",
    description: "Khóa học lập trình hướng đối tượng - những khái niệm cơ bản đến nâng cao",
    instructor: "Phạm Thị Kim Ngoan",
    image: "/oop-course.jpg",
    priceInCents: 0,
    youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLPt6-BtUI22owYNbmZMv76VIfyqBDv0-D",
    lessons: [
      {
        id: "oop-1",
        title: "Giới Thiệu OOP",
        description: "Tìm hiểu các khái niệm cơ bản của lập trình hướng đối tượng",
        videoUrl: "https://www.youtube.com/embed/AHsL5cJVq9o",
        duration: 20,
      },
      {
        id: "oop-2",
        title: "Lớp và Đối Tượng",
        description: "Định nghĩa và sử dụng lớp, tạo đối tượng",
        videoUrl: "https://www.youtube.com/embed/AHsL5cJVq9o",
        duration: 25,
      },
      {
        id: "oop-3",
        title: "Kế Thừa",
        description: "Kế thừa trong OOP và cách sử dụng",
        videoUrl: "https://www.youtube.com/embed/AHsL5cJVq9o",
        duration: 22,
      },
      {
        id: "oop-4",
        title: "Đa Hình",
        description: "Hiểu rõ về đa hình và ứng dụng",
        videoUrl: "https://www.youtube.com/embed/AHsL5cJVq9o",
        duration: 24,
      },
    ],
  },

  {
    id: "discrete-math",
    name: "Toán Rời Rạc",
    description: "Khóa học Toán Rời Rạc - nền tảng cho Khoa học Máy Tính",
    instructor: "Nguyễn Hải Triều",
    image: "/discrete-math-course.jpg",
    priceInCents: 0,
    youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLyxSzL3F7486CtfXZXj3YSgmnWHvNUol8",
    lessons: [
      {
        id: "math-1",
        title: "Logic và Tập Hợp",
        description: "Những khái niệm cơ bản về logic và lý thuyết tập hợp",
        videoUrl: "https://www.youtube.com/embed/hMhompwcc6w",
        duration: 23,
      },
      {
        id: "math-2",
        title: "Đại Số Boole",
        description: "Đại số Boole và ứng dụng trong máy tính",
        videoUrl: "https://www.youtube.com/embed/hMhompwcc6w",
        duration: 26,
      },
      {
        id: "math-3",
        title: "Lý Thuyết Đồ Thị",
        description: "Các khái niệm và thuật toán cơ bản trên đồ thị",
        videoUrl: "https://www.youtube.com/embed/hMhompwcc6w",
        duration: 28,
      },
      {
        id: "math-4",
        title: "Tổ Hợp và Xác Suất",
        description: "Tổ hợp, chỉnh hợp và lý thuyết xác suất",
        videoUrl: "https://www.youtube.com/embed/hMhompwcc6w",
        duration: 25,
      },
    ],
  },

  {
    id: "data-structures",
    name: "Cấu Trúc Dữ Liệu và Giải Thuật",
    description: "Khóa học về các cấu trúc dữ liệu cơ bản và các thuật toán quan trọng",
    instructor: "Trần Minh Văn",
    image: "/data-structures-course.jpg",
    priceInCents: 0,
    youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLyxSzL3F74875OpDlkUfsRRUktZMGkhJU",
    lessons: [
      {
        id: "ds-1",
        title: "Mảng và Danh Sách Liên Kết",
        description: "Học về mảng, danh sách liên kết đơn, đôi",
        videoUrl: "https://www.youtube.com/embed/V85332IZVs0",
        duration: 26,
      },
      {
        id: "ds-2",
        title: "Stack và Queue",
        description: "Cấu trúc dữ liệu Stack và Queue, ứng dụng thực tế",
        videoUrl: "https://www.youtube.com/embed/V85332IZVs0",
        duration: 24,
      },
      {
        id: "ds-3",
        title: "Cây nhị phân",
        description: "Cây nhị phân, cây tìm kiếm nhị phân, cân bằng cây",
        videoUrl: "https://www.youtube.com/embed/V85332IZVs0",
        duration: 28,
      },
      {
        id: "ds-4",
        title: "Sắp Xếp và Tìm Kiếm",
        description: "Các thuật toán sắp xếp: bubble, quick, merge sort...",
        videoUrl: "https://www.youtube.com/embed/V85332IZVs0",
        duration: 30,
      },
    ],
  },

  {
    id: "computer-networks",
    name: "Mạng Máy Tính",
    description: "Khóa học Mạng Máy Tính - từ các lớp cơ bản đến ứng dụng mạng",
    instructor: "Phạm Văn Nam",
    image: "/networking-course.jpg",
    priceInCents: 0,
    youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLFTMmgcKgJ40Q9jFF2yQunDj24KUcBbBI",
    lessons: [
      {
        id: "net-1",
        title: "Kiến Trúc Mạng OSI",
        description: "Tìm hiểu mô hình OSI 7 lớp",
        videoUrl: "https://www.youtube.com/embed/dZbWjCvwr4Q",
        duration: 22,
      },
      {
        id: "net-2",
        title: "Giao Thức TCP/IP",
        description: "Tìm hiểu giao thức TCP/IP và các giao thức liên quan",
        videoUrl: "https://www.youtube.com/embed/dZbWjCvwr4Q",
        duration: 25,
      },
      {
        id: "net-3",
        title: "Định Tuyến và Chuyển Mạch",
        description: "Các khái niệm về định tuyến, chuyển mạch và bảng định tuyến",
        videoUrl: "https://www.youtube.com/embed/dZbWjCvwr4Q",
        duration: 27,
      },
      {
        id: "net-4",
        title: "An Toàn Mạng Cơ Bản",
        description: "Các khái niệm bảo mật mạng cơ bản",
        videoUrl: "https://www.youtube.com/embed/dZbWjCvwr4Q",
        duration: 24,
      },
    ],
  },

  {
    id: "database",
    name: "Cơ Sở Dữ Liệu",
    description: "Khóa học Cơ Sở Dữ Liệu - thiết kế, SQL và các hệ quản trị CSDL",
    instructor: "Phạm Thị Thu Thuý",
    image: "/database-course.jpg",
    priceInCents: 0,
    youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLyxSzL3F7484deka_j1czssCiHygV6oF-",
    lessons: [
      {
        id: "db-1",
        title: "Mô Hình Dữ Liệu ERD",
        description: "Thiết kế cơ sở dữ liệu với mô hình ER",
        videoUrl: "https://www.youtube.com/embed/kQRpe1HkALE",
        duration: 24,
      },
      {
        id: "db-2",
        title: "SQL Cơ Bản",
        description: "Câu lệnh SQL: SELECT, INSERT, UPDATE, DELETE",
        videoUrl: "https://www.youtube.com/embed/kQRpe1HkALE",
        duration: 26,
      },
      {
        id: "db-3",
        title: "JOIN và Query Nâng Cao",
        description: "JOIN, subquery, và các câu lệnh SQL nâng cao",
        videoUrl: "https://www.youtube.com/embed/kQRpe1HkALE",
        duration: 28,
      },
      {
        id: "db-4",
        title: "Chỉ Mục và Tối Ưu Hóa",
        description: "Tạo chỉ mục, tối ưu hóa query cho hiệu suất",
        videoUrl: "https://www.youtube.com/embed/kQRpe1HkALE",
        duration: 25,
      },
    ],
  },
]
