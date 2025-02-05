import { displayThreatLevel, getThreatLevel } from "./threat.js";

//TODO localize this
export const registerGameSettings = function () {
    game.settings.register("twdu", "threatLevel", {
        name: "Threat Level",
        hint: "Threat Level",
        scope: "world",
        config: false,
        type: Number,
        default: 1,
        onChange: () => {
            displayThreatLevel(getThreatLevel());
        },
    });


    //TODO debug this

    game.settings.register("twdu", "threatLevelVisibility", {
        name: game.i18n.localize("twdu.threatDisplay"),
        hint: game.i18n.localize("twdu.threatDisplayHint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: debouncedReload,
      });

    game.settings.register("twdu", "defaultTokenSettings", {
        name: 'twdu.prototypeTokenSettings',
        hint: 'twdu.prototypeTokenSettingsHint',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
        onChange: debouncedReload,
        });

};