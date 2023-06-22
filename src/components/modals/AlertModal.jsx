const AlertModal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="bg-gray-200 bg-opacity-90 w-[80%] md:w-[50%] max-w-3xl rounded-3xl shadow-lg px-8 py-12">
        {children}
      </div>
    </div>
  );
};
export default AlertModal;
