import { useEffect, useRef, useState } from 'react'

const AnimatedSection = ({ children, className = '', ...props }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref} 
      {...props} 
      className={`${className} animate-enter overflow-x-clip ${visible ? 'visible' : ''}`}
    >
      {children}
    </section>
  )
}

export default AnimatedSection
