import * as modules from "../types/nodes";
import { RaymarchNode, RaymarchNodeProps } from "../types/nodes";

/** Returns the nodes that are concrete implementations of RaymarchNode */
export function getRaymarchNodes(): typeof RaymarchNode<RaymarchNodeProps>[] {
    const res = Object.values(modules).filter((module) => {
        return (
            module.prototype instanceof RaymarchNode &&
            module.prototype.getSdf !== undefined
        );
    });
    console.log(res);
    return res;
}