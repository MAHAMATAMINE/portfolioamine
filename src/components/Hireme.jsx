import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  const handleDownloadCV = () => {
    // Replace 'your_cv.pdf' with the actual path to your CV file
    const downloadLink = 'https://drive.google.com/file/d/1KwOtbaAnt-6cN9WXPz4t2zKnUFIpRxoK/view?usp=drive_link';
    window.open(downloadLink, '_blank');
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;