import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Wait for the DOM to be fully ready
    if (!mountRef.current) return;

    // Get container dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Initialize scene, camera, renderer with exact container dimensions
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });

    // Set size to the exact container size
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Mount renderer to DOM
    mountRef.current.appendChild(renderer.domElement);

    // Create environment map for reflections
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = cubeTextureLoader.load([
      '/envmap/px.png', '/envmap/nx.png',
      '/envmap/py.png', '/envmap/ny.png',
      '/envmap/pz.png', '/envmap/nz.png'
    ]);
    scene.environment = envMap;

    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);

    // Create main sphere with more complex texture
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // Create a custom material with stronger visible effects
    const material = new THREE.MeshStandardMaterial({
      color: '#3b82f6',
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.0,
    });

    // Store original position data for animation
    const originalPositions = new Float32Array(geometry.attributes.position.array);

    // Apply initial distortion
    const positionAttribute = geometry.attributes.position;
    const count = positionAttribute.count;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positionAttribute.array[i3];
      const y = positionAttribute.array[i3 + 1];
      const z = positionAttribute.array[i3 + 2];

      const intensity = 0.1;
      const noise = Math.sin(x * 5) * Math.cos(y * 5) * intensity;

      positionAttribute.array[i3] += noise;
      positionAttribute.array[i3 + 1] += noise;
      positionAttribute.array[i3 + 2] += noise;
    }

    positionAttribute.needsUpdate = true;

    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Create a more visible wireframe sphere
    const wireframeGeometry = new THREE.SphereGeometry(1.3, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: '#60a5fa',
      wireframe: true,
      transparent: true,
      opacity: 0.3 // Increased opacity for visibility
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    group.add(wireframe);

    // Add more visible particle effect
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.2; // Closer to sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05, // Larger particles
      color: '#ffffff',
      transparent: true,
      opacity: 1.0, // Full opacity
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Add stronger glow effect
    const glowGeometry = new THREE.SphereGeometry(1.15, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: '#3b82f6',
      transparent: true,
      opacity: 0.3, // Increased opacity for visibility
      side: THREE.BackSide,
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    glowSphere.scale.set(1.2, 1.2, 1.2);
    group.add(glowSphere);

    // Add brighter lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Brighter ambient
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0); // Brighter directional
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add a brighter point light
    const pointLight = new THREE.PointLight(0x3b82f6, 5, 10); // Much brighter
    pointLight.position.set(2, 0, 0);
    scene.add(pointLight);

    // Position camera further away for better view
    camera.position.z = 3.5;

    // Setup orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    // Animation loop with more pronounced effects
    const animate = () => {
      const animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Update sphere with more pronounced wave animation
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = originalPositions[i3];
        const y = originalPositions[i3 + 1];
        const z = originalPositions[i3 + 2];

        // Create more dramatic waves
        const intensity = 0.15; // Increased wave intensity
        const waveX = Math.sin(y * 4 + elapsedTime) * intensity;
        const waveY = Math.sin(x * 4 + elapsedTime) * intensity;
        const waveZ = Math.cos(x * 4 + elapsedTime) * intensity;

        geometry.attributes.position.array[i3] = x + waveX;
        geometry.attributes.position.array[i3 + 1] = y + waveY;
        geometry.attributes.position.array[i3 + 2] = z + waveZ;
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotate the group for additional movement
      group.rotation.y = elapsedTime * 0.2; // Faster rotation

      // More dramatic point light movement
      pointLight.position.x = Math.sin(elapsedTime * 0.8) * 3;
      pointLight.position.z = Math.cos(elapsedTime * 0.8) * 3;
      pointLight.position.y = Math.sin(elapsedTime * 0.4) * 2;

      // More dramatic glow effect
      const pulseScale = 1.2 + Math.sin(elapsedTime * 2) * 0.1; // Faster, larger pulse
      glowSphere.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate particles more visibly
      particles.rotation.y = elapsedTime * 0.1;
      particles.rotation.x = elapsedTime * 0.05;

      // Rotate wireframe more visibly
      wireframe.rotation.y = -elapsedTime * 0.1;
      wireframe.rotation.z = elapsedTime * 0.1;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      // Stop animation loop
      cancelAnimationFrame(animate);

      // Clean up scene
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener('resize', handleResize);

      // Dispose resources
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%', minHeight: '350px' }}
    />
  );
};

export default ThreeSphere;