












import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";













































































        (error) => console.error(`Error loading ${animationFile}: ${error}`),









































































      this.thirdPersonCamera.position.z - this.character.position.z,































      const rotationMatrix = new Matrix4().lookAt(
        new Vector3(0, 0, 0),
        cameraDirectionXZ,
        new Vector3(0, 1, 0),
      );




























































