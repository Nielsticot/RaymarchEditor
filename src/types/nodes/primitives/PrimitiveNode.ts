import { Vector3 } from "../../vector";
import { RaymarchNode, RaymarchNodeProps } from "../RaymarchNode";

export interface PrimitiveNodeProps extends RaymarchNodeProps {
    position: Vector3,
}

export abstract class PrimitiveNode<Props extends PrimitiveNodeProps> extends RaymarchNode<Props> {}