import './Viewer.css';
import * as THREE from 'three';
import { useRef } from "react";

function Viewer() {
    const canvas = useRef();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas.current
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.TorusGeometry(10,3,16,100);
    const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate()
  return (
    <div className="Viewer">
        ye
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Viewer;
