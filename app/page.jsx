export default function Home() {
  return (
    <div className="container bg-gradient-to-br from-[#6025F5] to-[#FF5555]
    p-7 flex flex-col items-center h-svh mx-auto rounded-lg">
      <h1 className="font-semibold text-7xl text-center uppercase">
        Welcome to practice Next user App
      </h1>
      <p className="font-semibold text-2xl text-center my-2">
        This is a test project to explore the NextJs environment in building
        user interfaces.{" "}
      </p>
      <p className="font-normal text-xl text-center my-3">
        In the next button you will find a panel with multiple user cards that
        are being consumed from a practice ApiRest.
      </p>
      <button className="rounded-xl bg-white text-pink-500 px-5 py-3 text-base font-medium transition duration-200 hover:shadow-lg hover:shadow-indigo-300">
        Users
      </button>
    </div>
  );
}
