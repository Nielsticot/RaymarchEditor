import { GLSL } from "gl-react";
import { getRaymarchNodes } from "../../../utils/raymarchNodes";

const sdfFunctions = getRaymarchNodes()
    .map((node) => node.shaderFunction)
    .join('');

/** 
 * Creates a GLSL shader that use raymarching to render
 * a 3D scene described by a signed distance function
 * @param sdfScene - GLSL function with prototype 'float GetDist(vec3 p)'
 */
export function createRaymarchShader(sdf: string) {
    return GLSL`
    precision highp float;
    uniform vec2 resolution; // Width & height of the shader
    uniform float time; // Time elapsed
    uniform vec3 cameraPosition;
    uniform vec3 cameraRotation;

    // Constants
    #define PI 3.1415925359
    #define TWO_PI 6.2831852
    #define MAX_STEPS 100 // Mar Raymarching steps
    #define MAX_DIST 100. // Max Raymarching distance
    #define SURF_DIST .01 // Surface Distance

    ${sdfFunctions}

    float GetDist(vec3 p) {
        return ${sdf};
    }

    float RayMarch(vec3 ro, vec3 rd) 
    {
        float dO = 0.; //Distane Origin
        for(int i=0;i<MAX_STEPS;i++)
        {
        vec3 p = ro + rd * dO;
        float ds = GetDist(p); // ds is Distance Scene
        dO += ds;
        if(dO > MAX_DIST || ds < SURF_DIST) 
            break;
        }
        return dO;
    }

    vec3 GetNormal(vec3 p)
    { 
        float d = GetDist(p); // Distance
        vec2 e = vec2(.01,0); // Epsilon
        vec3 n = d - vec3(
        GetDist(p-e.xyy),
        GetDist(p-e.yxy),
        GetDist(p-e.yyx));

        return normalize(n);
    }
    float GetLight(vec3 p)
    { 
        // Directional light
        vec3 lightPos = vec3(5.*sin(time),5.,5.0*cos(time)); // Light Position
        vec3 l = normalize(lightPos-p); // Light Vector
        vec3 n = GetNormal(p); // Normal Vector
        
        float dif = dot(n,l); // Diffuse light
        dif = clamp(dif,0.,1.); // Clamp so it doesnt go below 0
        
        // Shadows
        float d = RayMarch(p+n*SURF_DIST*2., l); 
        
        if(d<length(lightPos-p)) dif *= .1;

        return dif;
    }

    void main()
    {
        vec2 uv = (gl_FragCoord.xy-.5*resolution.xy)/resolution.y;
        
        vec3 ro = cameraPosition; // Ray Origin/Camera

        vec3 rd = normalize(vec3(uv.x,uv.y,1)); // Ray Direction

        mat3 rotationMatrix = mat3(cos(cameraRotation.y) * cos(cameraRotation.z), -sin(cameraRotation.z), cos(cameraRotation.z) * sin(cameraRotation.y),
            sin(cameraRotation.x) * sin(cameraRotation.y) * cos(cameraRotation.z) + cos(cameraRotation.x) * sin(cameraRotation.z), cos(cameraRotation.x) * cos(cameraRotation.z) - sin(cameraRotation.x) * sin(cameraRotation.y) * sin(cameraRotation.z), -cos(cameraRotation.y) * sin(cameraRotation.x),
            sin(cameraRotation.x) * sin(cameraRotation.z) - cos(cameraRotation.x) * sin(cameraRotation.y) * cos(cameraRotation.z), cos(cameraRotation.x) * sin(cameraRotation.y) * cos(cameraRotation.z) + sin(cameraRotation.x) * sin(cameraRotation.z), cos(cameraRotation.x) * cos(cameraRotation.y));

        rd = rotationMatrix * rd;
        
        float d = RayMarch(ro,rd); // Distance
        
        vec3 p = ro + rd * d;
        float dif = GetLight(p); // Diffuse lighting
        d*= .2;
        vec3 color = vec3(dif);
        color += GetNormal(p);
        // float color = GetLight(p);

        // Set the output color
        gl_FragColor = vec4(color,1.0);
    }`;
}