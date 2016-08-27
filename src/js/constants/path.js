let basePath='';
if(window.location.hostname.includes('github')){
  basePath= '/mailapp';
}else{
  basePath='';
}

let homePage = '/';
let publicPath = `${basePath}/public-assets/`;

export default {
  publicPath,
  basePath,
  homePage,
};
