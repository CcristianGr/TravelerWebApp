import { Link, useLocation } from "react-router-dom";

type NavLinkActiveProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const NavLinkActive = ({ to, children, className = "" }: NavLinkActiveProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${isActive ? "text-primary" : "text-black hover:text-primary"} ${className}`}>
      {children}
    </Link>
  );
};