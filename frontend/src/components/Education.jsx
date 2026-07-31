import {useNavigate} from "react-router-dom"
const EDUCATION = [
  {
    
    title: 'B.Tech, Information Technology',
    org: 'Maharaja Surajmal Institute of Technology, Delhi',
    period: '2024 – 2028',
    
  },
  
]


export default function Education() {
  return (
    <section id="education" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: EDU — Education</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">Education </h2>

     <a  href="https://msit.in" className="flex border w-full border-gray-500 rounded-[4px] items-center p-3 mt-5 transition-all duration-300 hover:translate-x-1 hover:scale-102 ">
      <img className="w-[65px] h-[65px]" src="/images/college.png" alt="" /> 
      <div className="mt-2 flex-1 flex flex-col  p-6">
       <div className="flex w-[100%] justify-between ">
        <p>Maharaja Surajmal Institute of Technology </p>
        <p>2024-2028</p>
       </div>
       <div className="text-[14px] text-gray-400">B.Tech, Information Technology (CGPA: 8.4)</div>
      </div>
      </a>
    </section>
  )
}
