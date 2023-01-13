export const sdfPrimitive = `
    float sdSphere( vec3 p, float s )
    {
    return length(p)-s;
    }

    float sdBox( vec3 p, vec3 b )
    {
    vec3 q = abs(p) - b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    }

    float sdTorus( vec3 p, vec2 t )
    {
    vec2 q = vec2(length(p.xz)-t.x,p.y);
    return length(q)-t.y;
    }

    float sdCone( vec3 p, vec2 c, float h )
    {
    float q = length(p.xz);
    return max(dot(c.xy,vec2(q,p.y)),-h-p.y);
    }

    float sdPlane( vec3 p, vec3 n, float h )
    {
    // n must be normalized
    return dot(p,n) + h;
    }
`;