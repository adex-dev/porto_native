import DarkmodeIcon from "../assets/icon/darkmode.svg?react";
  interface ButtonDarkmodeProps {
    title: string;
    className?: string;
    onClick: () => void;
  }
  export default function ButtonDarkmode({
    title,
    className,
    onClick,
  }: ButtonDarkmodeProps) {
    return (
      <button
        type="button"
        className={className}
        aria-label={title}
        onClick={onClick}>
        <DarkmodeIcon />
      </button>
    );
  }
