import TypeWriter from "@/components/typewriter";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-8/12 flex flex-col h-full bg-gray-100 container mx-auto">
        <div className="my-2">
          <h5 className="text-2xl font-bold">Trix Url</h5>
        </div>
        <div className="flex-1 flex items-start justify-center h-full  gap-3 flex-col">
          <h1 className="text-7xl font-bold">Url Shortener</h1>

          <h5 className="text-3xl font-semibold">
            <TypeWriter />
          </h5>
        </div>
      </div>
      <div className="w-4/12 h-full bg-white">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
