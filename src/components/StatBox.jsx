import React, {useRef}from  'react'

export default function StatBox({ children,className="",...props}) {
    const ref=useRef();
    const handleMouseMove=(e)=>{
        const box=ref.current;
        const rect=box.getBoundingClientRect();
        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;
        const rotateX=(-y/10).toFixed(2);
        const rotateY=(x/10).toFixed(2);
        box.style.transform=`translateY(-8px) scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;   
    };
    const handleMouseLeave=()=>{
ref.current.style.transform ="";
};


  return (
    <div ref={ref}
    className={`stat-box-unique ${className ? " "+className : ""}`}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    {...props} >
        {children}
      
    </div>
  )
}
