// グーグル社の Inter と Lusitana という名前のフォントを取り出す
import { Inter, Lusitana } from 'next/font/google';

// ラテンというサブセットをインスタンス化する
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});
