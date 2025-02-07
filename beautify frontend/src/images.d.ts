/* TypeScript declaration file .d.ts */

/* in src folder or root of project if no src */
/* as specified in "include": ["src/ ** / *"] in tsconfig.json */

/* TypeScript treats the imported image as StaticImageData when 
using modules like Next.js or a similar setup that provides advanced image handling. 
=> need to handle the type explicitly. */

/* tells TypeScript to treat image files 
(e.g., .jpg, .png, .svg) as modules exporting a string (the file path). */

declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  
  declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const value: string;
    export default value;
  }
  