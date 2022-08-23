interface ButtonProps {
  title?: string;
}

const Button = (props: ButtonProps) => {
  const { title = "Get Stated" } = props;
  return (
    <button
      type="button"
      className="bg-blue-gradient py-4 px-6 mt-10 text-primary font-poppins font-medium outline-none rounded-[10px]"
    >
      {title}
    </button>
  );
};

export default Button;
