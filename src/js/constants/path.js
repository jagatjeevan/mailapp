let basePath='';
if(window.location.hostname.includes('github')){
  basePath= '/mailapp';
}else{
  basePath='';
}

let publicPath = `${basePath}/public-assets/`;
let homePage = '/';
let aboutPage = '/about';


export default {
  publicPath,
  basePath,
  homePage,
  aboutPage
};
