import CTA from "./../components/CTA"
import { skills } from "./../constants/index"
import { Tooltip } from "react-tooltip"

const Skills = () => {
  return (
    <section className="max-container">
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My <span className="blue-gradient_text">Skills</span></h3>

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

      <CTA />
    </section>
  )
}

export default Skills
