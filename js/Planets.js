var sunMesh, earthMesh, cloudMesh, marsMesh, skyMesh, centerEarth, centerMars;
function createPlanets(){
  createSun();
  createEarth();
  createMars();
}

function createSun(){
  //create sphere
  var geometry = new THREE.SphereGeometry(10,32,32);
  var material = new THREE.MeshPhongMaterial({
    specular: new THREE.Color('white'),
    shininess:20,
    emissive: new THREE.Color('yellow'),
    map: THREE.ImageUtils.loadTexture('materials/sun.jpg'),
  });
  sunMesh = new THREE.Mesh(geometry, material);
  scene.add(sunMesh);
}

function createEarth(){
  //create sphere
  var geometry = new THREE.SphereGeometry(1,32,32);
  var material = new THREE.MeshPhongMaterial({
    map : THREE.ImageUtils.loadTexture('materials/earth.jpg'),
    bumpMap : THREE.ImageUtils.loadTexture('materials/earthbump.jpg'),
    bumpScale : 0.03,
    specularMap : THREE.ImageUtils.loadTexture('materials/earthspec.jpg'),
    specular  : new THREE.Color('grey'),
    shininess: 5,
  });
  earthMesh = new THREE.Mesh( geometry, material);

  //create clouds
  var geometry = new THREE.SphereGeometry(1.005,32,32);
  var material  = new THREE.MeshPhongMaterial({
    map     :  THREE.ImageUtils.loadTexture('materials/clouds.png'),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });
  cloudMesh = new THREE.Mesh(geometry, material);

  //create rotation center
  centerEarth = new THREE.Object3D();
  earthMesh.position.x = 40;
  earthMesh.add(cloudMesh);
  centerEarth.add(earthMesh);
  scene.add(centerEarth);
}

function createMars(){
  //create sphere
  var geometry = new THREE.SphereGeometry(0.53,32,32);
  var material = new THREE.MeshPhongMaterial();
  marsMesh = new THREE.Mesh( geometry, material);

  //create rotation center
  centerMars = new THREE.Object3D();
  marsMesh.position.x = 61;
  centerMars.add(marsMesh);
  scene.add(centerMars);

}

function animatePlanets(){
  //Earth
  centerEarth.rotation.y += 0.005;
  earthMesh.rotation.y += 0.005;
  cloudMesh.rotation.y -= 0.006;
  cloudMesh.rotation.x -= 0.001;

  //Mars
  centerMars.rotation.y += 0.00405;
  marsMesh.rotation.y += 0.005;
}
