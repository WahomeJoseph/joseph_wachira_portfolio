/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  // Rotate the mesh continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03; // Adjust rotation speed
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6} // Reduced size
        position={isMobile ? [0, -2, -1.5] : [0, -2.5, -1]} // Adjusted for new scale
        rotation={[-0.01, -0.2, -0.1]} // Initial rotation
      />
    </mesh>
  );
};
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // If on mobile, display only the background
  if (isMobile) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, #1f1f1f, #121212)",
        }}
      />
    );
  }

  // Render the 3D scene for non-mobile devices
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
