import { NodeOrigin } from "../RaymarchNode";
import { OperatorNode, OperatorNodeProps } from "./OperatorNode";

interface SmoothUnionNodeProps extends OperatorNodeProps {
    smooth: number,
}

export class SmoothUnionNode extends OperatorNode<SmoothUnionNodeProps> {
    static shaderFunction = `
    float opSmoothUnion( float d1, float d2, float k ) 
    {
        float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
        return mix( d2, d1, h ) - k*h*(1.0-h); 
    }
    `;

    getSdf(origin: NodeOrigin): string {
        const left = this.props.left.getSdf(origin);
        const right = this.props.right.getSdf(origin);
        const smooth = this.props.smooth.toPrecision(3);
        return `opSmoothUnion(${left},${right},${smooth})`;
    }
}