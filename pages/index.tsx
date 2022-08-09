import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="w-1/8 shadow-lg p-12 border-2">
        Next JS App configured with TypeScript & Tailwind CSS
      </h1>
    </div>
  );
};

export default Home;
