<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let canvas;

  onMount(() => {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    // Octahedron
    const octGeo = new THREE.OctahedronGeometry(2.2, 2);
    const octMat = new THREE.MeshBasicMaterial({ color: '#b8a400', wireframe: true, transparent: true, opacity: 0.15 });
    const oct = new THREE.Mesh(octGeo, octMat);
    scene.add(oct);

    // Resize handler
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    let frameId;
    let last = performance.now();
    const animate = (now) => {
      frameId = requestAnimationFrame(animate);
      const delta = (now - last) / 1000;
      last = now;
      oct.rotation.x += delta * 0.07;
      oct.rotation.y += delta * 0.11;
      renderer.render(scene, camera);
    };
    animate(last);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  });
</script>

<canvas bind:this={canvas} class="fixed inset-0 w-full h-full -z-10 pointer-events-none" />
