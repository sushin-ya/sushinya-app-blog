import Image from "next/image";

export default function UsesPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">Uses</h1>
        <p className="leading-7">The things I use in my daily life.</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl">Laptop</h2>
        <Image
          src="/uses/laptop/macbook.png"
          width="1015"
          height="571"
          alt="laptop"
        />
        <div className="flex justify-center">
          <p>MacBook Air M3, 13-inch, 2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">Accessories</h2>
        <p className="leading-7">Accessories</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">Hardware</h2>
        <p className="leading-7">Hardware</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">Software</h2>
        <p className="leading-7">Software</p>
      </div>
    </section>
  );
}
