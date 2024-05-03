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
    <aside className="">
      <nav className="">
        <div className="">
          {Object.entries(navigationItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path}>
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
