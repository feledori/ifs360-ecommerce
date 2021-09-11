import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <>
      <footer>
        <Logo size={60} />
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 60px;
          background: black;
        }
      `}</style>
    </>
  );
};
