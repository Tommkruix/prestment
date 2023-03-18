import Button from "@components/Button/Button";

export default function CardFive() {
  return (
    <section className="bg-white-100">
      <div className="w-11/12 my-24 relative overflow-hidden md:w-3/4 lg:w-3/4 mx-auto rounded-lg bg-blue-500 px-4 py-12 sm:py-16 lg:py-20 text-white-500 text-center">
        <div className="h-full relative z-10">
          <h2 className="text-h2 my-5 font-light leading-11">
            An enterprise template to ramp <br /> up your company website
          </h2>
          <div className="inline-grid md:inline-flex lg:inline-flex justify-center items-center lg:flex-row md:flex-row w-1/2 items-center gap-4">
            <div>
              <input
                type="text"
                id="rounded-email"
                className="rounded-full border-transparent h-5/12 flex-1 appearance-none py-2 px-4 bg-white text-black-500 placeholder-black-500 text-h5 focus:outline-none"
                placeholder="Your email address"
              />
            </div>
            <div>
              <Button
                title="Start now"
                className="text-blue-500 bg-green-500 flex-1 py-2 px-4 text-h5"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-2/3 w-full h-full aspect-w-1 aspect-h-1 rounded-full bg-blue-300 z-0"
          style={{ borderRadius: "100%" }}
        ></div>
      </div>
    </section>
  );
}
