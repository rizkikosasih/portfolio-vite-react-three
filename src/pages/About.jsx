import imgAbout from "./../assets/images/photo.jpg"
import CTA from "./../components/CTA"
import { educations } from "../constants/index"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Rizki</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center my-6">
        <div className="flex flex-col items-center md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2">
          <p className="text-justify text-lg text-slate-500">
            A Website Developer with more than 2.5 years of experience in this field developing, testing and observing company applications and equipped with Full-Stack knowledge & skills. Currently looking for a startup technology company to develop an application.
          </p>
        </div>

        <div
          className="relative flex flex-col justify-center items-center my-10 md:my-0 md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2"
        >
          <div
            className="border-image w-[260px] h-[260px] md:w-[380px] md:h-[380px]"
          />
          <img
            src={imgAbout}
            className="rounded-full w-[240px] h-[240px] md:w-[360px] md:h-[360px]"
          />
        </div>
      </div>

      <h1 className="head-text py-10">Educations</h1>

      <div className="flex flex-wrap">
        {educations.map((education) => (
          <div className="w-1/2 my-10" key={education.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${education.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={education.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {education.name}
              </h4>
              <p className="mt-2 text-slate-500">
                <span className="font-semibold">{education.periode}</span>
                <br />
                {education.schoolName}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About
