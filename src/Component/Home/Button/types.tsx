type ButtonProps = {
     className?: string | undefined;
     onClick: () => void;
     children: React.ReactNode;
     type: "button" | "submit" | "reset";
};

export default ButtonProps;