'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Code } from 'lucide-react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Home() {
  const testimonials = [
    {
      quote:
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
      name: 'Charles Dickens',
      title: 'A Tale of Two Cities',
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: 'William Shakespeare',
      title: 'Hamlet',
    },
    {
      quote: 'All that we see or seem is but a dream within a dream.',
      name: 'Edgar Allan Poe',
      title: 'A Dream Within a Dream',
    },
    {
      quote:
        'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      name: 'Jane Austen',
      title: 'Pride and Prejudice',
    },
    {
      quote:
        'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
      name: 'Herman Melville',
      title: 'Moby-Dick',
    },
  ];
  const projects = [
    {
      title: 'Netflix',
      description:
        'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
      link: 'https://netflix.com',
    },
    {
      title: 'Google',
      description:
        'A multinational technology company that specializes in Internet-related services and products.',
      link: 'https://google.com',
    },
    {
      title: 'Meta',
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: 'https://meta.com',
    },
  ];
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="text-center py-20 md:py-28">
          <motion.h2
            variants={sectionVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            O'zbekistondagi Eng Yaxshi Dasturchilar Bilan Loyihangizni Kuchaytiring
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            DE LI SIN sizning biznesingiz uchun kerakli bo'lgan yuqori malakali IT mutaxassislarni
            topish va jamoangizga qo'shishga yordam beruvchi{' '}
            <span className="font-semibold">outstaffing</span> kompaniyasidir.
          </motion.p>
          <motion.div
            variants={sectionVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-2">
              Dasturchi Yollash <ArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#vakansiyalar"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-8 rounded-lg text-lg">
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
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Bizga Ishonch Bildirgan Kompaniyalar
          </h3>
          {/* <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6 opacity-60">
            <p className="font-semibold text-xl text-muted-foreground">Client A</p>
            <p className="font-semibold text-xl text-muted-foreground">Client B</p>
            <p className="font-semibold text-xl text-muted-foreground">Client C</p>
            <p className="font-semibold text-xl text-muted-foreground">Client D</p>
            <p className="font-semibold text-xl text-muted-foreground">Client E</p>
          </div> */}
          <HoverEffect items={projects} />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Outstaffing Xizmatlari
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Biz sizning talablaringizga mos keladigan, sinovdan o'tgan va loyihaga tayyor
              mutaxassislarni taqdim etamiz.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={sectionVariants}
              whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className="bg-muted p-8 rounded-xl border text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Dedicated Teams</h4>
              <p className="text-muted-foreground">
                Uzoq muddatli loyihalar uchun to'liq shakllantirilgan va boshqariladigan jamoalar.
              </p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className="bg-muted p-8 rounded-xl border text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Staff Augmentation</h4>
              <p className="text-muted-foreground">
                Mavjud jamoangizni kerakli mutaxassislar bilan tezda kuchaytirish.
              </p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              whileHover={{ y: -5, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className="bg-muted p-8 rounded-xl border text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">IT Mutaxassislar</h4>
              <p className="text-muted-foreground">
                React, Node.js, Python, Java, DevOps va boshqa texnologiyalar bo'yicha ekspertlar.
              </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Biz Bilan Ishlash Jarayoni
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Atigi 4 ta oddiy qadam bilan jamoangizga ideal mutaxassisni toping.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 text-center relative">
            <motion.div variants={sectionVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Talablarni Aniqlash</h4>
              <p className="text-muted-foreground text-sm">
                Bizga loyihangiz va kerakli mutaxassis haqida ma'lumot bering.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Nomzodlarni Saralash</h4>
              <p className="text-muted-foreground text-sm">
                Bizning HR jamoamiz eng mos nomzodlarni tanlab, sizga taqdim etadi.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Suhbat va Tanlov</h4>
              <p className="text-muted-foreground text-sm">
                Siz nomzodlar bilan suhbat o'tkazib, eng munosibini tanlaysiz.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold mb-2">Integratsiya va Ish Boshlash</h4>
              <p className="text-muted-foreground text-sm">
                Tanlangan mutaxassis jamoangizga qo'shiladi va ishni boshlaydi.
              </p>
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
          className="py-20 bg-muted rounded-xl my-10">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              DE LI SIN Haqida
            </h3>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Bu yerda kompaniya haqida to'liq ma'lumot bo'ladi. Bizning maqsadimiz, missiyamiz va
              qadriyatlarimiz haqida yoziladi. Biz O'zbekistonning IT salohiyatini dunyoga
              tanitishni maqsad qilganmiz.
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
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                Bizning Jamoaga Qo'shiling
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Biz doim o'z sohasining professionali bo'lgan iqtidorli mutaxassislarni izlaymiz.
              </p>
            </motion.div>
            <div className="space-y-6 max-w-3xl mx-auto">
              <motion.div
                variants={sectionVariants}
                className="bg-background border p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-foreground">Senior React Dasturchi</h4>
                  <p className="text-muted-foreground">Toshkent, O'zbekiston (Masofaviy)</p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-full sm:w-auto bg-accent text-primary font-semibold py-2 px-4 rounded-lg hover:bg-accent/80 transition-colors text-center">
                  Batafsil
                </motion.a>
              </motion.div>
              <motion.div
                variants={sectionVariants}
                className="bg-background border p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-foreground">
                    Lead Python/Django Developer
                  </h4>
                  <p className="text-muted-foreground">Andijon, O'zbekiston</p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-full sm:w-auto bg-accent text-primary font-semibold py-2 px-4 rounded-lg hover:bg-accent/80 transition-colors text-center">
                  Batafsil
                </motion.a>
              </motion.div>
            </div>
            <p className="text-center mt-10 text-muted-foreground">
              Barcha ochiq vakansiyalarni ko'rish uchun{' '}
              <a href="#" className="text-primary hover:underline">
                bu yerni bosing
              </a>
              .
            </p>
          </div>
        </motion.section>

        {/* Testimonial section */}
        <motion.section
          id="yutuqlar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={sectionVariants}
          className="py-20 bg-primary text-primary-foreground rounded-xl my-10">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-8">Mijozlarimiz Biz Haqimizda Nima Deydi</h3>
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl italic leading-relaxed">
                "DE LI SIN jamoasi bizning loyihamiz uchun ajoyib mutaxassislarni topib berdi.
                Ularning professionalligi va tezkorligi bizni hayratda qoldirdi. Albatta yana
                hamkorlik qilamiz!"
              </p>
              <footer className="mt-6 font-semibold">
                - Alisher Rustamov, CEO @ TechSolutions
              </footer>
            </blockquote>
          </div>
        </motion.section>
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}
