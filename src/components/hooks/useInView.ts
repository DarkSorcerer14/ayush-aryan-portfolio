<<<<<<< HEAD
import { useEffect, useState, useRef, RefObject } from 'react';

type IntersectionOptions = IntersectionObserverInit;

// Detects when the attached element enters the viewport
const useInView = (options: IntersectionOptions = {}): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Stop observing after the first trigger
        if (ref.current) observer.unobserve(ref.current); 
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

=======
import { useEffect, useState, useRef, RefObject } from 'react';

type IntersectionOptions = IntersectionObserverInit;

// Detects when the attached element enters the viewport
const useInView = (options: IntersectionOptions = {}): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Stop observing after the first trigger
        if (ref.current) observer.unobserve(ref.current); 
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

>>>>>>> ecc36ef0593a87cc67c25e0c39f43a292ea12f12
export default useInView;