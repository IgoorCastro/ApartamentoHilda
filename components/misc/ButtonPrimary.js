import Link from "next/link";

const ButtonPrimary = ({ children, color = "orange", href }) => {
  const colors = {
    orange: "bg-orange-500 hover:shadow-orange-md",
    blue: "bg-blue-700 hover:shadow-blue-md",
    red: "bg-red-600 hover:shadow-red-md",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg transition-all outline-none ${colors[color]}`}
    >
      {children}
    </a>

  );
};


export default ButtonPrimary;