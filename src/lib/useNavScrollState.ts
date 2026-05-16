import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useNavScrollState(): boolean {
  const [frosted, setFrosted] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '.hero',
      start: 'bottom top',
      onEnter: () => setFrosted(true),
      onLeaveBack: () => setFrosted(false),
    });
    return () => {
      trigger.kill();
    };
  }, []);

  return frosted;
}
