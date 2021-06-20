import React from "react";
import { languageLogoB4 } from "../helpers/languageLogoB64";
export default function LanguageLogo(prop) {
    const language = prop.language;
    let logoB64 = "";
    for (const el of languageLogoB4) {
        if (el.language == language) {
            logoB64 = el.b64;
            break;
        }
    }
    return (
        <div id="language-logo" style={{ textAlign: "center" }}>
            <div>
                <img src={logoB64} />
            </div>
        </div>
    );
}
