// HTML に CSS が適用される。 <head> 要素に CSSファイルへのリンクが追加される？
import '@/app/ui/global.css';

// Inter フォントと Lusitana フォントのインスタンス
import { inter, lusitana } from '@/app/ui/fonts';

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
