import { Vector3 } from "../vector";

export interface RaymarchNodeProps {
    name: string,
}

export interface NodeOrigin {
    position: Vector3,
}

export abstract class RaymarchNode<Props extends RaymarchNodeProps> {
    static shaderFunction: string;
    props: Props;

    constructor(props: Props) {
        this.props = props;
    }

    abstract getSdf(origin: NodeOrigin): string;
}