import React,{useState, useEffect,useRef,} from 'react'

export default function Progress({percent,className="",children,...props}) {
  const barRef= useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
  const observer=new window.IntersectionObserver(
   ([entry]) => {
  setVisible(entry.isIntersecting);
}, { threshold: 0.3 }
);
  if (barRef.current) {
    observer.observe(barRef.current);
  }
  return () => observer.disconnect();
  }, []);
  useEffect(() =>{
      setTimeout(() => {
          if (barRef.current && visible) {
              barRef.current.style.width =percent;
          }
          else if (barRef.current) {
        barRef.current.style.width = 0;
      }
      }, 60);

  },[percent,visible])

  return (
    <div
    ref={barRef}
    className={`progress-bar-progress ${className} `}
     style={{width:0}} {...props}>
      {children}
    </div>
  )
}
