import { Inter, Space_Grotesk } from 'next/font/google';
import './ui/global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#020617]`}>
        {/* Karena di page.tsx sudah ada Footer dan About Us, 
            layout ini kita buat bersih agar tidak double.
        */}
        {children}
      </body>
    </html>
  );
}