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

//React React components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";

// Stats page components code
import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white" py={6}>
          <TabsSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
