export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">DE LI SIN</h3>
            <p className="text-muted-foreground">
              O'zbekistonning eng yaxshi IT iste'dodlari bilan global biznesni bog'laymiz.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menyular</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#xizmatlar"
                  className="text-muted-foreground hover:text-secondary-foreground">
                  Xizmatlar
                </a>
              </li>
              <li>
                <a
                  href="#qanday-ishlaydi"
                  className="text-muted-foreground hover:text-secondary-foreground">
                  Qanday ishlaydi
                </a>
              </li>
              <li>
                <a
                  href="#biz-haqimizda"
                  className="text-muted-foreground hover:text-secondary-foreground">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#vakansiyalar"
                  className="text-muted-foreground hover:text-secondary-foreground">
                  Karyera
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary-foreground">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary-foreground">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Bog'lanish</h4>
            <p className="text-muted-foreground">info@delisin.uz</p>
            <p className="text-muted-foreground">+998 99 123 45 67</p>
          </div>
        </div>
        <div className="border-t border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; 2025 DE LI SIN. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
