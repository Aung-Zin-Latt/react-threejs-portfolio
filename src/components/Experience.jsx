import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
  const {
    title,
    company_name,
    icon,
    iconBg,
    date,
    points,
    highlights = [],
  } = experience;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {highlights.length > 0 && (
        <>
          <h4 className="text-white text-[16px] font-semibold mt-6 mb-2">
            These experiences have:
          </h4>
          <ul className="list-disc ml-5 space-y-2">
            {highlights.map((item, index) => (
              <li
                key={`experience-highlight-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>What I have done so far!</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2> 
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
