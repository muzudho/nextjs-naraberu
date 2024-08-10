// HTML に CSS が適用される。 <head> 要素に CSSファイルへのリンクが追加される？
import '@/app/ui/global.css';

// Inter フォントと Lustina フォントのインスタンス
import { inter, lustina } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
