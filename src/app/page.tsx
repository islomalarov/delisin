"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Code, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  const navLinks = [
    { href: "#xizmatlar", text: "Xizmatlar" },
    { href: "#qanday-ishlaydi", text: "Qanday ishlaydi" },
    { href: "#biz-haqimizda", text: "Biz haqimizda" },
    { href: "#vakansiyalar", text: "Vakansiyalar" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 py-5 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">DE LI SIN</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">{link.text}</a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg">
            Bog'lanish
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-800">
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-xs bg-white z-50 p-6 shadow-lg"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold">Menyu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors">{link.text}</a>
              ))}
               <a href="#" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center">Bog'lanish</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="text-center py-20 md:py-28">
          <motion.h2 variants={sectionVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            O'zbekistondagi Eng Yaxshi Dasturchilar Bilan Loyihangizni Kuchaytiring
          </motion.h2>
          <motion.p variants={sectionVariants} className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            DE LI SIN sizning biznesingiz uchun kerakli bo'lgan yuqori malakali IT mutaxassislarni topish va jamoangizga qo'shishga yordam beruvchi <span className="font-semibold">outstaffing</span> kompaniyasidir.
          </motion.p>
          <motion.div variants={sectionVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-2">
              Dasturchi Yollash <ArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#vakansiyalar"
              className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg">
              Ishga Ariza Berish
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Trusted by section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="py-12">
            <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Bizga Ishonch Bildirgan Kompaniyalar</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6 opacity-60">
                <p className="font-semibold text-xl text-gray-400">Client A</p>
                <p className="font-semibold text-xl text-gray-400">Client B</p>
                <p className="font-semibold text-xl text-gray-400">Client C</p>
                <p className="font-semibold text-xl text-gray-400">Client D</p>
                <p className="font-semibold text-xl text-gray-400">Client E</p>
            </div>
        </motion.section>

        {/* Xizmatlar */}
        <motion.section 
          id="xizmatlar" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="py-20">
           <motion.div variants={sectionVariants} className="text-center mb-12">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Outstaffing Xizmatlari</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mt-4">Biz sizning talablaringizga mos keladigan, sinovdan o'tgan va loyihaga tayyor mutaxassislarni taqdim etamiz.</p>
           </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={sectionVariants} whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-3">Dedicated Teams</h4>
                    <p className="text-gray-600">Uzoq muddatli loyihalar uchun to'liq shakllantirilgan va boshqariladigan jamoalar.</p>
                </motion.div>
                <motion.div variants={sectionVariants} whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-3">Staff Augmentation</h4>
                    <p className="text-gray-600">Mavjud jamoangizni kerakli mutaxassislar bilan tezda kuchaytirish.</p>
                </motion.div>
                <motion.div variants={sectionVariants} whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-3">IT Mutaxassislar</h4>
                    <p className="text-gray-600">React, Node.js, Python, Java, DevOps va boshqa texnologiyalar bo'yicha ekspertlar.</p>
                </motion.div>
            </div>
        </motion.section>

        {/* How it works */}
        <motion.section
          id="qanday-ishlaydi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Biz Bilan Ishlash Jarayoni</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">Atigi 4 ta oddiy qadam bilan jamoangizga ideal mutaxassisni toping.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 text-center relative">
                <motion.div variants={sectionVariants} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                    <h4 className="text-lg font-semibold mb-2">Talablarni Aniqlash</h4>
                    <p className="text-gray-600 text-sm">Bizga loyihangiz va kerakli mutaxassis haqida ma'lumot bering.</p>
                </motion.div>
                <motion.div variants={sectionVariants} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                    <h4 className="text-lg font-semibold mb-2">Nomzodlarni Saralash</h4>
                    <p className="text-gray-600 text-sm">Bizning HR jamoamiz eng mos nomzodlarni tanlab, sizga taqdim etadi.</p>
                </motion.div>
                <motion.div variants={sectionVariants} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                    <h4 className="text-lg font-semibold mb-2">Suhbat va Tanlov</h4>
                    <p className="text-gray-600 text-sm">Siz nomzodlar bilan suhbat o'tkazib, eng munosibini tanlaysiz.</p>
                </motion.div>
                <motion.div variants={sectionVariants} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                    <h4 className="text-lg font-semibold mb-2">Integratsiya va Ish Boshlash</h4>
                    <p className="text-gray-600 text-sm">Tanlangan mutaxassis jamoangizga qo'shiladi va ishni boshlaydi.</p>
                </motion.div>
            </div>
        </motion.section>

        {/* Biz haqimizda */}
        <motion.section 
          id="biz-haqimizda" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="py-20 bg-gray-50 rounded-xl my-10">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">DE LI SIN Haqida</h3>
            <p className="max-w-3xl mx-auto text-gray-600">
              Bu yerda kompaniya haqida to'liq ma'lumot bo'ladi. Bizning maqsadimiz, missiyamiz va qadriyatlarimiz haqida yoziladi. Biz O'zbekistonning IT salohiyatini dunyoga tanitishni maqsad qilganmiz.
            </p>
          </div>
        </motion.section>

        {/* Vakansiyalar */}
        <motion.section 
          id="vakansiyalar" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="py-20">
          <div className="container mx-auto px-6">
            <motion.div variants={sectionVariants} className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Bizning Jamoaga Qo'shiling</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">Biz doim o'z sohasining professionali bo'lgan iqtidorli mutaxassislarni izlaymiz.</p>
            </motion.div>
            <div className="space-y-6 max-w-3xl mx-auto">
              <motion.div variants={sectionVariants} className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-900">Senior React Dasturchi</h4>
                    <p className="text-gray-600">Toshkent, O'zbekiston (Masofaviy)</p>
                </div>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="w-full sm:w-auto bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors text-center">
                  Batafsil
                </motion.a>
              </motion.div>
               <motion.div variants={sectionVariants} className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-900">Lead Python/Django Developer</h4>
                    <p className="text-gray-600">Andijon, O'zbekiston</p>
                </div>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="w-full sm:w-auto bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors text-center">
                  Batafsil
                </motion.a>
              </motion.div>
            </div>
             <p className="text-center mt-10 text-gray-500">Barcha ochiq vakansiyalarni ko'rish uchun <a href="#" className="text-blue-600 hover:underline">bu yerni bosing</a>.</p>
          </div>
        </motion.section>

        {/* Testimonial section */}
        <motion.section 
          id="yutuqlar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={sectionVariants}
          className="py-20 bg-blue-600 text-white rounded-xl my-10">
          <div className="container mx-auto px-6 text-center">
             <h3 className="text-3xl font-bold mb-8">Mijozlarimiz Biz Haqimizda Nima Deydi</h3>
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl italic leading-relaxed">"DE LI SIN jamoasi bizning loyihamiz uchun ajoyib mutaxassislarni topib berdi. Ularning professionalligi va tezkorligi bizni hayratda qoldirdi. Albatta yana hamkorlik qilamiz!"</p>
              <footer className="mt-6 font-semibold">- Alisher Rustamov, CEO @ TechSolutions</footer>
            </blockquote>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
                <div>
                    <h3 className="text-xl font-bold mb-4">DE LI SIN</h3>
                    <p className="text-gray-400">O'zbekistonning eng yaxshi IT iste'dodlari bilan global biznesni bog'laymiz.</p>
                </div>
                 <div>
                    <h4 className="font-semibold mb-4">Menyular</h4>
                    <ul className="space-y-2">
                        <li><a href="#xizmatlar" className="text-gray-400 hover:text-white">Xizmatlar</a></li>
                        <li><a href="#qanday-ishlaydi" className="text-gray-400 hover:text-white">Qanday ishlaydi</a></li>
                        <li><a href="#biz-haqimizda" className="text-gray-400 hover:text-white">Biz haqimizda</a></li>
                        <li><a href="#vakansiyalar" className="text-gray-400 hover:text-white">Karyera</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Telegram</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-4">Bog'lanish</h4>
                    <p className="text-gray-400">info@delisin.uz</p>
                    <p className="text-gray-400">+998 99 123 45 67</p>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
                 <p>&copy; 2025 DE LI SIN. Barcha huquqlar himoyalangan.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
