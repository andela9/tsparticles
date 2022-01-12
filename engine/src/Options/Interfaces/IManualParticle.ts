import type { ICoordinates } from "../../Core";
import type { RecursivePartial } from "../../Types";
import { IParticlesOptions } from "./Particles";

/**
 * Manual particles options
 * [[include:Options/ManualParticles.md]]
 * @category options
 */
export interface IManualParticle {
    /**
     * Particle position in canvas size percent, if undefined a random position will be used
     */
    position?: ICoordinates;

    /**
     * Particle options, this properties will override the general particles configuration
     */
    options?: RecursivePartial<IParticlesOptions>;
}
