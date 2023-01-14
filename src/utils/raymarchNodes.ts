import * as modules from "../types/nodes";
import { RaymarchNode, RaymarchNodeProps } from "../types/nodes";

/** Returns the nodes that are concrete implementations of RaymarchNode */
export function getRaymarchNodes(): typeof RaymarchNode<RaymarchNodeProps>[] {
    return Object.values(modules).filter((module) => {
        return (
            module.prototype instanceof RaymarchNode &&
            module.prototype.getSdf !== undefined
        );
    });
}