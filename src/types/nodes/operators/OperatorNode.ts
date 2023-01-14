import { RaymarchNode, RaymarchNodeProps } from "../RaymarchNode";

export interface OperatorNodeProps extends RaymarchNodeProps {
    left: RaymarchNode<RaymarchNodeProps>,
    right: RaymarchNode<RaymarchNodeProps>,
}

export abstract class OperatorNode<Props extends OperatorNodeProps> extends RaymarchNode<Props> {}