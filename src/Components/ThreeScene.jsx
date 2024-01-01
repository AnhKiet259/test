import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        // Khởi tạo scene, camera, renderer, và các biến cần thiết
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 10);
        // ... (thêm code khởi tạo)

        // Khởi tạo GLTFLoader và tải model
        const loader = new GLTFLoader();
        loader.load('http://localhost:1880/glb', (gltf) => {
            // Xử lý mô hình 3D
            const model = gltf.scene;
            // ... (thêm code xử lý mô hình)

            // Thêm mô hình vào scene
            scene.add(model);

            // Cập nhật scene khi model đã được tải
            sceneRef.current.add(scene);

            // Khởi tạo OrbitControls
            const controls = new OrbitControls(camera, sceneRef.current);
            controls.target.set(0, 1, 0);
            controls.update();
        });

        // Khởi tạo renderer và thêm vào DOM
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Xử lý sự kiện thay đổi kích thước cửa sổ
        window.addEventListener('resize', onWindowResize, false);

        // Hàm xử lý thay đổi kích thước cửa sổ
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Hàm animate để tạo vòng lặp render
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        // Gọi hàm animate để bắt đầu vòng lặp render
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.body.removeChild(renderer.domElement);
        };
    }, []); // Chỉ chạy một lần khi component được mount

    return <div ref={sceneRef} />;
};

export default ThreeScene;
