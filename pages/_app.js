import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6 justify-center items-center  px-52">
        <h1 className="text-5xl mt-3 font-medium text-center">
          Front-end & full-stack jobs at companies that use Post Job App.
        </h1>
        <h1 className="text-2xl text-center">
          Post Jobs App is the best place to find a job at a company where you
          can spend less time styling, and more time shipping.
        </h1>
        <main className="w-full">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
