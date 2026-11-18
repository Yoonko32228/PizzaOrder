"use client";

import { useState } from "react";

export default function PizzaBuilder() {
  const [size, setSize] = useState("M");
  const [cheese, setCheese] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [count, setCount] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const sizePrices = {
    S: { name: "Жижиг", price: 15000 },
    M: { name: "Дунд", price: 20000 },
    L: { name: "Том", price: 25000 },
  };

  const cheesePrice = cheese ? 3000 : 0;
  const mushroomPrice = mushroom ? 2000 : 0;
  const pepperPrice = pepper ? 1000 : 0;

  const singlePrice =
    sizePrices[size].price + cheesePrice + mushroomPrice + pepperPrice;

  const totalPrice = singlePrice * count;
  const discount = count >= 3 ? 0.1 : 0;
  const finalPrice = totalPrice * (1 - discount);

  const formatPrice = (price) => price.toLocaleString("en-US") + "₮";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-5 text-5xl shadow-sm">
            🍕
          </div>

          <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Pizza Builder
          </h1>

          <p className="mt-3 text-gray-500">
            Өөрийн дуртай пиццагаа өөрөө угсраарай!
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-white">
            <h2 className="text-xl font-bold">🍕 Пицца захиалга</h2>
            <p className="mt-1 text-sm text-orange-100">
              Хэмжээ болон нэмэлтээ сонгоно уу
            </p>
          </div>

          <div className="space-y-9 p-6 md:p-8">
            {/* SIZE */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  01. Хэмжээ сонгох
                </h2>
                <span className="text-sm text-gray-400">Хэмжээ</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["S", "M", "L"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSize(item);
                      setOrdered(false);
                    }}
                    className={`rounded-2xl border-2 p-4 text-center transition-all duration-200 hover:-translate-y-1 ${
                      size === item
                        ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-200"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                    }`}
                  >
                    <div className="mb-2 text-3xl">
                      {item === "S" ? "🍕" : item === "M" ? "🍕🍕" : "🍕🍕🍕"}
                    </div>

                    <p className="font-bold">{sizePrices[item].name}</p>

                    <p className="mt-1 text-sm font-semibold">
                      {formatPrice(sizePrices[item].price)}
                    </p>
                  </button>
                ))}
              </div>
            </section>
            <section>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  02. Нэмэлт сонгох
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Хэд хэдийг зэрэг сонгож болно
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setCheese(!cheese);
                    setOrdered(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                    cheese
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🧀</span>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Бяслаг</p>
                      <p className="text-sm text-gray-400">+3,000₮</p>
                    </div>
                  </div>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      cheese
                        ? "bg-green-500 text-white"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {cheese && "✓"}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setMushroom(!mushroom);
                    setOrdered(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                    mushroom
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🍄</span>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Мөөг</p>
                      <p className="text-sm text-gray-400">+2,000₮</p>
                    </div>
                  </div>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      mushroom
                        ? "bg-green-500 text-white"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {mushroom && "✓"}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setPepper(!pepper);
                    setOrdered(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                    pepper
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🌶️</span>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">Чинжүү</p>
                      <p className="text-sm text-gray-400">+1,000₮</p>
                    </div>
                  </div>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      pepper
                        ? "bg-green-500 text-white"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {pepper && "✓"}
                  </span>
                </button>
              </div>
            </section>

            {/* COUNT */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-800">
                03. Тоо ширхэг
              </h2>

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-5">
                <div>
                  <p className="font-bold text-gray-800">Пиццаны тоо</p>
                  <p className="text-sm text-gray-400">1-5 ширхэг</p>
                </div>

                <div className="flex items-center gap-5">
                  <button
                    disabled={count === 1}
                    onClick={() => {
                      setCount(count - 1);
                      setOrdered(false);
                    }}
                    className="h-11 w-11 rounded-xl bg-white text-2xl font-bold text-orange-500 shadow-sm transition hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    −
                  </button>

                  <span className="min-w-6 text-center text-2xl font-black text-gray-800">
                    {count}
                  </span>

                  <button
                    disabled={count === 5}
                    onClick={() => {
                      setCount(count + 1);
                      setOrdered(false);
                    }}
                    className="h-11 w-11 rounded-xl bg-orange-500 text-2xl font-bold text-white shadow-md transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            </section>

            {/* SUMMARY */}
            <section className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="mb-5 text-xl font-black text-gray-800">
                🧾 Таны захиалга
              </h2>

              <div className="mb-4 rounded-xl bg-white p-4">
                <p className="text-lg font-bold text-gray-800">
                  {sizePrices[size].name} пицца
                </p>

                <p className="mt-2 text-2xl">
                  {cheese && "🧀 "}
                  {mushroom && "🍄 "}
                  {pepper && "🌶️ "}
                  {!cheese && !mushroom && !pepper && (
                    <span className="text-sm text-gray-400">Нэмэлтгүй</span>
                  )}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Тоо ширхэг</span>
                  <span className="font-bold text-gray-900">{count}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Нэг пиццаны үнэ</span>
                  <span className="font-bold text-gray-900">
                    {formatPrice(singlePrice)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Нийт үнэ</span>
                  <span className="font-bold text-gray-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between font-bold text-green-600">
                    <span>🎉 Хямдрал (10%)</span>
                    <span>-{formatPrice(totalPrice * discount)}</span>
                  </div>
                )}
              </div>

              <div className="my-5 border-t border-orange-200" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-700">
                  Төлөх нийт үнэ
                </span>

                <span className="text-2xl font-black text-orange-600">
                  {formatPrice(finalPrice)}
                </span>
              </div>

              <button
                onClick={() => setOrdered(true)}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-black text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                🍕 Захиалах
              </button>

              {ordered && (
                <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-center">
                  <p className="font-bold text-green-700">
                    ✅ Захиалга баталгаажлаа!
                  </p>
                  <p className="mt-1 text-sm text-green-600">
                    Баярлалаа! Таны захиалга амжилттай.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Made with ❤️ Pizza Builder
        </p>
      </div>
    </div>
  );
}
