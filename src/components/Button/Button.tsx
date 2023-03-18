interface Props {
  title: string;
  type?: string;
  className?: string;
}

export default function Button(props: Props) {
  const { title, className } = props;
  return (
    <a href="#/" className="text-h6 font-semibold leading-6 text-blue-500">
      <button
        className={`px-6 py-2 transition ease-in duration-200 rounded-full border-2 border-gray-900 focus:outline-none ${className}`}
      >
        {title}
      </button>
    </a>
  );
}
