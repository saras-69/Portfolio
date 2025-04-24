import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("AnimatedBackground mounted");
    const scene = new THREE.Scene();
    
    // Create camera with wider field of view
    const camera = new THREE.PerspectiveCamera(
      75, // Reduced field of view for better focus
      window.innerWidth / window.innerHeight, 
      0.1, 
      2000
    );
    camera.position.z = 50; // Moved camera closer
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);
    
    // Create renderer with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (!mountRef.current) return;
    mountRef.current.appendChild(renderer.domElement);
    
    // Create stars background with enhanced visibility
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000; // More stars
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i += 3) {
      // Position stars in a large sphere around the scene
      const radius = 300 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i + 2] = radius * Math.cos(phi);
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    
    // Create star material with larger, brighter stars
    const starMaterial = new THREE.PointsMaterial({
      size: Math.random() * 1.2 + 0.5, // Larger size
      transparent: true,
      opacity: 0.9, // Higher opacity
      vertexColors: true,
      sizeAttenuation: true
    });
    
    // Add colors to stars with more vibrant options
    const starColors = new Float32Array(starCount * 3);
    const colorOptions = [
      new THREE.Color(0xffffff), // white
      new THREE.Color(0x88ccff), // bright blue
      new THREE.Color(0xffaacc), // bright pink
      new THREE.Color(0xaaffaa), // light green
      new THREE.Color(0xffffaa)  // light yellow
    ];
    
    for (let i = 0; i < starCount * 3; i += 3) {
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      starColors[i] = color.r;
      starColors[i + 1] = color.g;
      starColors[i + 2] = color.b;
    }
    
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
    
    // Create larger, more prominent UFOs
    const ufos = [];
    const ufoCount = 6; // Increased count
    const createUFO = (position) => {
      // Create UFO body (disc shape) - larger size
      const bodyGeometry = new THREE.CylinderGeometry(4, 4, 1, 24, 1, false);
      const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x555555,
        specular: 0xaaaaaa,
        shininess: 80,
        transparent: true,
        opacity: 0.95
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      
      // Create more vibrant dome with glow
      const domeGeometry = new THREE.SphereGeometry(3, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
      const domeMaterial = new THREE.MeshPhongMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0.85,
        emissive: 0x0066ff,
        emissiveIntensity: 0.5
      });
      const dome = new THREE.Mesh(domeGeometry, domeMaterial);
      dome.position.y = 0.5;
      
      // Create lights around the UFO - more and brighter
      const lightGroup = new THREE.Group();
      const lightCount = 12;
      
      for (let i = 0; i < lightCount; i++) {
        const angle = (Math.PI * 2 / lightCount) * i;
        const lightGeometry = new THREE.SphereGeometry(0.5, 12, 12);
        const lightMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(i / lightCount, 1, 0.7),
          transparent: true,
          opacity: 0.9,
          emissive: 0xffffff,
          emissiveIntensity: 0.8
        });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.set(
          Math.cos(angle) * 3.5,
          -0.2,
          Math.sin(angle) * 3.5
        );
        lightGroup.add(light);
        
        // Add actual point light for glow effect
        if (i % 3 === 0) { // Add light to every third position to avoid too many lights
          const pointLight = new THREE.PointLight(
            new THREE.Color().setHSL(i / lightCount, 1, 0.5),
            0.5, // intensity
            8 // distance
          );
          pointLight.position.copy(light.position);
          lightGroup.add(pointLight);
        }
      }
      
      // Create brighter beam effect
      const beamGeometry = new THREE.ConeGeometry(5, 10, 24, 1, true);
      const beamMaterial = new THREE.MeshBasicMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.position.y = -6;
      beam.rotation.x = Math.PI;
      
      // Create UFO group and add all parts
      const ufo = new THREE.Group();
      ufo.add(body);
      ufo.add(dome);
      ufo.add(lightGroup);
      ufo.add(beam);
      
      // Add volumetric light inside the beam for more visibility
      const innerBeamGeometry = new THREE.ConeGeometry(2, 8, 16, 1, true);
      const innerBeamMaterial = new THREE.MeshBasicMaterial({
        color: 0xaaddff,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      const innerBeam = new THREE.Mesh(innerBeamGeometry, innerBeamMaterial);
      innerBeam.position.y = -5;
      innerBeam.rotation.x = Math.PI;
      ufo.add(innerBeam);
      
      // Set initial position
      ufo.position.copy(position);
      
      // Add data for animation
      ufo.userData = {
        speed: Math.random() * 0.08 + 0.04, // Slightly slower for better visibility
        rotationSpeed: Math.random() * 0.01 + 0.005,
        hoverAmplitude: Math.random() * 0.8 + 0.5, // More pronounced hovering
        hoverFrequency: Math.random() * 0.02 + 0.01,
        initialY: position.y,
        pathRadius: Math.random() * 35 + 25,
        pathAngle: Math.random() * Math.PI * 2,
        lights: lightGroup,
        beam: beam,
        innerBeam: innerBeam
      };
      
      scene.add(ufo);
      return ufo;
    };
    
    // Create multiple UFOs at different positions - more visible placements
    for (let i = 0; i < ufoCount; i++) {
      const angle = (Math.PI * 2 / ufoCount) * i;
      const radius = Math.random() * 30 + 25;
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.random() * 25 - 5, // More varied height
        Math.sin(angle) * radius
      );
      
      ufos.push(createUFO(position));
    }
    
    // Create more visible rocket
    const createRocket = () => {
      const rocketGroup = new THREE.Group();
      
      // Rocket body - larger and more detailed
      const bodyGeometry = new THREE.CylinderGeometry(1.5, 1.5, 12, 16);
      const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0xdddddd,
        specular: 0x333333,
        shininess: 50
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      
      // Add colored stripes to rocket body
      const stripesGeometry = new THREE.CylinderGeometry(1.51, 1.51, 3, 16, 1, true);
      const stripesMaterial = new THREE.MeshPhongMaterial({
        color: 0x3366cc,
        specular: 0x111111,
        shininess: 30
      });
      const stripes = new THREE.Mesh(stripesGeometry, stripesMaterial);
      stripes.position.y = 2;
      
      // Rocket nose - larger
      const noseGeometry = new THREE.ConeGeometry(1.5, 4, 16);
      const nose = new THREE.Mesh(noseGeometry, bodyMaterial);
      nose.position.y = 8;
      
      // Rocket fins - larger and more colorful
      const finGeometry = new THREE.BoxGeometry(0.6, 3, 3);
      const finMaterial = new THREE.MeshPhongMaterial({
        color: 0xff3333,
        specular: 0x333333,
        shininess: 50
      });
      
      // Add 3 fins
      for (let i = 0; i < 3; i++) {
        const fin = new THREE.Mesh(finGeometry, finMaterial);
        const angle = (Math.PI * 2 / 3) * i;
        fin.position.set(
          Math.cos(angle) * 1.8,
          -5.5,
          Math.sin(angle) * 1.8
        );
        fin.rotation.y = -angle;
        rocketGroup.add(fin);
      }
      
      // Create more dramatic engine exhaust effect
      const exhaustGeometry = new THREE.ConeGeometry(2, 8, 24, 1, true);
      const exhaustMaterial = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const exhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
      exhaust.position.y = -10;
      exhaust.rotation.x = Math.PI;
      
      // Add point light at exhaust for glow
      const exhaustLight = new THREE.PointLight(0xff5500, 2, 15);
      exhaustLight.position.y = -8;
      
      // Inner brighter exhaust
      const innerExhaustGeometry = new THREE.ConeGeometry(1, 5, 16, 1, true);
      const innerExhaustMaterial = new THREE.MeshBasicMaterial({
        color: 0xffdd00,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide
      });
      const innerExhaust = new THREE.Mesh(innerExhaustGeometry, innerExhaustMaterial);
      innerExhaust.position.y = -8;
      innerExhaust.rotation.x = Math.PI;
      
      // Add spark particles to exhaust
      const sparkGeometry = new THREE.BufferGeometry();
      const sparkCount = 50;
      const sparkPositions = new Float32Array(sparkCount * 3);
      
      for (let i = 0; i < sparkCount * 3; i += 3) {
        sparkPositions[i] = (Math.random() - 0.5) * 2;
        sparkPositions[i + 1] = -10 - Math.random() * 5;
        sparkPositions[i + 2] = (Math.random() - 0.5) * 2;
      }
      
      sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
      
      const sparkMaterial = new THREE.PointsMaterial({
        size: Math.random() * 0.5 + 0.2,
        color: 0xffdd00,
        transparent: true,
        opacity: 0.8
      });
      
      const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
      
      // Add all parts to rocket group
      rocketGroup.add(body);
      rocketGroup.add(stripes);
      rocketGroup.add(nose);
      rocketGroup.add(exhaust);
      rocketGroup.add(exhaustLight);
      rocketGroup.add(innerExhaust);
      rocketGroup.add(sparks);
      
      // Initialize rocket position and data
      rocketGroup.position.set(0, -30, 0);
      rocketGroup.scale.set(1.5, 1.5, 1.5); // Make rocket 50% larger overall
      rocketGroup.userData = {
        exhaust: exhaust,
        innerExhaust: innerExhaust,
        sparks: sparks,
        exhaustLight: exhaustLight,
        launched: false,
        launchDelay: Math.random() * 8000 + 4000, // Quicker launch (4-12 seconds)
        launchTime: 0,
        speed: 0.3, // Start slightly faster
        sparkPositions: sparkPositions
      };
      
      scene.add(rocketGroup);
      return rocketGroup;
    };
    
    const rocket = createRocket();
    
    // Create additional rockets for more visual interest
    const rocket2 = createRocket();
    rocket2.position.set(-30, -40, 20);
    rocket2.userData.launchDelay = Math.random() * 15000 + 10000; // Launch later
    
    const rockets = [rocket, rocket2];
    
    // Add stronger ambient light
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);
    
    // Add directional light (sun) - brighter
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add subtle hemisphere light for more even illumination
    const hemisphereLight = new THREE.HemisphereLight(0x88aaff, 0x553333, 0.5);
    scene.add(hemisphereLight);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse interaction with more sensitivity
    const mouse = {
      x: 0,
      y: 0
    };
    
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const clock = new THREE.Clock();
    let animationId;
    let startTime = Date.now();
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      const currentTime = Date.now();
      
      // Rotate star field slowly
      starField.rotation.y = elapsedTime * 0.02;
      
      // Pulse star sizes slightly for twinkling effect
      if (Math.floor(elapsedTime * 10) % 5 === 0) {
        starMaterial.size = Math.random() * 0.2 + 0.8;
        starMaterial.needsUpdate = true;
      }
      
      // Animate UFOs
      ufos.forEach(ufo => {
        const data = ufo.userData;
        
        // Update path angle for circular movement
        data.pathAngle += data.speed;
        
        // Calculate new position on circular path
        ufo.position.x = Math.cos(data.pathAngle) * data.pathRadius;
        ufo.position.z = Math.sin(data.pathAngle) * data.pathRadius;
        
        // Add hovering effect
        ufo.position.y = data.initialY + Math.sin(elapsedTime * data.hoverFrequency) * data.hoverAmplitude;
        
        // Rotate UFO
        ufo.rotation.y += data.rotationSpeed;
        
        // Animate lights with more vibrant colors
        data.lights.children.forEach((light, i) => {
          if (light instanceof THREE.Mesh) {
            const hue = ((elapsedTime * 0.1) + (i / data.lights.children.length)) % 1;
            light.material.color.setHSL(hue, 1, 0.7);
            
            // Pulse light size slightly
            light.scale.set(
              1 + Math.sin(elapsedTime * 3 + i) * 0.2,
              1 + Math.sin(elapsedTime * 3 + i) * 0.2,
              1 + Math.sin(elapsedTime * 3 + i) * 0.2
            );
          } else if (light instanceof THREE.PointLight) {
            // Update point light color to match the mesh
            const prevIndex = i - 1 >= 0 ? i - 1 : data.lights.children.length - 1;
            if (data.lights.children[prevIndex] instanceof THREE.Mesh) {
              light.color.copy(data.lights.children[prevIndex].material.color);
            }
          }
        });
        
        // Pulse beam opacity for more visibility
        data.beam.material.opacity = 0.3 + Math.sin(elapsedTime * 2) * 0.1;
        data.innerBeam.material.opacity = 0.5 + Math.sin(elapsedTime * 3) * 0.2;
      });
      
      // Rocket animation - enhanced
      rockets.forEach(rocket => {
        if (!rocket.userData.launched) {
          // Check if it's time to launch
          if (currentTime - startTime > rocket.userData.launchDelay) {
            rocket.userData.launched = true;
            rocket.userData.launchTime = currentTime;
          }
        } else {
          // Rocket is launched - animate takeoff
          const launchDuration = (currentTime - rocket.userData.launchTime) / 1000; // seconds
          
          // Increase speed over time (acceleration)
          rocket.userData.speed = Math.min(rocket.userData.speed + 0.01, 2.5);
          
          // Move rocket up
          rocket.position.y += rocket.userData.speed;
          
          // Add some wobble to rocket path
          rocket.rotation.z = Math.sin(launchDuration * 2) * 0.05;
          
          // Animate exhaust with more dramatic effects
          rocket.userData.exhaust.scale.y = 1 + Math.sin(launchDuration * 10) * 0.3;
          rocket.userData.innerExhaust.scale.y = 1 + Math.cos(launchDuration * 15) * 0.4;
          
          // Animate exhaust light intensity
          rocket.userData.exhaustLight.intensity = 2 + Math.sin(launchDuration * 15) * 1;
          
          // Animate spark particles
          const sparkPositions = rocket.userData.sparkPositions;
          for (let i = 0; i < sparkPositions.length; i += 3) {
            // Reset particles that go too far from exhaust
            if (sparkPositions[i + 1] < -15) {
              sparkPositions[i] = (Math.random() - 0.5) * 2;
              sparkPositions[i + 1] = -10 - Math.random() * 3;
              sparkPositions[i + 2] = (Math.random() - 0.5) * 2;
            } else {
              // Move particles downward and outward
              sparkPositions[i] *= 1.04;
              sparkPositions[i + 1] -= 0.2;
              sparkPositions[i + 2] *= 1.04;
            }
          }
          
          rocket.userData.sparks.geometry.attributes.position.needsUpdate = true;
          
          // Reset rocket position when it goes off screen
          if (rocket.position.y > 100) {
            rocket.position.y = -40;
            rocket.position.x = Math.random() * 60 - 30;
            rocket.position.z = Math.random() * 60 - 30;
            rocket.userData.speed = 0.3;
            rocket.rotation.z = 0;
            
            // Add variety with random rotation
            rocket.rotation.y = Math.random() * Math.PI * 2;
          }
        }
      });
      
      // Subtle camera movement based on mouse - more responsive
      camera.position.x += (mouse.x * 15 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 8 - camera.position.y + 10) * 0.02;
      camera.lookAt(0, 0, 0);
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose geometries and materials
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, rgba(5, 15, 45, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)'
      }}
    />
  );
};

export default AnimatedBackground;