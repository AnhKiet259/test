import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        // Khởi tạo scene, camera, renderer, và các biến cần thiết

        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.set(3, 3, 1);
        camera.lookAt(0, 0, 0);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        const light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
        light.position.set(0, 1, 0);
        scene.add(light);

        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(6, 6),
            new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
        );

        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        const grid = new THREE.GridHelper(6, 20, 0x000000, 0x000000);
        grid.material.opacity = 0.1;
        grid.material.transparent = true;
        scene.add(grid);
        const maxContainerWidth = 1000;
        const maxContainerHeight = 1000;
        const scaleFactor = Math.min(maxContainerWidth / window.innerWidth, maxContainerHeight / window.innerHeight);
        // ... (thêm code khởi tạo)

        // Khởi tạo GLTFLoader và tải model
        const loader = new GLTFLoader();
        loader.load('https://raw.githubusercontent.com/AnhKiet259/Test3D/master/mohinh.glb', (gltf) => {
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
