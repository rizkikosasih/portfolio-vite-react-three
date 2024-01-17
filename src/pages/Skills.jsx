import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import CTA from "./../components/CTA"
import { experiences, skills } from "./../constants/index"
import { Tooltip } from "react-tooltip"

const Skills = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>My <span className="blue-gradient_text">Skills</span></h1>
      <div className='flex flex-col'>

        <div className='mt-16 flex flex-wrap gap-12 justify-center md:justify-normal'>
          {skills.map((skill) => (
            <div className='block-container w-16 h-16 md:w-20 md:h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div
                data-tooltip-id={skill.name.trim().toLowerCase()}
                data-tooltip-html={`<p class='font-semibold'>${skill.name}</p>`}
                className='btn-front rounded-xl flex justify-center items-center'
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>

              <Tooltip
                id={skill.name.trim().toLowerCase()}
                style={{
                  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                  color: 'rgb(224, 231, 225)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="title py-10">
        <h1 className='head-text'>Work Experience</h1>
        <p className='mt-4 text-slate-500'>My experience in building and developing webs. Here's the rundown:</p>
      </div>

      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: experience.iconBg,
              boxShadow: "none",
            }}
          >
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {experience.title}
              </h3>
              <p
                className='text-black-500 font-medium text-base'
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-black-500/50 font-normal pl-1 text-sm'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Skills
