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

// ProgressBars page components
import ProgressSimple from "layouts/sections/elements/progress-bars/components/ProgressSimple";

// ProgressBars page components code
import progressSimpleCode from "layouts/sections/elements/progress-bars/components/ProgressSimple/code";

function ProgressBars() {
  return (
    <BaseLayout
      title="Progress Bars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/progress-bars" },
        { label: "Progress Bars" },
      ]}
    >
      <View title="Progress bar simple" code={progressSimpleCode}>
        <ProgressSimple />
      </View>
    </BaseLayout>
  );
}

export default ProgressBars;
