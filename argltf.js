//import * as THREE from 'three';

//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

window.addEventListener("DOMContentLoaded", init);
function init() {
    //渲染设定
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(new THREE.Color(), 0);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    document.body.appendChild(renderer.domElement);
    //画面設定
    const scene = new THREE.Scene();
    scene.visible = false;
    //const camera = new THREE.Camera();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.lookAt(new THREE.Vector3(20,-24,7))


    scene.add(camera);
    const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    scene.add(light);
    //画面設定
    window.addEventListener('resize', () => {
        onResize();
    });
    function onResize() {
        arToolkitSource.onResizeElement();
        arToolkitSource.copyElementSizeTo(renderer.domElement);
        if (arToolkitContext.arController !== null) {
            arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
        }
    };
      
    //AR周りの設定
    const arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam'
    });
    arToolkitSource.init(() => {
        setTimeout(() => {
            onResize();
        }, 2000);
    });
    const arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });
    arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });
    
    //const gltfloader = new THREE.GLTFLoader();
    const gltfloader = new GLTFLoader();
    //const this_url = "./model/tree.gltf";
    const this_url = "./models/tiny_house.glb";
    //const this_url = "./models/witch_naked.glb";
    //const this_url = "./models/new_witch_naked.glb";
    console.log("this_url:"+this_url);
    gltfloader.load(this_url,function(gltf){
            //设置模型大小
            console.log(gltf.scene.scale);
            const nameNode = gltf.scene.getObjectByName("Sketchfab_model");
            //const nameNode = gltf.scene.getObjectByName("Yennefer_Naked_medfbx");
            if(this_url=="./models/new_witch_naked.glb"){
                gltf.scene.scale.set(1.5, 1.5, 1.5);
            }else if(this_url=="./models/tiny_house.glb"){
                gltf.scene.scale.set(0.002, 0.002, 0.002);
            }
            console.log("nameNode.position.x:"+nameNode.position.x);
            console.log("nameNode.position.y:"+nameNode.position.y);
            console.log("nameNode.position.z:"+nameNode.position.z);
            console.log("nameNode.scale.x:"+nameNode.scale.x);//显示大小
            console.log("nameNode.scale.y:"+nameNode.scale.y);
            console.log("nameNode.scale.z:"+nameNode.scale.z);
            /*
            gltf.scene.traverse( function ( child ) {//第二种方法，遍历
                if(child.name=="Sketchfab_model"){ //显示位置                  
                    if(this_url=="./models/new_witch_naked.glb"){
                         child.scale.x=0.5;
                    }
                }
                if ( child.isMesh ) {
                     // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
                     // roughnessMipmapper.generateMipmaps( child.material );
                }
            });*/
          marker1.add(gltf.scene);
      });

    //マーカー設定  
    const marker1 = new THREE.Group();
    scene.add(marker1);
    const arMarkerControls = new THREEx.ArMarkerControls(arToolkitContext, marker1, {
        type: 'pattern',
        patternUrl: 'data/patt.hiro',
    });
    //レンダリング
    requestAnimationFrame(function animate(){
        requestAnimationFrame(animate);
        //console.log('camera.position:',camera.position);
        if (arToolkitSource.ready) {
            arToolkitContext.update(arToolkitSource.domElement);
            scene.visible = camera.visible;
        }
        renderer.render(scene, camera);
    });
}
