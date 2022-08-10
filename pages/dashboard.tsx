import type { NextApiRequest, NextApiResponse } from "next";

const Dashboard = ({ token }: { token?: any }) => {
  const userInfo = JSON.parse(token);

  return (
    <div className="min-h-screen w-screen bg-yellow-400">
      <div className="bg-black h-24 flex items-center justify-between px-24 mb-8">
        <div className="text-white text-5xl tracking-wide">LEM🍋N</div>
        <button className=" bg-yellow-300 rounded-md py-1 px-4 text-black hover:bg-yellow-400 transition duration-300">
          Log Out
        </button>
      </div>

      <div className="bg-white max-w-2xl mx-auto drop-shadow-lg p-8 rounded-md">
        <h1>this is the dashboard</h1>
        <p>{userInfo.id}</p>
        <p>{userInfo.name}</p>
        <p>{userInfo.company}</p>
      </div>
    </div>
  );
};

export default Dashboard;

export function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return { props: { token: req.cookies.token || "" } };
}
