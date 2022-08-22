interface ButtonProps {}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-gradient py-4 px-6 mt-10 text-primary font-poppins font-medium outline-none"
    >
      Get started
    </button>
  );
};

export default Button;
