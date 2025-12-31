"use client";

import { useModalStore } from "@/providers/modal-store-provider";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  text_color?: string;
}

export default function NavLink({ href, children, text_color }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const { closeModal } = useModalStore((state) => state);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeModal();

    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <div className="relative flex justify-center items-center flex-col">
      <a
        style={{ color: text_color }}
        href={href}
        onClick={handleClick}
        className={clsx(
          "transition-colors",
          isActive ? "text-[var(--foreground)]" : "text-[var(--primary-color)]"
        )}
      >
        {children}
      </a>

      {isActive && (
        <div
          style={{ backgroundColor: text_color }}
          className="w-[104px] h-[1px] bg-black absolute -bottom-1"
        />
      )}
    </div>
  );
}
