import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Aside({
  menuItems,
}: {
  menuItems: { href: string; name: string }[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // 🔹 Logout qilish logikasi (tokenni o‘chirish, session tugatish)
    localStorage.removeItem("access-token"); // Yoki sessionStorage.removeItem()
    localStorage.removeItem("refresh-token"); // Yoki sessionStorage.removeItem()

    // 🔹 Login sahifasiga yo‘naltirish
    router.push("/");
  };

  return (
    <aside className="sidebar">
      <h2>
        <Link href={"/dashboard"}>Dashboard</Link>
      </h2>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={pathname === item.href ? "active" : ""}>
              {item.name}
            </a>
          </Link>
        ))}
      </nav>

      {/* Log Out Tugmasi */}
      <button
        onClick={handleLogout}
        className="logout"
      >
        Log Out
      </button>
    </aside>
  );
}
