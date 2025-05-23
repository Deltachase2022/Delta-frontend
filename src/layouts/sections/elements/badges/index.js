/*
=========================================================
*React React - v2.1.0
=========================================================

* Product Page: https://www.deltachase.in/product/react
* Copyright 2025 Deltachase Team (https://www.deltachase.in)

Coded by www.deltachase.in

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Badges page components
import BadgesGradient from "layouts/sections/elements/badges/components/BadgesGradient";
import BadgesSimple from "layouts/sections/elements/badges/components/BadgesSimple";
import BadgesSimpleRounded from "layouts/sections/elements/badges/components/BadgesSimpleRounded";

// Badges page components code
import badgesGradientCode from "layouts/sections/elements/badges/components/BadgesGradient/code";
import badgesSimpleCode from "layouts/sections/elements/badges/components/BadgesSimple/code";
import badgesSimpleRoundedCode from "layouts/sections/elements/badges/components/BadgesSimpleRounded/code";

function Badges() {
  return (
    <BaseLayout
      title="Badges"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/badges" },
        { label: "Badges" },
      ]}
    >
      <View title="Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
