// Enhanced configuration with dynamic path detection
window.appConfig = (() => {
  // Get the current script path
  const scripts = document.getElementsByTagName('script');
  const currentScript = scripts[scripts.length - 1];
  const scriptPath = currentScript.src;
  
  // Extract the base path from the script URL
  const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
  const pathParts = basePath.split('/');
  const deploymentPath = '/' + pathParts.slice(3).join('/') + '/';

  return {
    baseUrl: deploymentPath,
    getAssetPath: (path) => {
      // Remove leading slash if present
      path = path.startsWith('/') ? path.substring(1) : path;
      return deploymentPath + path;
    }
  };
})();
