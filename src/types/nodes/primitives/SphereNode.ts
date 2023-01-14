import { NodeOrigin } from "..";
import { PrimitiveNode, PrimitiveNodeProps } from "./PrimitiveNode";

interface SphereNodeProps extends PrimitiveNodeProps {
    radius: number,
}

export class SphereNode extends PrimitiveNode<SphereNodeProps> {
    static shaderFunction = `
    float sdSphere( vec3 p, float s )
    {
        return length(p)-s;
    }
    `;

    getSdf(origin: NodeOrigin): string {
        const p = this.props.position.add(origin.position).toGLSL();
        const r = this.props.radius;
        return `sdSphere(p-${p},${r.toPrecision(2)})`;
    }
}