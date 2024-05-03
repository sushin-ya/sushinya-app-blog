export default function RecommendPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">Recommend</h1>
        <p className="leading-7">My favorite things.</p>
        {/* TODO: 好きなものリストを作って画像のurlを取得すること */}
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4">
        {Array.from({ length: 20 }).map((_, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="mb-4"
            src={`https://source.unsplash.com/random/${index}`}
            alt=""
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
