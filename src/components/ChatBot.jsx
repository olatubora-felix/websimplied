const ChatBot = () => {
  return (
    <div className="bg-primary h-[56px] w-[56px] rounded-full text-white shadow-lg flex justify-center items-center fixed bottom-10 right-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-circle-code"
      >
        <path d="M10 9.5 8 12l2 2.5" />
        <path d="m14 9.5 2 2.5-2 2.5" />
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
      </svg>
    </div>
  );
};

export default ChatBot;
