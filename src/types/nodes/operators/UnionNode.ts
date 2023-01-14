import { NodeOrigin } from "../RaymarchNode";
import { OperatorNode, OperatorNodeProps } from "./OperatorNode";

export class UnionNode extends OperatorNode<OperatorNodeProps> {
    static shaderFunction = `
    float opUnion( float d1, float d2 ) 
    { 
        return min(d1,d2); 
    }
    `;

    getSdf(origin: NodeOrigin): string {
        const left = this.props.left.getSdf(origin);
        const right = this.props.right.getSdf(origin);
        return `opUnion(${left},${right})`;
    }
}