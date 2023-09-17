import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = -50;
camera.position.z = 50;
camera.position.y= 50;

// 创建渲染器
//const renderer = new THREE.WebGLRenderer();
const renderer =new THREE.WebGLRenderer( { alpha: true,antialias: true,precision: 'highp'} );
renderer.useLegacyLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setClearColor( 0xcccccc );
renderer.setPixelRatio( window.devicePixelRatio );
console.log("window.devicePixelRatio---->");
console.log(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.toneMapping = Number(THREE.LinearToneMapping);
renderer.toneMappingExposure = Math.pow(2, 0.0);
const pmremGenerator = new THREE.PMREMGenerator( renderer );
pmremGenerator.compileEquirectangularShader();
const neutralEnvironment =  pmremGenerator.fromScene( new RoomEnvironment() ).texture;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建场景
const scene = new THREE.Scene();
//scene.environment = neutralEnvironment;
scene.background = new THREE.Color(0xeaeaea);

// 添加灯光
//const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//scene.add(ambientLight);

const light1  = new THREE.AmbientLight(0xFFFFFF, 0.3);
light1.name = 'ambient_light';
camera.add( light1 );
const light2  = new THREE.DirectionalLight(0xFFFFFF, 0.8 * Math.PI);
light2.position.set(0.5, 0, 0.866); // ~60º
light2.name = 'main_light';
camera.add( light2 );
//const hemiLight = new THREE.HemisphereLight();
//hemiLight.name = 'hemi_light';
//camera.add(hemiLight);
scene.add(camera);

// 添加控制器
new OrbitControls(camera, document.body);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

const loader = new GLTFLoader();
var obj_count=0;
//const this_url = "./model/tree.gltf";
//const this_url = "./models/tiny_house.glb";
//const this_url = "./models/goku.glb";
//const this_url = "./models2/son_goku.glb";
const this_url = "./models/tifa_nude_1.1.glb";
//const this_url = "./models/tifa_no.glb";
//const this_url = "./models/tifa_nude.glb";
//const this_url = "./models/witch_naked.glb";
//const this_url = "./models/new_witch_naked.glb";
loader.load(this_url, (gltf) => {
    //设置模型大小
    
    //console.log(gltf.scene.scale);
    gltf.scene.traverse( function ( child ) {
        obj_count++;
        //console.log("遍历场景--->");
        //console.log(child);
        if(child.name=="Sketchfab_model"){ //显示位置
			//位置移动到中央
            // child.position.x=-20.84910774230957; 
			gltf.scene.scale.set(5, 5, 5);
//			child.position.x=1;
//			child.position.y=1;
//			child.position.z=1;
//			child.scale.x=1;
//            child.scale.y=1;
//            child.scale.z=1;
            if(this_url=="./models/tiny_house.glb"){
                gltf.scene.scale.set(0.2, 0.2, 0.2);
                child.scale.x=0.2;
                child.scale.y=0.2;
                child.scale.z=0.2;
            //}else if(this_url=="./models/witch_naked.glb"){
            }else if(this_url=="./models/new_witch_naked.glb"){
                child.scale.x=1;
                child.scale.y=1;
                child.scale.z=1;
            }else if(this_url=="./models/tifa_nude.glb"){
				gltf.scene.scale.set(5, 5, 5);
            }else if(this_url=="./models/goku.glb"){
				gltf.scene.scale.set(100, 100, 100);
			}
            console.log("Sketchfab_model.position.x:"+child.position.x);
            console.log("Sketchfab_model.position.y:"+child.position.y);
            console.log("Sketchfab_model.position.z:"+child.position.z);

            console.log("Sketchfab_model.x:"+child.scale.x);//显示大小
            console.log("Sketchfab_model.y:"+child.scale.y);
            console.log("Sketchfab_model.z:"+child.scale.z);
        }
        //child.name="main_mode";
        if ( child.isMesh ) {
             // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
             // roughnessMipmapper.generateMipmaps( child.material );
        }
    });
    scene.add(gltf.scene);
    //var object1 = scene.getObjectByName("Sketchfab_model");
    // console.log("object1.position.x:"+object1.position.x);
});


