"use client";

import React from 'react';
import Image from 'next/image';

// Komponen Kartu Misi
const MissionCard = ({ number, title, desc, icon }: any) => (
  // Menggunakan bg-white/[0.03] agar kartu sedikit transparan terhadap background biru dongker
  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-sm hover:border-purple-500/50 transition-all group relative overflow-hidden text-left">
    <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
      {number}
    </div>
    <div className="text-cyan-400 mb-4 text-2xl">{icon}</div>
    <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function SerenaSail() {
  return (
    // PERUBAHAN: Background diganti ke biru dongker sangat gelap (#020617)
    <main className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Glow Effect - Disesuaikan agar lebih menyatu dengan navy */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full -bottom-20" />
        
        <div className="z-10">
          <div className="relative w-28 h-28 mx-auto mb-10 group">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-all duration-700" />
            
            {/* Box logo dibuat sedikit lebih gelap dari bg utama agar pop-out */}
            <div className="relative w-full h-full border-2 border-purple-500/30 rounded-2xl flex items-center justify-center bg-[#030712]/80 backdrop-blur-sm p-4 shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden">
              <Image
                src="/kapal.png" 
                alt="Serena Sail Logo"
                width={100}
                height={100}
                priority
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 italic">SERENA SAIL</h1>
          <p className="text-cyan-400 tracking-[0.4em] uppercase text-xs font-bold opacity-80">
            Navigating the Future, Anchored in Precision
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/20 text-xs tracking-[0.3em] uppercase">
          Scroll to explore ↓
        </div>
      </section>

      {/* VISI SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-purple-500/20">
            Strategic Vision
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-8 uppercase italic">Visi</h2>
          <p className="text-xl text-blue-100/60 leading-relaxed font-light">
            Menjadi pionir solusi logistik maritim global yang mengintegrasikan kecerdasan data dan teknologi mutakhir untuk menciptakan pelayaran yang paling <span className="text-purple-400 font-medium">aman</span>, <span className="text-cyan-400 font-medium">transparan</span>, dan <span className="text-orange-400 font-medium">berkelanjutan</span> di dunia.
          </p>
        </div>
        
        <div className="relative group aspect-video">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative h-full w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/fotoCompany.jpeg" 
              alt="Serena Sail Company Vessel"
              fill 
              className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            
            <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                <span className="text-cyan-400/90 font-mono text-[9px] uppercase tracking-[0.2em]">
                  System Monitoring Active
                </span>
              </div>
              <span className="text-white/30 font-mono text-[8px] uppercase tracking-widest ml-3.5">
                Vessel ID: SS-MARITIME-2026
              </span>
            </div>

            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 rounded-tr-md"></div>
          </div>
        </div>
      </section>

      {/* MISI SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <h2 className="text-4xl font-bold mb-16 text-center uppercase tracking-widest italic">Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MissionCard 
            number="01" 
            title="Keunggulan Operasional" 
            desc="Menyediakan pemantauan armada yang presisi secara real-time untuk menjamin ketepatan waktu di setiap rute pelayaran."
            icon="📊"
          />
          <MissionCard 
            number="02" 
            title="Inovasi Teknologi" 
            desc="Terus mengembangkan sistem navigasi dan analitik berbasis satelit untuk adaptasi cuaca ekstrem."
            icon="🚀"
          />
          <MissionCard 
            number="03" 
            title="Efisiensi & Berkelanjutan" 
            desc="Mengoptimalkan konsumsi bahan bakar dan utilisasi kargo untuk mengurangi jejak karbon."
            icon="🍃"
          />
        </div>
      </section>

      {/* FOOTER */}
      {/* PERUBAHAN: Footer menggunakan warna biru yang sedikit lebih gelap dari main bg */}
      <footer className="py-12 border-t border-white/5 text-center relative bg-[#010413]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <p className="text-[10px] text-gray-500 tracking-[0.5em] uppercase">
          © 2026 SERENA SAIL MARITIME LOGISTICS // ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
