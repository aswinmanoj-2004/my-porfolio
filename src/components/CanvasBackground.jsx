import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleRing() {
  const ref = useRef();
  
  // Custom sphere generator to avoid external dependencies
  const [sphere] = useState(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 1000; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5; // Radius up to 1.5
      
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
  });
  
  // Track scroll position
  const scrollRef = useRef(0);
  
  // Track mouse coordinates
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    // Slow base rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Scroll based rotation influence
    const scrollTarget = scrollRef.current * 0.0005;
    ref.current.rotation.y += (scrollTarget - ref.current.rotation.y) * 0.05;
    
    // Mouse hover influence (slight tilt)
    const targetX = mouseRef.current.x * 0.15;
    const targetY = mouseRef.current.y * 0.15;
    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += (targetX - ref.current.rotation.z) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 50%, #0c0c0f 0%, #030303 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleRing />
      </Canvas>
    </div>
  );
}
