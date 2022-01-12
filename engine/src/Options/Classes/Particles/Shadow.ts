import type { IShadow, IOptionLoader } from "../../Interfaces";
import type { ICoordinates } from "../../../Core";
import type { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";

/**
 * @category Options
 * [[include:Shadow.md]]
 */
export class Shadow implements IShadow, IOptionLoader<IShadow> {
    blur;
    color;
    enable;
    offset: ICoordinates;

    constructor() {
        this.blur = 0;
        this.color = new OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };

        this.color.value = "#000";
    }

    load(data?: RecursivePartial<IShadow>): void {
        if (!data) {
            return;
        }

        if (data.blur !== undefined) {
            this.blur = data.blur;
        }

        this.color = OptionsColor.create(this.color, data.color);

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.offset === undefined) {
            return;
        }

        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }

        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}
