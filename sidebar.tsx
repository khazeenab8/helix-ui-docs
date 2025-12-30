"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Button", href: "/button" },
  { name: "Card", href: "/card" },
  { name: "Input", href: "/input" },
  { name: "Alert", href: "/alert" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false); // mobile

  const filtered = NAV_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3 md:hidden">
        <div className="font-bold">Helix UI</div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          Menu
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r p-4 md:block">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Helix UI</h1>

          {/* 🔍 Search */}
          <input
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-3 w-full rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <nav className="space-y-1">
          {filtered.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  active ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 border-r bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Helix UI</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border px-3 py-2 text-sm"
              >
                Close
              </button>
            </div>

            <input
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-4 w-full rounded-lg border px-3 py-2 text-sm"
            />

            <nav className="mt-4 space-y-1">
              {filtered.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      active ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
