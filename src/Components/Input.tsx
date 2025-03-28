
interface InputProps {
    placeholder: string;
    ref? : React.Ref<HTMLInputElement>
    onChange?(): void;
  }
  
 export  const Input = (props: InputProps) => {
    return (
      <div className="w-full">
        <input ref={props.ref}
          placeholder={props.placeholder}
          className="  placeholder:text-blue-500 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition duration-200"
        />
      </div>
    );
  };