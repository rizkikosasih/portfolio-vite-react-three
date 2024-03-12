const Alert = ({ text, type }) => {
  return (
    <div className="absolute top-[4.25rem] left-0 right-0 flex justify-center items-center">
      <div
        className={`p-2 ${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert">
        <p
          className={`flex rounded-full ${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
