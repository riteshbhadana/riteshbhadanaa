const Languages = () => {
    return (
      <div className="border-b border-neutral-800 pb-12">
        <h1 className="my-20 text-center text-4xl font-bold text-neutral-0">Languages</h1>
        <ul className="max-w-md mx-auto grid gap-4">
          <li className="flex items-center space-x-2 text-lg text-neutral-100">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-3xl font-bold">हिं</span>
            </div>
            <span className="font-semibold">Hindi:</span> <span className="opacity-50">Native</span>
          </li>
          <li className="flex items-center space-x-2 text-lg text-neutral-100">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-3xl font-bold">E</span>
            </div>
            <span className="font-semibold">English:</span> <span className="opacity-50">Fluent</span>
          </li>
          <li className="flex items-center space-x-2 text-lg text-neutral-100">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-3xl font-bold">D</span>
            </div>
            <span className="font-semibold">German:</span> <span className="opacity-50">Intermediate</span>
          </li>
          <li className="flex items-center space-x-2 text-lg text-neutral-100">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
              <span className="text-3xl font-bold">ਪੰ</span>
            </div>
            <span className="font-semibold">Punjabi:</span> <span className="opacity-50">Speaking</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Languages;
  