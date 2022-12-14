 AFRAME.registerComponent('tree-manager', {         
          init: function () {
            let el = this.el;
            let comp = this;
            let data = this.data;
            comp.scene = el.sceneEl.object3D;  
            comp.counter = 0;   
            comp.treeModels = [];
            comp.modelLoaded = false;

            // After gltf model has loaded, modify it materials.
            el.addEventListener('model-loaded', function(ev){
              let mesh = el.getObject3D('mesh'); 
              if (!mesh){return;}
              //console.log(mesh);
              mesh.traverse(function(node){
                 if (node.isMesh){  
                   let mat = new THREE.MeshPhongMaterial;
                   let color = new THREE.Color(0xaa5511);
                
                   mat.color = color;
                   mat.wireframe = false;
                   node.material = mat;                  
                 }
              });
              comp.modelLoaded = true;
            });   
          }
        });