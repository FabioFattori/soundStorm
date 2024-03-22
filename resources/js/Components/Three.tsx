import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";


function Three() {
  const refContainer = useRef(null);
  const loader = new GLTFLoader();

  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    let cube: any = null;
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);
    renderer.setClearColor(0xFFFFFF, 1);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    loader.load(
      // resource URL
      "models/monoNota.gltf",
      // called when resource is loaded
      function (object:any) {
        scene.add(object.scene);
        //position the object in the scene

        object.scene.scale.set(0.5,0.5,0.5);
        object.scene.position.y = -0.3;
        object.scene.position.x = -0.4;
        object.scene.position.z = 4;
        //move the camera back so we can see the scene
        camera.position.z = 5;
        //add lights
        var light = new THREE.PointLight();
        light.position.set(-1,1,4);
        var light2 = new THREE.PointLight();
        light2.position.set(0,1,4);
        scene.add(light);
        scene.add(light2);
        //create a render loop
        renderer.render(scene, camera);

        var animate = function () {
          requestAnimationFrame(animate);
          object.scene.rotation.y += 0.005;
          renderer.render(scene, camera);
        };
        animate();

      },
      // called when loading is in progresses
      function (xhr:any) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // called when loading has errors
      function (error : any) {
        console.log('An error happened',error);
      }
    );


    loader.load(
      "models/doppiaNota.gltf",
      function (object:any) {
        scene.add(object.scene);
        object.scene.scale.set(0.5,0.5,0.5);
        object.scene.position.y = -0.3;
        object.scene.position.x = 0.4;
        object.scene.position.z = 4;
        camera.position.z = 5;
        var light = new THREE.PointLight();
        light.position.set(-1,1,4);
        var light2 = new THREE.PointLight();
        light2.position.set(0,1,4);
        scene.add(light);
        scene.add(light2);
        renderer.render(scene, camera);

        var animate = function () {
          requestAnimationFrame(animate);
          object.scene.rotation.y += 0.005;
          renderer.render(scene, camera);
        };
        animate();
      },
      function (xhr:any) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error : any) {
        console.log('An error happened',error);
      }
    );
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}

export default Three