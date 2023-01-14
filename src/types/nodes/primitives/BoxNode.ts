import { Vector3 } from "../../vector";
import { NodeOrigin } from "../RaymarchNode";
import { PrimitiveNode, PrimitiveNodeProps } from "./PrimitiveNode";

interface BoxNodeProps extends PrimitiveNodeProps {
    size: Vector3,
}

export class BoxNode extends PrimitiveNode<BoxNodeProps> {
    static shaderFunction = `
    float sdBox( vec3 p, vec3 b )
    {
        vec3 q = abs(p) - b;
        return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    }
    `;

    getSdf(origin: NodeOrigin): string {
        const p = this.props.position.add(origin.position).toGLSL();
        const s = this.props.size.toGLSL();
        return `sdBox(p-${p},${s})`;
    }
}