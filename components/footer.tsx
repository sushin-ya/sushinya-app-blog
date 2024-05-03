import Link from "next/link";

const navigationItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/about": {
    name: "About",
  },
  "/uses": {
    name: "Uses",
  },
  "/recommend": {
    name: "Recommend",
  },
  "https://github.com/sushin-ya": {
    name: "GitHub",
  },
  "https://twitter.com/sushin_ya": {
    name: "Twitter",
  },
};

export function Footer() {
  return (
    <footer className="flex flex-col gap-10 pb-4">
      <nav>
        <div className="grid grid-cols-3 gap-5">
          {Object.entries(navigationItems).map(([path, { name }]) => {
            return (
              <div key={path}>
                <Link
                  
                  href={path}
                  className="text-neutral-500 inline-block"
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      <div className="flex flex-col text-neutral-600">
        {/* TODO: GTM入れる */}
        <small>This site uses Google Analytics.</small>
        <small>&copy;2024 Sushin-ya</small>
      </div>
    </footer>
  );
}
