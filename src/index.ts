/**
 * @amlplugins/amazon-ecs
 *
 * Thin namespaced re-export of the native @aws-sdk/client-ecs SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Amazon ECS — clusters, task definitions, services, tasks, capacity providers (Fargate/EC2).
 */

import * as _sdk from "@aws-sdk/client-ecs";
export * from "@aws-sdk/client-ecs";
export { _sdk as sdk };
export default _sdk;
