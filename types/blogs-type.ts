export interface BlogPost {
  id: string;
  title: string;
  poster: string;
  images: string[]; // Hỗ trợ nhiều ảnh
  date: string;
  slug: string;
  content: BlogContent[]; // Mảng để hỗ trợ nhiều kiểu nội dung
}

export type BlogContent =
  | { type: "text"; text: string } // Nội dung văn bản
  | { type: "image"; src: string; alt?: string } // Hình ảnh trong bài viết
  | { type: "heading"; level: number; text: string } // Tiêu đề các cấp độ
  | { type: "quote"; text: string; author?: string } // Trích dẫn
  | { type: "list"; items: string[]; ordered?: boolean } // Danh sách (unordered/ordered)
  | {
      type: "embed";
      src: string;
      provider: "youtube" | "twitter" | "instagram";
    }; // Video nhúng hoặc nội dung từ mạng xã hội
