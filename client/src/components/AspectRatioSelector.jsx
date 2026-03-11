import React from "react"
import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react"
import { aspectRatios } from "../assets/assets"
const AspectRatioSelector = ({value, onChange}) => {
    const iconMap = {
        '16:9': <RectangleHorizontal className="size-6" />,
        '1:1': <Square className="size-6" />,
        '9:16': <RectangleVertical className="size-6" />,
    }
  return (
    <div className='space-y-3 dark'>
      <label htmlFor="" className='block text-sm font-medium tet-zinc-200'>Aspect Ratio</label>
      <div className='flex flex-wrap gap-2'>
        {aspectRatios.map((ratio)=>{
            const selected = value === ratio;
            return (
            <button onClick={()=>onChange(ratio)} type="button" key={ratio} className={`flex items-center gap-2 px-5 py-2.5 rounded-md border text-sm text-zinc-100 transition border-white/10 ${selected ? 'bg-white/10' : 'hover:bg-white-6'}`}>
                {iconMap[ratio]}
                <span className="tracking-widest">{ratio}</span>
            </button>
            )
        })}
      </div>
    </div>
  )
}

export default AspectRatioSelector
