import { useMemo, useState } from "react";

export default function FlowerShop() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [floristPopup, setFloristPopup] = useState(false);
  const flowers = [
    {
      id: 1,
      name: "Розовый Рассвет",
      price: "3 490 ₽",
      flowers: "21 розовая роза",
      occasion: "День рождения, свидание, романтический подарок",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Белая Нежность",
      price: "2 990 ₽",
      flowers: "15 белых лилий",
      occasion: "Свадьба, юбилей, благодарность",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Весенний Микс",
      price: "4 290 ₽",
      flowers: "Тюльпаны, пионы, ромашки",
      occasion: "8 марта, день рождения, подарок маме",
      image:
        "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Лавандовый Вечер",
      price: "3 890 ₽",
      flowers: "17 лавандовых роз и эвкалипт",
      occasion: "Свидание, годовщина, свадьба",
      image:
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Солнечные Тюльпаны",
      price: "2 490 ₽",
      flowers: "25 жёлтых тюльпанов",
      occasion: "Весенний подарок, день рождения",
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Пионовый Шик",
      price: "5 190 ₽",
      flowers: "19 пионов премиум",
      occasion: "Свадьба, юбилей, роскошный подарок",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Алые Розы",
      price: "4 790 ₽",
      flowers: "35 красных роз",
      occasion: "Романтический подарок, годовщина",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Нежный Букет",
      price: "3 190 ₽",
      flowers: "Розы, гортензии и пионы",
      occasion: "Свадьба, подарок девушке",
      image:
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Цветочная Симфония",
      price: "6 490 ₽",
      flowers: "Авторский микс из 45 цветов",
      occasion: "VIP подарок, большое событие",
      image:
        "https://images.unsplash.com/photo-1518621012420-8f5c59d3d2d4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const filteredFlowers = useMemo(() => {
    return flowers.filter((flower) => {
      const value = search.toLowerCase();

      return (
        flower.name.toLowerCase().includes(value) ||
        flower.flowers.toLowerCase().includes(value) ||
        flower.occasion.toLowerCase().includes(value)
      );
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold text-pink-600">Цветок Москвы</h1>
            <p className="text-sm text-gray-500">
              Доставка свежих букетов за 60 минут
            </p>
          </div>

          <div className="hidden w-full max-w-md md:block">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск букетов..."
              className="w-full rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3 outline-none transition focus:border-pink-400"
            />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:min-h-[55vh] md:grid-cols-2">
          <div>
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Свежие цветы каждый день
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Букеты,
              <span className="text-pink-600"> которые дарят эмоции</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Авторские композиции, быстрая доставка по Москве и открытка в
              подарок к каждому заказу.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setFloristPopup(true)}
                className="rounded-2xl bg-pink-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-pink-700"
              >
                Выбрать с флористом
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1400&auto=format&fit=crop"
              alt="Букет"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <main className="mx-auto -mt-6 max-w-7xl px-6 py-10 md:-mt-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold">Популярные букеты</h3>
            <p className="mt-2 text-gray-500">
              Самые популярные композиции среди наших клиентов
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <div className="rounded-2xl bg-white px-5 py-3 shadow">
              🚚 Доставка 24/7
            </div>
            <div className="rounded-2xl bg-white px-5 py-3 shadow">
              🌸 Только свежие цветы
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredFlowers.map((flower) => (
            <div
              key={flower.id}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => setSelectedFlower(flower)}
            >
              <div className="overflow-hidden">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold">{flower.name}</h4>
                    <p className="mt-2 text-xl font-bold text-pink-600">
                      {flower.price}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-pink-600 px-5 py-3 font-medium text-white transition group-hover:bg-pink-700">
                    Подробнее
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[32px] bg-pink-600 p-10 text-white shadow-2xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-2xl font-bold">Бесплатная открытка</h4>
              <p className="mt-3 text-pink-100">
                Добавьте тёплые слова к любому заказу.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold">Доставка за 60 минут</h4>
              <p className="mt-3 text-pink-100">
                Быстро привезём букет в любую точку города.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold">Фото перед отправкой</h4>
              <p className="mt-3 text-pink-100">
                Покажем готовый букет перед доставкой.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <h5 className="text-2xl font-bold text-pink-600">Цветок Москвы</h5>
            <p className="mt-4 text-gray-500">
              Стильные букеты и быстрая доставка цветов по Москве.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold">Контакты</h6>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>+7 (999) 123-45-67</li>
              <li>flowers@example.com</li>
              <li>Москва, ул. Цветочная, 12</li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold">Навигация</h6>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Каталог</li>
              <li>Доставка</li>
              <li>Отзывы</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold">Соцсети</h6>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Instagram</li>
              <li>Telegram</li>
              <li>VK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 py-5 text-center text-sm text-gray-400">
          © 2026 Цветок Москвы. Все права защищены.
        </div>
        {successMessage && (
          <div className="fixed right-6 top-6 z-[100] rounded-3xl bg-pink-600 px-8 py-5 text-lg font-semibold text-white shadow-2xl">
            Великолепно! Скоро с вами свяжутся наши флористы 🌸
          </div>
        )}

        {floristPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
            <div className="relative w-full max-w-lg rounded-[32px] bg-white p-6 shadow-2xl">
              <button
                onClick={() => setFloristPopup(false)}
                className="absolute right-5 top-5 text-3xl text-gray-400 transition hover:text-black"
              >
                ×
              </button>

              <h3 className="text-3xl font-bold">Помощь флориста 🌸</h3>

              <p className="mt-4 text-gray-600">
                Оставьте заявку и наш флорист поможет подобрать идеальный букет
                под ваш повод и бюджет.
              </p>

              <div className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                />

                <input
                  type="text"
                  placeholder="Телефон"
                  className="rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                />

                <textarea
                  placeholder="Например: нужен букет на день рождения до 5000 ₽"
                  className="h-28 rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                />
              </div>

              <button
                onClick={() => {
                  setFloristPopup(false);
                  setSuccessMessage(true);

                  setTimeout(() => {
                    setSuccessMessage(false);
                  }, 5000);
                }}
                className="mt-6 w-full rounded-2xl bg-pink-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
              >
                Связаться с флористом
              </button>
            </div>
          </div>
        )}

        {selectedFlower && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
            <div className="relative w-full max-w-xl rounded-[32px] bg-white p-6 shadow-2xl">
              <button
                onClick={() => setSelectedFlower(null)}
                className="absolute right-5 top-5 text-3xl text-gray-400 transition hover:text-black"
              >
                ×
              </button>

              <img
                src={selectedFlower.image}
                alt={selectedFlower.name}
                className="h-44 w-full rounded-3xl object-cover"
              />

              <div className="mt-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-4xl font-bold">
                      {selectedFlower.name}
                    </h3>
                    <p className="mt-2 text-2xl font-bold text-pink-600">
                      {selectedFlower.price}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-pink-100 px-5 py-3 text-sm font-medium text-pink-700">
                    🌸 Всегда свежие цветы
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-pink-50 p-4">
                    <h4 className="text-xl font-bold">Состав букета</h4>
                    <p className="mt-3 text-gray-600">
                      {selectedFlower.flowers}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-pink-50 p-4">
                    <h4 className="text-xl font-bold">Подходит для</h4>
                    <p className="mt-3 text-gray-600">
                      {selectedFlower.occasion}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[28px] border border-pink-100 p-5">
                  <h4 className="text-2xl font-bold">Оформить заказ</h4>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                    />

                    <input
                      type="text"
                      placeholder="Телефон"
                      className="rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                    />
                  </div>

                  <textarea
                    placeholder="Комментарий к заказу"
                    className="mt-4 h-24 w-full rounded-2xl border border-pink-200 px-4 py-4 outline-none focus:border-pink-400"
                  />

                  <button
                    onClick={() => {
                      setSelectedFlower(null);
                      setSuccessMessage(true);

                      setTimeout(() => {
                        setSuccessMessage(false);
                      }, 5000);
                    }}
                    className="mt-5 w-full rounded-2xl bg-pink-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
