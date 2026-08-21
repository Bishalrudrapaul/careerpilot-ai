import { motion } from 'motion/react'
import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  UserRound,
} from 'lucide-react'
import CareerMiniCard from './CareerMiniCard'
import CareerNode from './CareerNode'
import CareerSystemHeader from './CareerSystemHeader'
import CareerSystemStatus from './CareerSystemStatus'

const nodes = [
  {
    label: 'Your Profile',
    detail: 'Skills • Education • Experience',
    icon: UserRound,
  },
  {
    label: 'Career Intelligence',
    detail: 'Understand your strengths',
    icon: BrainCircuit,
  },
  {
    label: 'Opportunities',
    detail: 'Find where you fit',
    icon: BriefcaseBusiness,
  },
]

export default function CareerSystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-10 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_35px_100px_-35px_rgba(39,30,100,0.35)] backdrop-blur-xl">
        <CareerSystemHeader />

        <div className="relative mt-6 min-h-[360px]">
          <div className="absolute left-1/2 top-[105px] hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-violet-200 via-violet-400 to-cyan-200 md:block" />

          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 mx-auto w-full max-w-[240px]"
          >
            <CareerNode
              label={nodes[1].label}
              detail={nodes[1].detail}
              icon={nodes[1].icon}
              featured
            />
          </motion.div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <CareerNode
              label={nodes[0].label}
              detail={nodes[0].detail}
              icon={nodes[0].icon}
            />

            <CareerNode
              label={nodes[2].label}
              detail={nodes[2].detail}
              icon={nodes[2].icon}
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <CareerMiniCard
              icon={GraduationCap}
              label="Skills"
              text="Understand your strengths"
              accent="violet"
            />

            <CareerMiniCard
              icon={BriefcaseBusiness}
              label="Opportunities"
              text="Find where you fit"
              accent="cyan"
            />

            <CareerMiniCard
              icon={BrainCircuit}
              label="Next step"
              text="Know what to improve"
              accent="amber"
            />
          </div>

          <CareerSystemStatus />
        </div>
      </div>
    </div>
  )
}