import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import Loader from "../components/Loader";
import ParallaxBackground from "../components/ParallaxBackground";
import { Spiderman } from "../components/Spiderman";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Mobile settings
  const mobileScale = 0.085;
  const mobilePosition = [-9, -17, -1];

  // Tablet settings (used for screens between 640px and 1023px)
  const tabletScale = 0.125;
  const tabletPosition = [-9, -17, -1];

  // Desktop settings (used for screens >= 1024px)
  const desktopScale = 0.125;
  const desktopPosition = [-9, -17, -1];

  // Determine current scale and position based on screen size
  let currentScale;
  let currentPosition;

  if (isMobile) {
    currentScale = mobileScale;
    currentPosition = mobilePosition;
  } else if (isDesktop) {
    currentScale = desktopScale;
    currentPosition = desktopPosition;
  } else {
    // Fallback to tablet settings for the medium range (sm to lg)
    currentScale = tabletScale;
    currentPosition = tabletPosition;
  }

  return (
    // Updated className to center items vertically (items-center) and horizontally (justify-center)
    <section className="flex items-center justify-center min-h-screen overflow-hidden c-space" id="hero">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 z-40"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [1, 1,1], fov:75}}>
          <ambientLight intensity={1} />
    
  
   {/* Key Light (Frontal/Top - Bright but slightly desaturated cool white/light blue for core illumination) */}
  {/* This illuminates the main features without overwhelming the vibrant rim lights. */}
  <directionalLight position={[0, 10, 10]} intensity={4.5} color="#B0E0E6" /> {/* PowderBlue - a pale, cool blue */}

  {/* Strong Rim Light 1 (Back-Right - Vibrant Red/Hot Pink for dramatic outline) */}
  {/* Creates a fiery edge, essential for Spider-Verse pop */}
  <directionalLight position={[10, 5, -10]} intensity={6} color="#FF4500" /> {/* OrangeRed - intense, fiery red */}

  {/* Strong Rim Light 2 (Back-Left - Electric Blue/Cyan for contrasting outline) */}
  {/* Creates a cool, electric edge, providing a sharp visual contrast to the red. */}
  <directionalLight position={[-10, 5, -10]} intensity={6} color="#00BFFF" /> {/* DeepSkyBlue - vibrant electric blue */}

  {/* Optional Fill Light (Subtle Bottom-Up - A gentle, perhaps slightly purple or yellow tint for interesting shadow fill) */}
  {/* Prevents completely black undersides and adds another layer of color. */}
  <directionalLight position={[0, 5, 5]} intensity={1.5} color="#D8BFD8" /> {/* Thistle - a soft, pale purple */}


          <Suspense fallback={<Loader />}>
            <Float >
              <Spiderman
                scale={currentScale}
                position={currentPosition}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;