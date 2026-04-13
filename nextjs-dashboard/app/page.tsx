"use client";

import React from 'react';
import Image from 'next/image';

// Komponen Kartu Misi
const MissionCard = ({ number, title, desc, iconSrc, iconAlt }: any) => (
  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-10 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden text-left min-h-[300px]">
    <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
      {number}
    </div>
    
    <div className="relative w-16 h-16 mb-8">
      <Image 
        src={iconSrc} 
        alt={iconAlt} 
        fill 
        className="object-contain" 
      />
    </div>

    <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">{desc}</p>
  </div>
);

// Komponen Kartu Layanan
const ServiceCard = ({ size, price, desc, details }: any) => (
  <div className="bg-white/[0.05] backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
    <div>
      <div className="text-purple-400 text-sm font-black uppercase tracking-[0.3em] mb-4">{size} Package</div>
      <div className="text-4xl md:text-5xl font-black mb-6 tracking-tighter italic leading-tight">
        <span className="text-lg font-normal not-italic text-gray-400 uppercase tracking-widest">Mulai dari</span> <br />
        {price}
      </div>
      <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed font-medium">
        {desc}
      </p>
    </div>
    <div className="pt-8 border-t border-white/10">
      <p className="text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-widest leading-relaxed">
        {details}
      </p>
    </div>
  </div>
);

export default function SerenaSail() {
  return (
    <main className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full" />
        <div className="z-10">
          <div className="relative w-32 h-32 mx-auto mb-10 group">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-all duration-700" />
            <div className="relative w-full h-full border-2 border-purple-500/30 rounded-2xl flex items-center justify-center bg-[#030712]/80 backdrop-blur-sm p-4">
              <Image src="/kapal.png" alt="Logo" width={120} height={120} priority className="object-contain" />
            </div>
          </div>
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter mb-6 italic leading-none">SERENA SAIL</h1>
          <p className="text-cyan-400 tracking-[0.5em] uppercase text-sm md:text-lg font-black opacity-90">
            Navigating the Future, Anchored in Precision
          </p>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-40 border-t border-white/5 relative bg-[#020617]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="bg-cyan-500/10 text-cyan-400 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-cyan-500/20">Corporate Identity</span>
            <h2 className="text-6xl md:text-7xl font-bold mt-8 mb-8 uppercase italic">About Us</h2>
            <p className="text-2xl md:text-3xl text-blue-100/80 leading-relaxed font-light">
              Serena Sail adalah pionir solusi maritim global. Kami menciptakan sistem yang <span className="text-purple-400 font-bold">presisi</span> dan <span className="text-cyan-400 font-bold">mudah digunakan</span> oleh semua kalangan.
            </p>
          </div>
          <div className="bg-white/[0.03] p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 uppercase tracking-tighter">Our Core Identity</h3>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">Kami mendigitalkan pencatatan logistik tradisional menjadi sistem yang transparan, aman, dan dapat diakses mudah oleh siapa saja.</p>
          </div>
        </div>
      </section>

      {/* 3. VISI SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5">
        <div>
          <span className="bg-purple-500/10 text-purple-400 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-purple-500/20">Strategic Vision</span>
          <h2 className="text-6xl md:text-7xl font-bold mt-8 mb-10 uppercase italic">Visi</h2>
          <p className="text-3xl md:text-4xl text-blue-100 leading-tight font-light">Menjadi pionir logistik maritim yang paling <span className="text-purple-400 font-bold underline decoration-purple-500/30">aman</span>, <span className="text-cyan-400 font-bold underline decoration-cyan-500/30">transparan</span>, dan <span className="text-orange-400 font-bold underline decoration-orange-500/30">berkelanjutan</span>.</p>
        </div>
        <div className="relative group aspect-video">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-full w-full bg-white/[0.02] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/fotoCompany.jpeg" alt="Vessel" fill className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* 4. MISI SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-40 border-t border-white/5 relative">
        <h2 className="text-5xl md:text-6xl font-black mb-20 text-center uppercase tracking-[0.2em] italic">Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <MissionCard 
            number="01" 
            title="Operasional" 
            desc="Pemantauan armada presisi real-time untuk jaminan ketepatan waktu." 
            iconSrc="/tabel1.png" 
            iconAlt="Operasional Graph Icon"
          />
          
          <MissionCard 
            number="02" 
            title="Inovasi" 
            desc="Sistem navigasi satelit canggih untuk adaptasi cuaca ekstrem." 
            iconSrc="/roket1.png" 
            iconAlt="Inovasi Rocket Icon"
          />
          
          <MissionCard 
            number="03" 
            title="Efisiensi" 
            desc="Optimasi bahan bakar untuk mengurangi jejak karbon dunia." 
            iconSrc="/daun1.png" 
            iconAlt="Efisiensi Leaf Icon"
          />
          
        </div>
      </section>

      {/* 5. LAYANAN SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-40 border-t border-white/5 bg-[#030712]/50">
        <div className="text-center mb-20">
          <span className="bg-cyan-500/10 text-cyan-400 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-cyan-500/20">Shipping Solutions</span>
          <h2 className="text-6xl md:text-7xl font-bold mt-8 uppercase italic">Layanan Kami</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">Standar pengemasan dengan integrasi logistik maritim yang presisi.
                Kami memastikan setiap kargo melalui rute pelayaran terefisiensi dengan
                protokol keamanan berlapis untuk menjamin integritas aset Anda hingga
                destinasi akhir.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ServiceCard size="Small" price="Rp 250.000" desc="Pengiriman dokumen penting atau paket kecil dengan perlindungan kedap air." details="Berdasarkan pengemasan standar & rute domestik." />
          <ServiceCard size="Medium" price="Rp 1.200.000" desc="Ideal untuk inventaris bisnis atau elektronik dengan palet khusus." details="Dihitung dari volume dimensi & koordinat lokasi." />
          <ServiceCard size="Large" price="Rp 5.500.000" desc="Kapasitas kontainer besar untuk alat berat atau suplai industri." details="Adaptif terhadap rute pelayaran & teknik pengemasan." />
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center bg-[#010413]">
        <p className="text-sm md:text-lg text-gray-500 tracking-[0.6em] font-black uppercase">© 2026 SERENA SAIL MARITIME LOGISTICS // ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
